// Combine questions from different files
const quizQuestions = {
    kasaysayan: {
        easy: easyQuestions.kasaysayan,
        normal: normalQuestions.kasaysayan,
        hard: hardQuestions.kasaysayan
    },
    lokasyon: {
        easy: easyQuestions.lokasyon,
        normal: normalQuestions.lokasyon,
        hard: hardQuestions.lokasyon
    },
    musika: {
        easy: easyQuestions.musika,
        normal: normalQuestions.musika,
        hard: hardQuestions.musika
    }
};

// Existing code...
const landingPage = document.querySelector(".landing-page");
const gameCategory = document.querySelector(".game-category");
const difficultySelection = document.querySelector(".difficulty-selection");
const quizSection = document.querySelector(".quiz");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");

let currentQuestionIndex = 0;
let questions = [];
let score = 0;
let selectedCategory = '';
let selectedDifficulty = '';

// Function to show the landing page
function showLandingPage() {
    landingPage.style.display = "flex";
    gameCategory.style.display = "none";
    difficultySelection.style.display = "none";
    quizSection.style.display = "none";
    popup.style.display = "none";
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    selectedCategory = '';
    selectedDifficulty = '';
}

// Function to show the game category selection
function showGameCategory() {
    landingPage.style.display = "none";
    gameCategory.style.display = "flex";
    difficultySelection.style.display = "none";
    quizSection.style.display = "none";
    popup.style.display = "none";
}

// Function to select category
function selectCategory(category) {
    selectedCategory = category;
    gameCategory.style.display = "none";
    difficultySelection.style.display = "flex";
}

// Function to start the quiz with selected difficulty
function startQuiz(difficulty) {
    selectedDifficulty = difficulty;
    difficultySelection.style.display = "none";
    quizSection.style.display = "flex";
    popup.style.display = "none";
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    questions = [...quizQuestions[selectedCategory][selectedDifficulty]];
    shuffleArray(questions);
    displayQuestion();
}

// Function to display the current question
function displayQuestion() {
    optionsContainer.style.display = '';
    popup.style.display = "none";
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion && currentQuestion.question) {
        questionElement.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";
        const options = [...currentQuestion.incorrect_answers];
        options.push(currentQuestion.correct_answer);
        shuffleArray(options);

        options.forEach((option) => {
            const isCorrect = option === currentQuestion.correct_answer;
            addOption(option, isCorrect);
        });
    } else {
        console.error("Maling format ng tanong:", currentQuestion);
    }
}

// Function to add option buttons
function addOption(text, isCorrect) {
    const optionElement = document.createElement("button");
    optionElement.textContent = text;
    optionElement.classList.add("option");
    optionElement.dataset.correct = isCorrect;
    optionElement.addEventListener("click", selectOption);
    optionsContainer.appendChild(optionElement);
}

// Function to handle option selection
async function selectOption(event) {
    const selectedOption = event.target;
    const isCorrect = selectedOption.dataset.correct === "true";

    if (isCorrect) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
        popupText.textContent = "Tama!";
        popup.classList.add("correct");
        popup.classList.remove("incorrect");
    } else {
        popupText.textContent = "Mali!";
        popup.classList.add("incorrect");
        popup.classList.remove("correct");
    }

    popup.style.display = "block";
    optionsContainer.style.display = 'none';

    await new Promise(resolve => setTimeout(resolve, 1000));
    popup.style.display = "none";

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // Quiz completed
        questionElement.textContent = "Natapos mo na ang pagsusulit!";
        optionsContainer.style.display = 'none';
    }
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initial setup
showLandingPage();
