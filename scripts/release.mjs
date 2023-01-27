/* eslint-disable */
// prettier-ignore
// Replaces semantic-release with zx script
// https://github.com/semrel-extra/zx-semrel

(async () => {
    $.verbose = !!process.env.VERBOSE
    $.noquote = async (...args) => { const q = $.quote; $.quote = v => v; const p = $(...args); await p; $.quote = q; return p }

    const changelogPath = 'CHANGELOG.md';
    const GIT_COMMITTER_NAME = 'release-bot';
    const GIT_COMMITTER_EMAIL = 'release-bot@robot.com';
    const ACCESS_OVER_HTTP = process.env.ACCESS_OVER_HTTP || false;
    const GITLAB_TOKEN = process.env.GITLAB_TOKEN;
    const RUN_DRY = process.env.RUN_DRY || false;

    // Git configuration
    if (ACCESS_OVER_HTTP && !RUN_DRY) {
        if (!GITLAB_TOKEN) {
            throw new Error('env.GITLAB_TOKEN must be set');
        }
    }

    const gitAuth = `${GIT_COMMITTER_NAME}:${GITLAB_TOKEN}`
    const originUrl = (await $`git config --get remote.origin.url`).toString().trim()
    const [,,repoHost, repoName] = originUrl.replace(':', '/').replace(/\.git/, '').match(/.+(@|\/\/)([^/]+)\/(.+)$/)
    const repoPublicUrl = `https://${repoHost}/${repoName}`
    const repoAuthedUrl = `https://${gitAuth}@${repoHost}/${repoName}`

    if (!RUN_DRY) {
        await $`git config user.name ${GIT_COMMITTER_NAME}`;
        await $`git config user.email ${GIT_COMMITTER_EMAIL}`;
    }

    if (ACCESS_OVER_HTTP && !RUN_DRY)
        await $`git remote set-url origin ${repoAuthedUrl}`;

    // Commits analysis
    const semanticTagPattern = /^(v?)(\d+)\.(\d+)\.(\d+)(-SNAPSHOT)?$/
    const releaseSeverityOrder = ['major', 'minor', 'patch']
    const semanticRules = [
        {emoji: '✨', group: 'Features', releaseType: 'minor', prefixes: ['feat']},
        {emoji: '🐞', group: 'Fixes & improvements', releaseType: 'patch', prefixes: ['fix', 'perf', 'refactor', 'docs', 'add', 'edit']},
        {emoji: '💥', group: 'BREAKING CHANGES', releaseType: 'major', keywords: ['BREAKING CHANGE', 'BREAKING CHANGES']},
    ]

    const tags = (await $`git tag -l --sort=-v:refname`).toString().split('\n').map(tag => tag.trim())
    const lastTag = tags.find(tag => semanticTagPattern.test(tag))
    console.log("last tag find: ", lastTag)
    const commitsRange = lastTag ? `${(await $`git rev-list -1 ${lastTag}`).toString().trim()}..HEAD` : 'HEAD'
    const newCommits = (await $.noquote`git log --format=+++%s__%b__%h__%H ${commitsRange}`)
        .toString()
        .split('+++')
        .filter(Boolean)
        .map(msg => {
            const [subj, body, short, hash] = msg.split('__').map(raw => raw.trim())
            return {subj, body, short, hash}
        })

    const semanticChanges = newCommits.reduce((acc, {subj, body, short, hash}) => {
        semanticRules.forEach(({emoji, group, releaseType, prefixes, keywords}) => {
            const prefixMatcher = prefixes && new RegExp(`^(${prefixes.join('|')})(\\(\\w+\\))?:\\s.+$`)
            const keywordsMatcher = keywords && new RegExp(`(${keywords.join('|')}):\\s(.+)`)
            const change = subj.match(prefixMatcher)?.[0] || body.match(keywordsMatcher)?.[2]

            if (change) {
                acc.push({
                    emoji,
                    group,
                    releaseType,
                    change,
                    subj,
                    body,
                    short,
                    hash
                })
            }
        })
        return acc
    }, [])
    console.log('semanticChanges=', semanticChanges)

    const nextReleaseType = releaseSeverityOrder.find(type => semanticChanges.find(({releaseType}) => type === releaseType))
    if (!nextReleaseType) {
        console.log('No semantic changes - no semantic release.')
        return
    }
    const nextVersion = ((lastTag, releaseType) => {
        if (!releaseType) {
            return
        }
        if (!lastTag) {
            return '0.0.1-SNAPSHOT'
        }

        lastTag = lastTag.replace('-SNAPSHOT','')
        console.log('lastTag: ', lastTag)
        const [, , c1, c2, c3] = semanticTagPattern.exec(lastTag)
        if (releaseType === 'major') {
            return `${-~c1}.0.0`
        }
        if (releaseType === 'minor') {
            return `${c1}.${-~c2}.0`
        }
        if (releaseType === 'patch') {
            return `${c1}.${c2}.${-~c3}`
        }
    })(lastTag, nextReleaseType) + '-SNAPSHOT'

    const nextTag = 'v' + nextVersion
    const releaseDiffRef = `## 🚀 [${nextVersion}](${repoPublicUrl}/compare/${lastTag}...${nextTag}) (${new Date().toISOString().slice(0, 10)})`
    const releaseDetails = Object.values(semanticChanges
        .reduce((acc, {emoji, group, change, short, hash}) => {
            const {commits} = acc[group] || (acc[group] = {commits: [], group, emoji})
            const commitRef = `* ${change} ([${short}](${repoPublicUrl}/commit/${hash}))`

            commits.push(commitRef)

            return acc
        }, {}))
        .map(({emoji, group, commits}) => `### ${emoji} ${group} \n${commits.join('\n')}`)
        .join('\n')

    const releaseNotes = releaseDiffRef + '\n' + releaseDetails + '\n'

    const { stdout: preVersion } = await $`echo $(npm pkg get version)`;
    console.log(`pre git version: ${tags}`);
    console.log(`pre npm pkg version: ${preVersion}`);
    console.log(`next version: ${nextVersion}`);

    // Update changelog
    await $`echo ${releaseNotes}"\n$(cat ${changelogPath})" > ${changelogPath}`

    // Update package.json version
    await $`npm --no-git-tag-version version ${nextVersion}`

    // Prepare git commit and push
    // Hint: PAT may be replaced with a SSH deploy token
    // https://stackoverflow.com/questions/26372417/github-oauth2-token-how-to-restrict-access-to-read-a-single-private-repo
    const releaseMessage = `chore(release): version ${nextVersion}`
    await $`git add -A .`
    await $`git commit -am ${releaseMessage}`
    await $`git tag -a ${nextTag} HEAD -m ${releaseMessage}`

    // if (!RUN_DRY) await $`git push --follow-tags origin HEAD:main`

    console.log(chalk.bold('Great success!'))
})()
