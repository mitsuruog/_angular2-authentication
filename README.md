# angular2-minimum-starter [![Dependency Status](https://gemnasium.com/mitsuruog/angular2-minimum-starter.svg)](https://gemnasium.com/mitsuruog/angular2-minimum-starter)

Minimum starter kit for angular2

## Get started

 ```
 git clone --depth 1 https://github.com/mitsuruog/angular2-minimum-starter.git
 cd angular2-minimum-starter
 npm install 
 npm start
 npm test
 ```

## Demo

https://angular2-minimum-starter.herokuapp.com/

## Features

Base on official 5min quick start.  
:warning: [NOTICE] **Development only. Don't use for productuon.**
 
- [x] Minimun Angular2 dependencies
- [x] Minimun configure TypeScript
- [x] Minimun configure Visual Studio Code
- [x] Minimun development HTTP Server
- [x] Minimun Javascript intellisense via typings 
- [x] Minimun test seed and coverage 
- [x] Module loader via SystemJS
- [x] Easy to deploy on Heroku
- [x] Bootstrap template

## Tasks

- `npm start` to fire up dev server.
- `npm test` to run unit test.
- `npm run coverage` to build a HTML coverage report.

## Notice deploy to Heroku

When deploy to Heroku, please carefully read important notice as below.

Since Heroku usually don’t install all `devDependencies` in production builds. You should install all `devDependencies`, you disable `NPM_CONFIG_PRODUCTION` at Heroku settings on app.

```
heroku config:set NPM_CONFIG_PRODUCTION=false
```

## License

MIT
