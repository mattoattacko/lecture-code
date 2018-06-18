Dependencies
----------------------------------------------------------------------------------------------------------------
react               - Front End Magic (actually the only thing that’ll end up in the browser (aside from assets)
rect-dom            - Turns react into a browser rendering engine
                    - There's others ... react-native for devices, react-ncurses for terminal apps


webpack             - The Bundler
webpack-cli
webpack-merge
webpack-dev-server  - Sorta like nodemon — will reload the browser
html-webpack-plugin - Will generate the right (dynamic and different) script and css tags for the index.html file

node-sass           - SCSS Compiler
style-loader
sass-loader         - Turns SASS into CSS
resolve-url-loader  - Allows relative paths in the SASS code
css-loader          - Turns CSS code into a JS object that webpack can understand
mini-css-extract-plugin

babel-core          - Transforms ES6 code into ES5
babel-eslint
babel-loader        - Hooks babel up to webpack
babel-preset-react  -
babel-preset-env    - Transpiles down the proper ES version
babel-preset-stage-0
babel-plugin-transform-object-rest-spread   - (gives us the … for objects)

extract-text-webpack-plugin                 - Takes CSS code and turns it into a separate css bundle

dotenv
jest
enzyme
enzyme-adapter-react-16

eslint
eslint-config-airbnb-base
eslint-plugin-import
eslint-plugin-jest
eslint-plugin-react


--- NPM INSTALL ---
npm i -D react react-dom webpack webpack-cli webpack-merge webpack-dev-server html-webpack-plugin node-sass style-loader css-loader sass-loader resolve-url-loader mini-css-extract-plugin extract-text-webpack-plugin babel-core babel-eslint babel-loader babel-preset-react babel-preset-env babel-preset-stage-0 babel-plugin-transform-object-rest-spread dotenv jest enzyme enzyme-adapter-react-16 eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jest eslint-plugin-react