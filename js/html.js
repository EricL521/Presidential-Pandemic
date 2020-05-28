// html variables
const choicesCard = document.getElementById("law-screen");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const title = document.getElementById("law-title");
const content = document.getElementById("law-content");

const questionCard = document.getElementById("question-screen");
const choice1 = document.getElementById("button-1");
const choice2 = document.getElementById("button-2");
const questionTitle = document.getElementById("question-title");

const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-game");

const stats = document.getElementById("stats");
const wealthP = document.getElementById("wealth");
const healthP = document.getElementById("health");
const happinessP = document.getElementById("happiness");
const approvalP = document.getElementById("approval");

const lose = document.getElementById("lose-screen");
const win = document.getElementById("win-screen");

const restartButton = document.getElementsByClassName("restart-button");

yes.onclick = () => {
    currentChoice = choices[currentChoiceIndex];

    wealth += currentChoice.results.wealth;
    health += currentChoice.results.health;
    happiness += currentChoice.results.happiness;
    approval += currentChoice.results.approval;

    health -= 2;

    currentQuestionIndex = 0;
    if (currentChoice.questions && currentChoice.questions.length > 0) {
        questionScreen();
        updateQuestion();
    }
    else {
        updateChoice();
    }
};

no.onclick = () => {
    currentChoice = choices[currentChoiceIndex];

    approval --;
    approval -= Math.round(currentChoice.results.approval / 2);

    health -= 2;

    currentQuestionIndex = 0;
    updateChoice();
};

choice1.onclick = () => {
    let question = choices[currentChoiceIndex].questions[currentQuestionIndex];

    wealth += question.results[0].wealth;
    health += question.results[0].health;
    happiness += question.results[0].happiness;
    approval += question.results[0].approval;

    currentQuestionIndex ++;
    updateQuestion();
};

choice2.onclick = () => {
    let question = choices[currentChoiceIndex].questions[currentQuestionIndex];

    wealth += question.results[1].wealth;
    health += question.results[1].health;
    happiness += question.results[1].happiness;
    approval += question.results[1].approval;

    currentQuestionIndex ++;
    updateQuestion();
};

for (let i = 0; i < restartButton.length; i ++) {
    restartButton[i].onclick = () => {
        wealth = 50;
        health = 50;
        happiness = 50;
        approval = 50;

        currentChoiceIndexList = [... currentChoiceIndexListBackup];
        
        startingScreen();
    };
}

startButton.onclick = () => {
    choicesScreen();

    updateChoice();
};