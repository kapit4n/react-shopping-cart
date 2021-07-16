![Home](https://raw.githubusercontent.com/kapit4n/react-shopping-cart/master/mockups/react2-seller-home07.png)

## Available Scripts

### tech
- redux
- react
- react form hooks

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### run with docker
- sudo  docker build -t shopping:dev .
- docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true shopping:dev

### installation utils
$ sudo apt-get remove docker docker-engine docker.io
$ sudo apt-get update
$ sudo apt install docker.io
$ sudo snap install docker
$ docker --version