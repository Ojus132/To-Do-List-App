# To-Do-List-App
This is a simple to-do list web app made by me using node, express, ejs and bootstrap.

## Functionality : 
1. You can switch between today's to-do list and work related to-do list from the navbar.
2. It takes input from the user for new tasks and adds the task to the list (NOTE : Refreshing the page on /todaySubmit or /workSubmit will lead to resubmission of the task, i will be working on the fix). 
3. There is not a database attached to the app, so everytime you restart the server, the list will reset.

## Setup : 
Step by step by guide to run the server from the repository on your device.

1. Open the folder you want the website to be in and open the terminal or gitbash.
2. Type ```git clone https://github.com/Ojus132/To-Do-List-App.git``` in terminal to clone the repository locally.
3. Make sure you have node.js installed on your system. If you don't, check out the official [website of nodeJS](https://nodejs.org/en/download).
4. Open terminal for the cloned repository or cd to the directory and type ```npm i``` or ```npm install``` to install all the necessary node modules.
5. Then type ```node index.js``` to run the server through the terminal.
6. Finally open any browser on your device and open ```localhost:3000```.
7. This opens the website for your use. Have fun!
