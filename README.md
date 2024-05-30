# c8-tsx-coverage-issue

To reproduce the coverage issue between `c8` and `tsx`, run the following commands:

```
npm i
npm run test:coverage
```

You will see that, even though the `index.ts` is fully tested, the 1st line is uncovered:

```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |     87.5 |     100 |     100 |
 index.ts |     100 |     87.5 |     100 |     100 | 1
----------|---------|----------|---------|---------|-------------------
```
