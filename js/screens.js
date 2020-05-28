// switches to starting screen
const startingScreen = () => {
    choicesCard.style.visibility = "hidden";

    questionCard.style.visibility = "hidden";

    startScreen.style.visibility = "visible";

    stats.style.visibility = "hidden";

    lose.style.visibility = "hidden";

    win.style.visibility = "hidden";


    choicesCard.style.opacity = "0";

    questionCard.style.opacity = "0";

    startScreen.style.opacity = "1";

    stats.style.opacity = "0";

    lose.style.opacity = "0";

    win.style.opacity = "0";
};

// switches to choices screen
const choicesScreen = () => {
    choicesCard.style.visibility = "visible";

    questionCard.style.visibility = "hidden";

    startScreen.style.visibility = "hidden";

    stats.style.visibility = "visible";

    lose.style.visibility = "hidden";

    win.style.visibility = "hidden";

    
    choicesCard.style.opacity = "1";

    questionCard.style.opacity = "0";

    startScreen.style.opacity = "0";

    stats.style.opacity = "1";

    lose.style.opacity = "0";

    win.style.opacity = "0";
}

// switches to lose screen
const loseScreen = () => {
    choicesCard.style.visibility = "hidden";

    questionCard.style.visibility = "hidden";

    startScreen.style.visibility = "hidden";

    stats.style.visibility = "visible";
    
    lose.style.visibility = "visible";

    win.style.visibility = "hidden";

    
    choicesCard.style.opacity = "0";

    questionCard.style.opacity = "0";

    startScreen.style.opacity = "0";

    stats.style.opacity = "1";
    
    lose.style.opacity = "1";

    win.style.opacity = "0";
};

// switches to win screen
const winScreen = () => {
    choicesCard.style.visibility = "hidden";

    questionCard.style.visibility = "hidden";

    startScreen.style.visibility = "hidden";

    stats.style.visibility = "hidden";
    
    lose.style.visibility = "hidden";
    
    win.style.visibility = "visible";
    
    
    choicesCard.style.opacity = "0";

    questionCard.style.opacity = "0";

    startScreen.style.opacity = "0";

    stats.style.opacity = "0";
    
    lose.style.opacity = "0";
    
    win.style.opacity = "1";
};

// switches to question screen
const questionScreen = () => {
    choicesCard.style.visibility = "hidden";

    questionCard.style.visibility = "visible";

    startScreen.style.visibility = "hidden";

    stats.style.visibility = "visible";
    
    lose.style.visibility = "hidden";
    
    win.style.visibility = "hidden";
    
    
    choicesCard.style.opacity = "0";

    questionCard.style.opacity = "1";

    startScreen.style.opacity = "0";

    stats.style.opacity = "1";
    
    lose.style.opacity = "0";
    
    win.style.opacity = "0";
};