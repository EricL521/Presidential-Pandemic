// list of not chosen choices
let currentChoiceIndexList = [];
for (let i = 0; i < choices.length; i ++) {
    if (choices[i].name != "") {
        currentChoiceIndexList.push(i);
    }
}
let currentChoiceIndexListBackup = [... currentChoiceIndexList];

// stats
let wealth = 50;
let health = 50;
let happiness = 50;
let approval = 50;

let currentQuestionIndex = 0;

let currentChoiceIndex = 0;
// index of the list for current choice index
let currentChoiceIndexListIndex = 0;

const updateQuestion = () => {
    if (currentQuestionIndex >= choices[currentChoiceIndex].questions.length) {
        currentChoiceIndex = 0;
        choicesScreen();
        updateChoice();
    } else {
        let question = choices[currentChoiceIndex].questions[currentQuestionIndex];
        questionTitle.innerText = question.question;
        choice1.innerText = question.choices[0];
        choice2.innerText = question.choices[1];
        
        if (wealth <= 0 || health <= 0 || happiness <= 0 || approval <= 0) {
            if (wealth <= 0) {
                wealth = 0;
            }
            if (health <= 0) {
                health = 0;
            }
            if (happiness <= 0) {
                happiness = 0;
            }
            if (approval <= 0) {
                approval = 0;
            }
        }
    }

    // updates stats
    wealthP.innerHTML = "Wealth: " + wealth;
    healthP.innerHTML = "Health: " + health;
    happinessP.innerHTML = "Happiness: " + happiness;
    approvalP.innerHTML = "Approval: " + approval;
}

// updates to next choice
const updateChoice = () => {
    if (currentChoiceIndexList.length == 0) {
        winScreen();
    }
    else {
        currentChoiceIndexListIndex = Math.floor(Math.random() * currentChoiceIndexList.length);
        currentChoiceIndex = currentChoiceIndexList[currentChoiceIndexListIndex];
        currentChoiceIndexList.splice(currentChoiceIndexListIndex, 1);

        if (wealth <= 0 || health <= 0 || happiness <= 0 || approval <= 0) {
            if (wealth <= 0) {
                wealth = 0;

                loseScreen();
            }
            if (health <= 0) {
                health = 0;

                loseScreen();
            }
            if (happiness <= 0) {
                happiness = 0;

                loseScreen();
            }
            if (approval <= 0) {
                approval = 0;

                loseScreen();
            }
        }
        else {
            // sets up law
            title.innerText = choices[currentChoiceIndex].name;
            content.innerText = choices[currentChoiceIndex].content;

            choicesScreen();
        }

        if (wealth >= 100) {
            wealth = 100;
        }
        if (health >= 100) {
            health = 100;
        }
        if (happiness >= 100) {
            happiness = 100;
        }
        if (approval >= 100) {
            approval = 100;
        }

        // updates stats
        wealthP.innerHTML = "Wealth: " + wealth;
        healthP.innerHTML = "Health: " + health;
        happinessP.innerHTML = "Happiness: " + happiness;
        approvalP.innerHTML = "Approval: " + approval;
    }
};
