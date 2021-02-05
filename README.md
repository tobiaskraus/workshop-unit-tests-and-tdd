# Workshop: unit tests & test driven development

## Topics

1. Theory (see Miro board)
1. How to setup / integrate tests
    1. Plain JS
    1. Plain TS
    1. Create-react-app
        - `npx create-react-app {name-of-project}`

## 2.1 Jest with JS

### 1.1.1 Create a project with JEST

Create a folder `jest-js/` inside `/example-projects/`

Run:

```
cd examples/jest-js
```

```
npm init -y
```

create a file `.gitignore` inside `/example-projects/jest-js` with this content:

```
/node_modules
```

Run:

```
npm install --save-dev jest
```

Add the following section to your package.json:

```
{
  "scripts": {
    "test": "jest --watch"
  }
}
```

Create a folder `src/` inside `/examples/jest-js`

...

### 1.1.2 Create your test(s) first

JIRA story: Serialnumber Validation

> The user should be warned if he types in a serial number which doesn't match our format:
>
> e.g. "DE-255-233ab34"

Validation Rules

-   consists of 3 segments, divided by a `-` character
-   first segment:
    -   country ISO code
    -   2 chars
    -   all capital
-   second segment:
    -   3 digits
    -   number between 000 and 360
-   third segment:
    -   6 - 8 chars
    -   digits & letters: `a`, `b`, `c`

What you should know

-   JEST methods
    -   `test(name, fn, timeout)`
    -   `expect(value)`
        -   `.not`
        -   `.toBe(value)`
        -   `.toEqual(value)`
    -   more global methods: https://jestjs.io/docs/en/api
    -   more expect methods: https://jestjs.io/docs/en/expect

Example

```js
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
```

Now you!

-   create a file `validate-serialnumber.test.js` inside `/examples/jest-js/src/`
-   write one or more tests of your validation function (which doesn't exist yet)
-   run `npm run test`
    -   it runs until you stop it and watches for code changes
    -   observe the output while developing (place the terminal in your view)
-   **your test(s) should fail**
-   create the function `validateSerialnumber(serial): boolean`
    -   either in a seperate file and `module.exports` it and `require` it in your test file
    -   or just create the function in your `.test.js` file (not good for real projects)
-   write code until the test succeeds
-   continue adding tests and / or refactor code
