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
