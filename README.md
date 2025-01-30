# Tic Tac Toe Game

## Overview
This is a simple Tic Tac Toe game built using **HTML, CSS, and JavaScript**. The game allows two players to play alternately by clicking on the grid. It detects winning conditions and displays the winner, while also providing a reset button to restart the game.

## Features
- Interactive **3x3 grid** for gameplay
- Players take turns playing as **'X'** and **'O'**
- Displays the **current player's move**
- **Automatically detects the winner** and disables further clicks
- **Reset button** to restart the game
- Smooth **UI design with animations**

## Technologies Used
- **HTML** for the structure
- **CSS** for styling and layout
- **JavaScript** for game logic and interactivity

## How to Play
1. Open `index.html` in a web browser.
2. Click on any empty box to place an **'X'** or **'O'**.
3. Players alternate turns until:
   - One player wins (three in a row, column, or diagonal)
   - The game results in a draw (no empty spaces left)
4. Once a player wins, further moves are disabled.
5. Click the **Reset** button to start a new game.

## Game Logic
- Uses an **array to store game state**.
- Click events are assigned to each box to **switch turns**.
- A **winning pattern array** is used to check for the winner.
- Once a win condition is met, clicks are disabled.
- Reset button **clears the board** and restores functionality.

## Installation & Usage
1. Clone this repository:
   ```sh
   git clone https://github.com/princeraj1161/tic-tac-toe.git
   ```
2. Open the `index.html` file in any browser.
3. Enjoy playing!


