// --- DATA AGGREGATION ---
// This section collects data from the separate files loaded in index.html
// Ensure data_day2.js, data_day3.js, data_day4.js (etc.) are loaded BEFORE this file.
const allQuizzes = {
    "Day 2 - Pathology & Pharmacology": quiz_data_day2,
    "Day 3 - Child Health & Immunization": quiz_data_day3,
    "Day 4 - Med-Surg, Cardio, Respiratory, Shock": quiz_data_day4,
    "Day 5 - Renal, Endocrine & Diabetes": quiz_data_day5,
    "Day 6 - Nervous System, Stroke & Meningitis": quiz_data_day6, // <-- ADD THIS LINE
    // Add new day mappings here:
    // "Day 7 - New Topic Name": quiz_data_day7, 
};

// --- QUIZ LOGIC AND NAVIGATION ---
let userAnswers = {}; // Stores user's selected option for the currently loaded quiz
let quizQuestions = []; // Stores the questions for the currently loaded quiz

// DOM Elements
const topicSelectionDiv = document.getElementById('topic-selection');
const quizArea = document.getElementById('quiz-area');
const quizTitleDisplay = document.getElementById('quiz-title');
const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const retryBtn = document.getElementById('retry-btn');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score');

// --- NAVIGATION FUNCTIONS ---

function showTopicSelection() {
    topicSelectionDiv.style.display = 'block';
    quizArea.style.display = 'none';
    resultContainer.style.display = 'none';
    // Clear and re-render buttons to ensure they reflect newly added days
    const buttonContainer = topicSelectionDiv.querySelector('div');
    if (buttonContainer) {
        buttonContainer.remove();
    }
    renderTopicButtons();
}

function renderTopicButtons() {
    const buttonContainer = document.createElement('div');
    
    // Create a button for each quiz topic defined in the allQuizzes object
    Object.keys(allQuizzes).forEach(topic => {
        const button = document.createElement('button');
        button.className = 'topic-btn';
        button.textContent = topic;
        button.dataset.topic = topic;
        button.addEventListener('click', loadQuiz);
        buttonContainer.appendChild(button);
    });
    
    topicSelectionDiv.appendChild(buttonContainer);
}

function loadQuiz(event) {
    const topic = event.target.dataset.topic;
    quizQuestions = allQuizzes[topic]; // Load the selected quiz data
    userAnswers = {}; // Reset answers for the new quiz

    quizTitleDisplay.textContent = topic;
    topicSelectionDiv.style.display = 'none';
    quizArea.style.display = 'block';
    
    renderQuestions();
}


// --- QUIZ FEEDBACK FUNCTIONS ---

function handleOptionClick(event) {
    const selectedItem = event.target;
    const qIndex = parseInt(selectedItem.dataset.questionIndex);
    const selectedOption = selectedItem.textContent;
    const currentQuestion = quizQuestions[qIndex];
    
    const optionsList = selectedItem.parentElement;
    const qCard = optionsList.parentElement;

    // Disable all options for this question immediately after one click
    optionsList.querySelectorAll('li').forEach(li => {
        li.removeEventListener('click', handleOptionClick);
        li.classList.remove('selected'); 
    });

    userAnswers[qIndex] = selectedOption;

    const correctAnswer = currentQuestion.answer;
    let isCorrect = (selectedOption === correctAnswer);
    
    // Highlight the correct answer (green)
    optionsList.querySelectorAll('li').forEach(li => {
        if (li.textContent === correctAnswer) {
            li.classList.add('correct');
        }
    });

    // Highlight the user's selected answer (red if incorrect)
    if (!isCorrect) {
        selectedItem.classList.add('incorrect');
    }

    // Display the correct answer message
    let feedbackElement = qCard.querySelector('.feedback-message');
    if (!feedbackElement) {
        feedbackElement = document.createElement('div');
        feedbackElement.className = 'feedback-message';
        feedbackElement.style.marginTop = '10px';
        feedbackElement.style.padding = '8px';
        feedbackElement.style.borderRadius = '4px';
        feedbackElement.style.fontWeight = 'bold';
        feedbackElement.style.fontSize = '0.9em';
        qCard.appendChild(feedbackElement);
    }
    
    if (isCorrect) {
        feedbackElement.textContent = "✅ Correct! Great job.";
        feedbackElement.style.backgroundColor = '#d4edda';
        feedbackElement.style.color = '#155724';
    } else {
        feedbackElement.textContent = `❌ Incorrect. The correct answer is: ${correctAnswer}`;
        feedbackElement.style.backgroundColor = '#f8d7da';
        feedbackElement.style.color = '#721c24';
    }
}

