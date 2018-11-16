# webtask-webpack
[Webtask.io](https://webtask.io) Boilerplate Using [Webpack](https://webpack.js.org)

Create serverless endpoints using modern JavaScript tooling.

# Why?
Using the built-in webtask editor is convenient but has too many compromises. I became spoiled by the experiences of other [JavaScript boilerplates](https://github.com/electron-react-boilerplate/electron-react-boilerplate#readme) that introduced me to the beauty of Babel, Flow and ESLint. These technologies combine to make JavaScript feel more safe.

# Benefits
* Use editor of choice: linting, code completion
* Local version control for all code changes

# Features
* [Express](https://expressjs.com)
* [Babel](https://babeljs.io)
* [Flow](https://flow.org)
* [ESLint](https://eslint.org)

# Todo
* Add npm script for logging
* Add npm script for automatic build/deploy (watch)
* Add logic to bundle modules that don't exist in the sandbox

# Deployment
Two environment variables are required for the wt command to succeed.
```
export WT_PROFILE=your-profile
export WT_NAME=your-name
```
