![](https://img.shields.io/badge/Microverse-blueviolet)

# Project Name

  <h3 align="center">JavaScript / Capstone --> [SAMSON DALILA]</h3>

![image](https://user-images.githubusercontent.com/11162987/119517888-ad8b8e80-bd80-11eb-94f8-bbb30675dec0.png)

<!-- ABOUT THE PROJECT -->
## About The Project

This is a Capstone project that marks the completion of the JavaScript module in the Microverse Curriculum.
It is an RPG game, specifically a platform game. The main inspiration was from multiplayer online games.
In this particular game the action is mainly focused on collecting as many chests as possible while having to combat monsters.

![Hireable](https://img.shields.io/badge/Hireable-yes-success) ![](https://img.shields.io/badge/Mobile--responsive-yes-green) ![](https://img.shields.io/badge/-Microverse%20projects-blueviolet)



[Live Demo Link](https://billodiallo.github.io/RPG-GAME/)


## Built With

- Javascript/ES6
- npm
- Webpack
- HTML/CSS
- Github Actions
- Stylelint
- ESLint
- Phaser3
- Leaderboard API service for the scores' leaders board.


## Prerequisities

To get this project up and running locally, you must follow the steps from the [getting started section](#getting-started).

## Getting Started

**To get this project set up on your local machine, follow these simple steps:**

**Step 1**<br>
Navigate through the local folder where you want to clone the repository and run<br>
git clone `https://github.com/billodiallo/RPG-GAME.git`. It will clone the repo to your local folder.<br>

**Step 2**<br>
- Cd inside the project
- run  npm run-script build
- npm start

### How to Play

The game can be played using the arrow keys for moving the player and the spacebar for attacking the monster.
By moving the player you will be able to collect chests that contain gold. Each chest will update the score with a random amount between 20 and 30 golds.
Each character has a health bar, player included. The monster's health bar will decrease each time the player attacks, but watch out, the monsters have a random movement and each time you will attack they will fight back making your health bar decrease.
As a bonus though, for each monster killed the player will have back some gold and some life to increase his health bar.

### Design Process

Samson dalila  was designed on an initial, quite complex, webpack configuration specific for Phaser3. This allowed me to investigate Phaser and its tools from a specific perspective. The entire map was built with Tiled on a 32 x 32 collection of squares. The map then has been exported as a json file and used for placing chests, and monsters at random positions.

The player has a set velocity and can move across the map by using the arrow keys. Each time the player dies it will be spawned at a different random position to make the game more interesting. The monsters and the chests will be as well randomly generated and spawned on the map. Each spawned element has a random unique id used to interact with the user. The unique id is generated with the help of uuid npm package.



## 🤝 contributing

Contributions, issues and feature requests are welcome!

## Author

👤 Billo Dallio

- GitHub: [@billodiallo](https://github.com/billodiallo)
- Twitter: [@BilloDi83547008](https://twitter.com/BilloDi83547008)
- LinkedIn: [Billo Diallo](https://www.linkedin.com/in/mabillodiallo/)

## 🙋‍♂ show your support

give a ⭐️ if you like this project!

## 📝 license



This project is [MIT](LICENSE) licensed.

