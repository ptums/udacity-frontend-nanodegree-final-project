# Udacity FrontEnd Nanodegree Final Project

This repository contains the code base to my solution for [Udacity's Front End Developer Nanodegree final project](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011). This is a travel app that utilizes the features of Dark Sky API, Geo Names API, and Pixabay API to provide details and images about the location provided by the user. This project utilizes webpack4, sass, html, css, and javascript to create a **progressive web application** with offline and mobile download capabilities.

## Build Status

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
![Website Down](https://camo.githubusercontent.com/3202fdb5566d5e0cef4ae932e4756973a1b6d3b9/68747470733a2f2f696d672e736869656c64732e696f2f776562736974652d75702d646f776e2d677265656e2d7265642f687474702f6d7966616b65776562736974657468617473686f756c646e6f7465786973742e61742e6c656173742e692e686f70652e737667)

## Tech Used

* [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [ES6](http://es6-features.org/#Constants)
* [Express.js](https://expressjs.com/)
* [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
* [Jest](https://jestjs.io/)
* [Sass](https://sass-lang.com/)
* [Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
* [Webpack4](https://webpack.js.org/)

## Installation

```
git clone https://github.com/ptums/udacity-frontend-nanodegree-final-project.git
cd udacity-frontend-nanodgree-final-project
```

Install the backend express server dependencies ```npm install```.

## Development

Start the backend server ```npm run start```. 

Then in a new terminal window run ```npm run build-dev``` to create a devleopment build of the front end part of the application.

This application is developed using weback-dev-server so you have access to a local server for development. Once the development server is running open ```http://localhost:8080``` in the browser.


## Production

To save the changes you made to a production build run the command ```npm run build-prod```. Then if you want to access to the production version of the application open ```http://localhost:3004``` in the browser.
