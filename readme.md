Call of Java!
================

Read me for call of java, my first project for Sparta Global during SDET training.

## Purpose

The purpose of this project was to impliment the skills that have been learnt during the first two weeks of training on the Sparta Gloabl SDET training course.

As well as demonstrating the recently learned web development skills that are present in the application. I have also put into practise using BASH/Terminal to navigate through folders and to make regular commits to GitHub.

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
* Responsive web development
* http://www.picresize.com/

## Usage

### Building


During the projects lifecycle there has been multiple changes from what the initial design was, but all following the same base mechanics of using on click methods to remove enemies. 
The initial plan was to create a game where enemies would appear from behind stationary blocks with a set timer. If the user failed to click on the in 3 seconds then they would lose a life.
Some of these themes have run over into the final release of the game, with the clicking on enemies within a certain time to score and if the user fails to do this they will lose a life. 

However the main change has been how and where the enemies appear, in the final release the enemies all appear on the left hand side of the screen before animating to the right hand side and back to the left before disappearing. This adds an extra layer of challenge by having moving targers rather than stationary adding an extra layer of diffuclty to the game. I achieved this using the animate method on an image of originally a solider which later change to a paratrooper to fit the games aesthetic more, as the image goes from side to side and goes down, the idea of an enemy parachuting into battle is more realistic than just the image of a soldier moving back and forth across the screen. 

For the placement of the enemy combatant I used multiple random number generators. The height of where the enemy will spawn on the page, is done by changing the CSS in the Javascript and adding a margin-top percentage so that it will change position everytime and by the generator only going to 25 it ensures the enemy won't go off the page. Random generators are also used to randomise the length of the that the enemy will travel and how low it will go, this randomised element means no 2 games will ever be the same keeping a simple game somewhat fresh. 

To keep track of the users score I have used an on click method, whenever the user clicks on an enemy the enemy is removed, and the score is incremented by 100, as well as increasing the score the animation speed, enemy respawn rate and enemy life span are decreased to increase the difficulty as the score gets higher. As well as removing the enemy when the user scores, if the user fails to click on the enemy in the set time the users hit points will decrease until they reach 0 and then the game is over. 

After the game has finished the users score will be logged on a leaderboard which will store the top 3 scores and the players name who scored it, this is done by storing the data in an object and then sorting the scores in an array before displaying them in a list for the user to see. 

After getting the functionality and mechanics of the game working to an acceptable level I changed my concentration towards styling the application. The colour scheme was one of the most difficult parts to get right, going through multiple designs, with originally a camoflage background which looked quite dull, boring and didn't really fit the theme of the game. After I decided to change the enemy to a paratrooper I decided that having a sky background would fit well and originally decided to have a sunset style colour gradient although because the image itself has a white background it caused it to clash with the background. This led me to the final background which is still a sky theme but much lighter and blue so that the difference between the background and the background of the image aren't as noticable. I also chose to add a sound effect when the user clicks on an enemy the sound of a sniper rifle shooting and reloading to add an extra element to the game rather than just a silent application.

### Running

The site is running through GitHub.

## Site

[Click here to witness 'Call of Java'](https://lhemingway.github.io/firstProject/)

This is the most up to date version of the site. 
