# HorseRaceProject1

# Card Game: Horse Racing

#### By _** Dulce Jaramillo, some guidence from Chase Van Halen**_

#### _Card game that allows betting on the odds your "horse" will win by the most cards of a suit drawn._

### Motavation 
* Was to complete a project showing my new skills learned in the last five weeks of PerScholas. Show undersing of HTML, CSS, JavaScript
## Technologies Used

* HTML
* CSS
* JavaScript
* Chat gpt
* GitHUb

## Code style/ Code Examples/ Tests
* For almost every function and variable created a console.log was ran to make sure functions worked correctly. Some code styles were: hidden, random, push/ splice,if statments, for loops, add event listeners, set timers, and arrays, disabled. Some tests included testing card counts to verify cards were being removed from deck once played, making sure the right amount of money was placed into their "bank". Checking the winner. This is an example of code that checked their dollar amount in the console.log:
if (betOn=="h"){
            dollars+= wager*2
            money.textContent= "$ " + dollars
            console.log(dollars)
            console.log(wager)
           }

## Description

A card game. The point of the game is to have the suit you bet on win. This happens when the player clicks the deck of cards. The click action will randoming choose 6 cards to determine the odds on betting that are given in the sidebar. A bet is placed by the player. The amount of money they bet is taken from their "bank".  The player then clicks the "deck of cards" to reviel a card that has a suit on it (spades, clubs, diamonds,and hearts). Based on the suit, the "horse" moves forward. The click action is repeated till it crosses the finish line. (This means that cards are hidden and unhidden to show the advancement of the "horse"). Once the "horse" wins, the winner is announced, money is added to their bank, the round ends. If player loses, they don't get their money back. There is both a reset button for the next round and a reset player button for a new player.  Game ends if the player loses money and can no longer bet.

## Features
* the betting aspect
* reseting the round
* random cards chosen then not used again



## Setup/Installation Requirements

* Have Internet acces
* Enter[Click here]( https://dulcelj55.github.io/HorseRaceProject1/ )in command bar to play game
* For gitHub access clone the following address:[click here] (https://github.com/dulcelj55/HorseRaceProject1.git)
* Enjoy
* Share with Friends

## Build Status
*Still in progress 
*figuring how to update to gitHub
## Known Bugs

* CSS layout is off
* Odds to determine bet are not working

## License

If you run into any issues or have questions, ideas or concerns, or make a contribution to the code please cocontact me at thenutritionaljourney@yahoo.com.

Copyright (c) September 2, 2023  Dulce Jaramillo
MIT License



Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
