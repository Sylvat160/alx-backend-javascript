# Resources

Read or watch:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/promises/)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Promises (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the Promise object
- Throw / Try
- The `await` operator
- How to use an async function

## Requirements

### General

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- All of your functions must be exported

### Setup

- Install NodeJS 12.11.x (in your home directory):

  ```
  curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
  sudo bash nodesource_setup.sh
  sudo apt install nodejs -y
  $ nodejs -v
  v12.11.1
  $ npm -v
  6.11.3
  ```

- Install Jest, Babel, and ESLint in your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run `npm install`.

### Configuration Files

Add the files below to your project directory:

- package.json
  (Content not provided here)
- babel.config.js
  (Content not provided here)
- utils.js
  Use when you get to tasks requiring `uploadPhoto` and `createUser`.
  (Content not provided here)
- .eslintrc.js
  (Content not provided here)

### and…

Don’t forget to run `$ npm install` when you have the package.json

# Response Data Format

`uploadPhoto` returns a response with the format:

```json
{
  status: 200,
  body: 'photo-profile-1',
}
```

`createUser` returns a response with the format:

```json
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```