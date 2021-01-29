# **PICROSSX**

## TABLE OF CONTENT 
* [Introduction](#introduction)    

* [UX and design decisions](#ux-and-design-decisions)
    * [Colors](#colors)
    * [Fonts](#fonts)
    * [Background](#background)
    * [Buttons](#buttons)
* [Wireframes and Screenshots](#wireframes-and-screenshots)
* [Features](#features)
    * [Existing features](#existing-features)
    * [Features in the future](#features-in-the-future)
* [Technologies](#technologies)
* [Testing](#testing)
    * [UX testing](#ux-testing)
    * [Validators](#validators)
    * [Chrome DevTools](#chrome-devtools)
    * [Testing game](#testing-game)
    * [Design responsiveness](#design-responsiveness)
    * [Button and link testing](#button-and-link-testing)   
* [Deployment](#deployment)
* [Credits](#credits)
    * [Content](#content)
    * [Acknowledgment](#acknowledgment)
* [Commits](#commits)


## INTRODUCTION

![Responsive image for game](assets/images/responsive.png)
[Live game](https://ernestamajute.github.io/PicrossX/)<br>
[Repository](https://github.com/ErnestaMajute/PicrossX)

This project is logic puzzle game. This game was created with purpose of brain training and to use logical thinking. Designed to be easy enough for kids and more complex for adults. Game has 3 different dificulty levels to suit all player's - beginers and advanced. 80s RETRO design used to improve user experience. 


## UX AND DESIGN DECISIONS

Goal of this puzzle game is to provide entertainment. Meet player's needs by having intuitive navigation and fun design. Designed for all range devices. Created for fans of Nanograms and first time players.<br>
By visiting this site as a user I want:
* play a game to improve my logic thinking.  
* be able to navigate through the game with no difficulty. 
* be provided with different difficulty levels. 
* have feedback on how well I am playing so as I can track my progress.
* play puzzle game and have a good experience.

### Colors

Colors which were used set to match 80s theme of the game. 80s known as colorful time. High contrast in web - yellow, black, blue, pink, red color chosen to create retro atmoshere.

### Fonts

Font "Press Start 2P" picked exactly to remind 1980s arcade games. "Sans Serif" font added as backup font.

### Backgroud

Background image chosen theme is 80s Retro Sci-Fi. To match idea of the game, at the same time not being overwhelming, but colorful.

### Buttons

Buttons has high contrast from background image, to get atention, and to entertain by being colorful.


## WIREFRAMES AND SCREENSHOTS
* [Wireframes: desktop, tablet, mobile](assets/images/wireframes/picrossX-wireframe.png)
* [Screenshots: desktop, tablet, mobile](assets/images/screenshots)
* [Screenshots: solutions](assets/images/solutions.png)


## FEATURES

### Existing features

Home page contains game header, play button which links to the levels page. Also main page has RULES button, which opens modal with simple rules. Modal has a button with link to the Wikipedia(Nanogram) page. Main page has a leaderboard modal with player's highscores. Page footer contains link to the web where from background image taken from.

![Image of index.html page](assets/images/index.html-page.png)

Second page contains back button which links player to the home page, also contains header, and buttons with levels. They link to other pages with tables 10x10, 15x15 or 20x20. Second page has a footer with link to the webpage where background image taken from.

![Image of levels.html page](assets/images/levels.html-page.png)

Puzzle pages contains back button, game table, restart, leaderboard and give up buttons with modals.
Back button links you to levels page.
Game table contains timer which count players time.
Game table also has score counter, to count player's score.
Table contains numbers on top and on the left. By using these numbers, player has to push the right sqares and by doing that uncover semi-abstract picture.

![Image of 10x10.html page](assets/images/10x10.html-page.png)
![Image of 15x15.html page](assets/images/15x15.html-page.png)
![Image of 20x20.html page](assets/images/20x20.html-page.png)

Restart button simply restarts game (reloads) current page.<br>

Trophy button opens leaderboard modal, which contains players name, score and time.

![Image of leaderboard modal](assets/images/leaderboardModal.png)

Give up button opens modal.
Give up modal shows player's score and stopped timer.

![Image of give up modal](assets/images/giveupModal.png)

When player wins, win modal shows up. Which asks for name, and shows score and time. That data goes to the local storage. And shows up in leaderboard modal.

![Image of won modal](assets/images/wonModal.png)

### Features in the future

1. Generate table header's numbers, to have more levels in 10x10, 15x15 and 20x20 puzzles.
2. Add sound effects, like music and and sound when button or square clicked.
3. Possibility to login for player, to continue their progress.


## TECHNOLOGIES

* HTML5
* CSS
* JAVASCRIPT(ES6)
* Gitpod
* GitHub
* Font Awesome for icons
* Google Fonts
* jQuery for DOM manipulation
* Bootstrap4 for page layout and responsive design
* W3C validator to check HTML syntax
* CSS jigsaw validator to check CSS syntax
* JSHint validator to check JAVASCRIPT syntax
* Chrome developer tools for testing the page through the development
* Microsoft Paint used to create collages from wireframes and screenshots


## TESTING

Details of testing during development.

| Test                | Stage                                            | Tool                                          |
|---------------------|:-------------------------------------------------|:----------------------------------------------|
|Syntax errors        |While developing and after completion             |W3C HTML validator, CSS validator, JSHint      |
|Debugging            |During the project                                |Chrome developer tools                         |
|Reponsive design     |During the project                                |Chrome developer tools                         |
|User game testing    |Since JavaScript code was written                 |Manual                                         |
|Browser compatibility|When project completed                            |Manual testing on different browsers           |                    
|Button testing       |While developing and after completion             |Manual                                         |
|Links testing        |While developing and after completion             |Manual                                         |

### UX testing

User goals accomplished by:

1. Goal: **play a game to improve my logic thinking.**<br>
Nonograms used to increase brain activity, helps get better at solving puzzles. While player has to think constantly this game increase sharpness, logical and quick thinking.
As well trains long term memory, analytical thinking and [spatial cognition](https://en.wikipedia.org/wiki/Spatial_cognition).

2. Goal: **be able to navigate through the game with no difficulty.**<br>
Design is user friendly. If player selects "PLAY" it link to the levels page, where player can select level difficulty, when player selects difficulty in links to the game. Buttons text has clear meanings.

3. Goal: **be provided with different difficulty levels.**<br>
Game provides tree different dificulty puzzles. Which can be played by kids and adults. At the momment there is just 3 puzzles, in the future that will be improved.

4. Goal: **have feedback on how well I am playing so as I can track my progress.**<br>
In each puzzle, on top in the left corner there is a timer and score counter, which show to players their progress. If player gives up, modal shows up with final score and time. If user wins, modal shows up with high score. After winning user can insert name and his high score will be stored, and other users will be aable to see that high score with user's name next to it.

5. Goal: **play puzzle game and have a good experience.**<br>
This achieved by using colors and fun design. Design makes game fun and more visually appealing.<br>

Goals tested by getting feedback from family members, friends who played game. Comments were made about futher improvements, and what they would like to see in this game. All that is mentioned in **Features in the future** section.

### Validators

Code syntax were checked with validators:

* [W3C validator HTML](https://validator.w3.org/)
* [CSS validator JIGSAW](https://jigsaw.w3.org/css-validator/)
* [JSHint validator](https://jshint.com/)

Errors fixed, final results bellow:

| Test                           | Expected result                | Results            |                                 
|:-------------------------------|:-------------------------------|:-------------------|
|W3C validator HTML              |No errors or warnings           |Pass                |
|CSS validator JIGSAW            |No errors or warnings           |Warnings appear     |                            
|JSHint validator                |No errors or warnings           |Warnings appear     |

![html validator](assets/images/html-validator.png)
![css validator](assets/images/css-validator.png)

JSHint results (warnings):

![JSHint validator](assets/images/javascript-warnings.png)

### Chrome DevTools

Chrome Developer Tools were used during development in:
* Layout 
* Looking for errors
* Fixing bugs
* Getting correct output (with console)  


