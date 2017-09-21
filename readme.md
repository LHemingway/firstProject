Call of Java!
================

Read me for call of java, my first project for Sparta Global during SDET training.

## Purpose

This is a sample HTML5 / JS / CSS SPA (Single Page Application) developed with AngularJS.

Markup has been styled to be responsive, according to the device used to view the app.

It is intended as a demonstration of technical capabilities rather than design or helpful data. :-)

Note also that it is a work in progress; you can check out what features are in the pipeline in the [issues](#issues) list.

## Functionality

It is a simple browser based game. When the game begins after the user has entered their name, paratroopers will start at the left hand side of the screen, swing to the right and back to the left before disappearing.

In this time the users aim is to click on the paratrooper to score points and remove it from the screen. Failing to do so will result in the user losing a life of which they start with 3. After all 3 lives are lost the game will end and the user will be given the option to play again. 

## Implementation

The functionality has been implemented using the following features:

* HTML5
* Semantic HTML5
* CSS
* CSS Bootstrap
* semantic HTML5
* Javascript
* JQuery
* Sublime
* Responsive web development/design (no separate m-dot site)
* http://www.picresize.com/

## Usage

### Building

Fork/clone this repo, then:

``` sh
$ bower install && npm install
# build the dev distribution:
$ grunt dev
# run the unit tests:
$ grunt test
# just build the docs
$ grunt docs
# build the prod distribution (includes clean, test & docs) :
$ grunt prod
```

### Running

Set up local web servers to point to `dist/dev` and `dist/prod` for _dev_ and _prod_ distributions, respectively.

## Issues

The github issue system holds the issues for this project:

* [all](https://github.com/mcalthrop/angular-spa-demo/issues)
* [bugs](https://github.com/mcalthrop/angular-spa-demo/labels/bug)
* [enhancements](https://github.com/mcalthrop/angular-spa-demo/labels/enhancement)
* [investigate](https://github.com/mcalthrop/angular-spa-demo/labels/investigate)

## site

[mcalthrop.github.io/angular-spa-demo/](http://mcalthrop.github.io/angular-spa-demo/)

This site is kept up to date with the latest code in the codebase.