// --- RENDERING FUNCTION ---

function renderQuestions() {
    quizContainer.innerHTML = ''; 
    let currentSection = '';

    quizQuestions.forEach((q, index) => {
        // Add a section header if the section changes
        if (q.section !== currentSection) {
            currentSection = q.section;
            const sectionHeader = document.createElement('h3'); 
            sectionHeader.textContent = `🔵 ${currentSection.toUpperCase()} MCQs`;
            sectionHeader.style.color = '#007bff'; 
            sectionHeader.style.marginTop = '20px';
            sectionHeader.style.borderBottom = '1px solid #ccc';
            quizContainer.appendChild(sectionHeader);
        }

        const qCard = document.createElement('div');
        qCard.className = 'question-card';
        qCard.id = `question-${index}`;

        const qText = document.createElement('p');
        qText.textContent = q.question;
        qCard.appendChild(qText);

        const optionsList = document.createElement('ul');
        optionsList.className = 'options-list';

        const isAnswered = userAnswers.hasOwnProperty(index);

        q.options.forEach(option => {
            const listItem = document.createElement('li');
            listItem.textContent = option;
            listItem.dataset.questionIndex = index;
            
            if (isAnswered) {
                // If already answered, apply permanent feedback styles
                if (option === q.answer) {
                    listItem.classList.add('correct');
                } else if (option === userAnswers[index]) {
                    listItem.classList.add('incorrect');
                }
            } else {
                // Attach the click handler only if not answered yet
                listItem.addEventListener('click', handleOptionClick);
            }
            
            optionsList.appendChild(listItem);
        });

        qCard.appendChild(optionsList);
        
        // Re-display feedback message if already answered
        if (isAnswered) {
            const selectedOption = userAnswers[index];
            const correctAnswer = q.answer;
            const isCorrect = (selectedOption === correctAnswer);

            let feedbackElement = document.createElement('div');
            feedbackElement.className = 'feedback-message';
            
            feedbackElement.style.marginTop = '10px';
            feedbackElement.style.padding = '8px';
            feedbackElement.style.borderRadius = '4px';
            feedbackElement.style.fontWeight = 'bold';
            feedbackElement.style.fontSize = '0.9em';

            if (isCorrect) {
                feedbackElement.textContent = "✅ Correct! Great job.";
                feedbackElement.style.backgroundColor = '#d4edda';
                feedbackElement.style.color = '#155724';
            } else {
                feedbackElement.textContent = `❌ Incorrect. The correct answer is: ${correctAnswer}`;
                feedbackElement.style.backgroundColor = '#f8d7da';
                feedbackElement.style.color = '#721c24';
            }
            qCard.appendChild(feedbackElement);
        }

        quizContainer.appendChild(qCard);
    });
}


// --- SCORE AND RESET FUNCTIONS ---

function submitQuiz() {
    let score = 0;
    
    quizQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            score++;
        }
    });

    // Display results
    quizArea.style.display = 'none'; 
    resultContainer.style.display = 'block';
    scoreDisplay.textContent = `You scored ${score} out of ${quizQuestions.length} (${((score / quizQuestions.length) * 100).toFixed(2)}%)!`;
}

// Event Listeners
submitBtn.addEventListener('click', submitQuiz);
retryBtn.addEventListener('click', showTopicSelection); // Go back to topic selection

// Initialize the site by showing the topic selection menu
document.addEventListener('DOMContentLoaded', showTopicSelection);