# Shakhnevich Law Firm React JS

<img src="https://i.ibb.co/QYDmM6T/logo.jpg" width="300" height="300">

Shaknevich Law Firm is a modern Javascript Site based on React Components and Bootstrap 4 Framework

## Table of contents
* [General info](#general-info)
* [Features](#features)
* [Screenshots](#screenshots)
* [Getting Started](#getting-started)
* [Site Link](#site-link)
* [Credits](#credits)
* [License](#license)

## General Info

This site was created for Law, Lawyers or any kind of Law related business or company. It contains custom made pages for Law Firm niche, like practices, attorneys, contacts and etc. Designed on grid system, the site will look sharp on all screens.

## Features

* Bootstrap 4.3+
* Form to Email Services
* Redux
* React Router 4
* ES6+
* React Router Dom 5.0.0
* Webpack
* Babel
* Google Fonts
* Google Maps
* Sass(.scss)
* Heroku

## Screenshots
|Home Page|Content|
|:--:|:--:|
|![](https://i.ibb.co/dQz7djS/Screen-Shot-2019-09-10-at-5-04-25-PM.png)|![](https://i.ibb.co/6Zksv68/Screen-Shot-2019-09-10-at-5-05-23-PM.png)|

|Arease of Practice|Map|
|:--:|:--:|
|![](https://i.ibb.co/L5h3D4M/Screen-Shot-2019-09-10-at-5-05-39-PM.png)|![](https://i.ibb.co/0YTwkWd/Screen-Shot-2019-09-10-at-5-06-02-PM.png)|


## Getting Started

### Prerequisites

* [Node and npm](https://www.npmjs.com/get-npm)

### Installing

1. Clone this repo, `$ git clone git://github.com/KonstantinSavinov/Shakhnevich-Law-Firm-React-JS.git `
2. Go to project's root directory, `$ cd Shakhnevich-Law-Firm-React-JS`
3. Run `$ npm install` to install dependencies
4. Run `$ npm start` to start the test application (running on port 8080)
    
#### *Optional 
1. Setup your first [FormCarry](https://formcarry.com/documentation/getting-started) to send forms to email services
* Copy the form endpoint from your FormCarry account and paste it to `index.js` file that can be found by the path: `src/components/Form/`

```javascript
_axios.default.post("https://formcarry.com/s/XXXXXX"),
```
2. To use the [Maps Embed API](https://developers.google.com/maps/documentation/embed/get-api-key) you must have an API key
* Copy the API key from your Google Cloud Platform Console account and paste it to `index.js` file that can be found by the path: `src/components/GoogleMaps/`

```javascript
googleMapURL: "https://maps.googleapis.com/maps/api/js?key=--YOUR-KEY-GOES-HERE--&libraries=geometry,drawing,places",
```
## Site Link
The site is running on [Heroku server](https://shakhnevichlaw.herokuapp.com/). Heroku is a platform that enables developers to build, run, and operate applications entirely in the cloud.

## Credits
* [Konstantin Savinov](https://github.com/KonstantinSavinov)
* [Yuri Yurchenko](https://github.com/YuriusY)

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).