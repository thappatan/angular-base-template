PROJECT_NAME = angular-base-template
REGISTRY =

.PHONY: help install run pack server

help: ## Display this help screen
	@grep -h -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

run: ## Run application
	npm run start

dev: ## Develop application
	npm run dev

build: ## Build and pack application
	npm run build

server: ## Build and run application with lite server
	npm run build:w&
	sleep 5; npm run local

docker-build: ## Build and pack application with docker image
	docker build -t $(REGISTRY) .

docker-run: ## Run application with docker container
	docker run --name $(PROJECT_NAME)-container -d -p 8888:80 $(REGISTRY)

docker-push: ## Push docker image to registry
	docker push $(REGISTRY)

release: ## Bump App Version without auto push to repository
	npm run release:dry

push: ## Push release
	git pull
	git push --follow-tags
