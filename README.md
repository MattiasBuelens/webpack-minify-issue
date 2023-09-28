# Webpack minify issue

## How to run

```bash
npm install
npm run build
npm run start
```

## Expected results

The web page should display the text "Test succeeded!".

## Actual results

The web page displays the text "Running test...", and the following error appears in the browser console:

```
Uncaught TypeError: Super constructor null of anonymous class is not a constructor
    at new document.body.innerText (main.js:1:81)
    at main.js:1:43
```
