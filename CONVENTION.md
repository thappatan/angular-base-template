- [ข้อตกลงในการ commit](#ข้อตกลงในการ-commit)
- [Commit Example](#commit-example)

## ข้อตกลงในการ commit

Commit Format: `<type>(<scope>): <message>`

```
add(Page): calculate tax
^-^ ^--^   ^------------^
|    |            |
|    |             +-> Message.
|    +-> Scope (ใช้เป็น PascalCase or CapitalCamelCase) เป็น optional ใช้ระบุ scope หรือ module ของส่ิงที่จะ commit เช่น Page, Component, Layout, Shared, Doc, ...
|
+-------> Type ใช้ feat, add, fix, refactor, perf, test.
```
[PascalCase or CapitalCamelCase]()
 
## Commit Example

- การเพิ่ม function, feature, menu (หรืออะไรที่เกี่ยวกับการเพิ่มมาใหม่)

```
ตัวอย่าง:
feat(Tax): calculate tax
```

- การ แก้ไข performance code

```
ตัวอย่าง:
perf: calculate tax
```

- การ Refactor Code หรือ ปรับโครงสร้าง

```
ตัวอย่าง:
refactor: calculate tax
```
- การเพิ่มเอกสารเกี่ยวกับ code

```
ตัวอย่าง:
docs: calculate tax
```

- การแก้ Bugs หรือ ปิด Issue

```
ตัวอย่าง:
// กรณี ปิด issue
fix: #<เลข issue> เช่น fix: #1 typo calculate

// กรณี แก้บักเฉย ๆ
fix: function sum invalid
```


- การแก้ไข code ที่ไม่ใช่แก้ bug
```
ตัวอย่าง:
edit(User): edit save function 
```


- การเพิ่ม code ที่ไม่ใช่เพิ่ม feature
```
ตัวอย่าง:
add(User): check role function 
```

- การเพิ่ม ลบ แก้ไขเกี่ยวกับ test
```
ตัวอย่าง:
test(User): edit create user test case 

test: add user test case
```
## ข้อตกลงในการ coding

1. git flow

```
1. coding ที่ branch feat/สิ่งที่เราทำ (แตกมาจาก integrate) เช่น feat/calculate-tax
2. แก้ bug ที่ branch bug/สิ่งที่เราแก้ หรือ fix/สิ่งที่เราแก้ (แตกมาจาก integrate) เช่น fix/calculate-tax-error, bug/calculate-tax-error
3. เมื่อ feat เสร็จ ให้ merge เข้า integrate 
4. เมื่อไหร่จะทดสอบกับ backend จึง merge จาก integrate เข้า develop
```
