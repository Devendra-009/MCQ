// --- Quiz Data Structure: DAY 3 MCQs ---
const quizQuestions = [
    // CHILD HEALTH NURSING (1–10)
    {
        question: "1. Child is NOT a small adult because ______.",
        options: ["a) Body systems are immature", "b) They grow fast", "c) They cry more", "d) They need toys"],
        answer: "a) Body systems are immature",
        section: "Child Health Nursing"
    },
    {
        question: "2. Family-centered care means ______.",
        options: ["a) Ignoring the family", "b) Including family in care", "c) Asking only mother", "d) Allowing family to treat child"],
        answer: "b) Including family in care",
        section: "Child Health Nursing"
    },
    {
        question: "3. Best indicator of child health is ______.",
        options: ["a) Weight", "b) Birth order", "c) Immunization", "d) Growth & development"],
        answer: "d) Growth & development",
        section: "Child Health Nursing"
    },
    {
        question: "4. Most common childhood infection in India is ______.",
        options: ["a) Cancer", "b) Respiratory infection", "c) Paralysis", "d) Diabetes"],
        answer: "b) Respiratory infection",
        section: "Child Health Nursing"
    },
    {
        question: "5. Best indicator of malnutrition is ______.",
        options: ["a) Height", "b) Weight-for-age", "c) BMI", "d) Appetite"],
        answer: "b) Weight-for-age",
        section: "Child Health Nursing"
    },
    {
        question: "6. Exclusive breastfeeding is recommended for ______.",
        options: ["a) 0–3 months", "b) 0–4 months", "c) 0–6 months", "d) 0–12 months"],
        answer: "c) 0–6 months",
        section: "Child Health Nursing"
    },
    {
        question: "7. Colostrum is ______.",
        options: ["a) Not useful", "b) First milk rich in antibodies", "c) Watery milk", "d) Artificial milk"],
        answer: "b) First milk rich in antibodies",
        section: "Child Health Nursing"
    },
    {
        question: "8. Common cause of diarrhea in children is ______.",
        options: ["a) Virus", "b) Iron", "c) Overeating", "d) Worms"],
        answer: "a) Virus",
        section: "Child Health Nursing"
    },
    {
        question: "9. Treatment of childhood diarrhea includes ______.",
        options: ["a) Stop feeding", "b) ORS + Zinc", "c) Antibiotics always", "d) IV fluids only"],
        answer: "b) ORS + Zinc",
        section: "Child Health Nursing"
    },
    {
        question: "10. Fast breathing in children suggests ______.",
        options: ["a) Pneumonia", "b) Fever", "c) Worms", "d) Anemia"],
        answer: "a) Pneumonia",
        section: "Child Health Nursing"
    },
    
    // GROWTH & DEVELOPMENT (11–30)
    {
        question: "11. Growth means ______.",
        options: ["a) Increase in knowledge", "b) Increase in size", "c) Skill development", "d) Social behavior"],
        answer: "b) Increase in size",
        section: "Growth & Development"
    },
    {
        question: "12. Development means ______.",
        options: ["a) Getting taller", "b) Getting heavier", "c) Improvement in skills", "d) New clothes"],
        answer: "c) Improvement in skills",
        section: "Growth & Development"
    },
    {
        question: "13. Milestones are ______.",
        options: ["a) Games", "b) Toys", "c) Normal achievements by age", "d) Medicines"],
        answer: "c) Normal achievements by age",
        section: "Growth & Development"
    },
    {
        question: "14. Head control is achieved by ______.",
        options: ["a) 1 month", "b) 3 months", "c) 6 months", "d) 9 months"],
        answer: "b) 3 months",
        section: "Growth & Development"
    },
    {
        question: "15. Baby rolls over at ______.",
        options: ["a) 2 months", "b) 4 months", "c) 5 months", "d) 9 months"],
        answer: "c) 5 months",
        section: "Growth & Development"
    },
    {
        question: "16. Baby sits with support at ______.",
        options: ["a) 3 months", "b) 6 months", "c) 10 months", "d) 1 year"],
        answer: "b) 6 months",
        section: "Growth & Development"
    },
    {
        question: "17. Baby sits without support at ______.",
        options: ["a) 6 months", "b) 8 months", "c) 10 months", "d) 12 months"],
        answer: "b) 8 months",
        section: "Growth & Development"
    },
    {
        question: "18. Standing with support starts at ______.",
        options: ["a) 6 months", "b) 8 months", "c) 9 months", "d) 12 months"],
        answer: "c) 9 months",
        section: "Growth & Development"
    },
    {
        question: "19. Baby walks with support at ______.",
        options: ["a) 6 months", "b) 9 months", "c) 12 months", "d) 18 months"],
        answer: "c) 12 months",
        section: "Growth & Development"
    },
    {
        question: "20. Baby walks alone at ______.",
        options: ["a) 10 months", "b) 12–15 months", "c) 18 months", "d) 24 months"],
        answer: "b) 12–15 months",
        section: "Growth & Development"
    },
    {
        question: "21. Pincer grasp begins at ______.",
        options: ["a) 6 months", "b) 9 months", "c) 12 months", "d) 18 months"],
        answer: "b) 9 months",
        section: "Growth & Development"
    },
    {
        question: "22. Mature pincer grasp at ______.",
        options: ["a) 6 months", "b) 9 months", "c) 12 months", "d) 15 months"],
        answer: "c) 12 months",
        section: "Growth & Development"
    },
    {
        question: "23. Social smile appears at ______.",
        options: ["a) Birth", "b) 2 months", "c) 4 months", "d) 6 months"],
        answer: "b) 2 months",
        section: "Growth & Development"
    },
    {
        question: "24. Stranger anxiety begins at ______.",
        options: ["a) 2 months", "b) 4 months", "c) 8–9 months", "d) 12 months"],
        answer: "c) 8–9 months",
        section: "Growth & Development"
    },
    {
        question: "25. Child says 1–2 words at ______.",
        options: ["a) 6 months", "b) 9 months", "c) 12 months", "d) 2 years"],
        answer: "c) 12 months",
        section: "Growth & Development"
    },
    {
        question: "26. 2-word sentences at ______.",
        options: ["a) 6 months", "b) 1 year", "c) 2 years", "d) 3 years"],
        answer: "c) 2 years",
        section: "Growth & Development"
    },
    {
        question: "27. Not sitting at 9 months is a ______.",
        options: ["a) Normal finding", "b) Red flag", "c) Good sign", "d) Milestone"],
        answer: "b) Red flag",
        section: "Growth & Development"
    },
    {
        question: "28. Not walking by 18 months suggests ______.",
        options: ["a) Normal", "b) Red flag", "c) Tall child", "d) Genetic growth"],
        answer: "b) Red flag",
        section: "Growth & Development"
    },
    {
        question: "29. Not speaking even single word by 2 years suggests ______.",
        options: ["a) Normal", "b) Autism", "c) Speech delay", "d) Overweight"],
        answer: "c) Speech delay",
        section: "Growth & Development"
    },
    {
        question: "30. Weight of child doubles by ______.",
        options: ["a) 3 months", "b) 5 months", "c) 1 year", "d) 2 years"],
        answer: "b) 5 months",
        section: "Growth & Development"
    },

    // IMMUNIZATION (31–50)
    {
        question: "31. Which vaccine is given at birth?",
        options: ["a) MR", "b) BCG", "c) JE", "d) DPT"],
        answer: "b) BCG",
        section: "Immunization"
    },
    {
        question: "32. BCG is given ______.",
        options: ["a) SC", "b) IM", "c) ID", "d) Oral"],
        answer: "c) ID",
        section: "Immunization"
    },
    {
        question: "33. OPV is given ______.",
        options: ["a) Oral", "b) Intradermal", "c) IM", "d) Subcutaneous"],
        answer: "a) Oral",
        section: "Immunization"
    },
    {
        question: "34. OPV can be ______.",
        options: ["a) Frozen", "b) Not frozen", "c) Heated", "d) Kept at room temp"],
        answer: "a) Frozen",
        section: "Immunization"
    },
    {
        question: "35. DPT should ______.",
        options: ["a) Never be frozen", "b) Always be frozen", "c) Kept at 15°C", "d) Kept at room temp"],
        answer: "a) Never be frozen",
        section: "Immunization"
    },
    {
        question: "36. Pentavalent vaccine contains all EXCEPT:",
        options: ["a) Hep B", "b) Hib", "c) Polio", "d) DPT"],
        answer: "c) Polio", // Pentavalent contains DPT, Hep B, Hib. OPV is given separately.
        section: "Immunization"
    },
    {
        question: "37. First dose of pentavalent vaccine at ______.",
        options: ["a) At birth", "b) 6 weeks", "c) 6 months", "d) 9 months"],
        answer: "b) 6 weeks",
        section: "Immunization"
    },
    {
        question: "38. MR vaccine is a ______.",
        options: ["a) Killed vaccine", "b) Live vaccine", "c) Toxoid", "d) DNA vaccine"],
        answer: "b) Live vaccine",
        section: "Immunization"
    },
    {
        question: "39. Vaccine storing temperature is ______.",
        options: ["a) –10°C", "b) +2 to +8°C", "c) 15–20°C", "d) 30°C"],
        answer: "b) +2 to +8°C",
        section: "Immunization"
    },
    {
        question: "40. Vaccine given intradermally is ______.",
        options: ["a) DPT", "b) OPV", "c) BCG", "d) Pentavalent"],
        answer: "c) BCG",
        section: "Immunization"
    },
    {
        question: "41. Vaccine causing scar on arm is ______.",
        options: ["a) OPV", "b) BCG", "c) PCV", "d) MMR"],
        answer: "b) BCG",
        section: "Immunization"
    },
    {
        question: "42. Measles vaccine is stored in ______.",
        options: ["a) Freezer", "b) Ice-lined refrigerator", "c) Room temperature", "d) Sunlight"],
        answer: "b) Ice-lined refrigerator",
        section: "Immunization"
    },
    {
        question: "43. JE vaccine is given at ______.",
        options: ["a) 6 weeks", "b) 9–12 months", "c) 2 years", "d) At birth"],
        answer: "b) 9–12 months",
        section: "Immunization"
    },
    {
        question: "44. Rotavirus vaccine route is ______.",
        options: ["a) IM", "b) IV", "c) Oral", "d) SC"],
        answer: "c) Oral",
        section: "Immunization"
    },
    {
        question: "45. Booster dose of DPT is given at ______.",
        options: ["a) 9 months", "b) 16–24 months", "c) 5 years", "d) 10 years"],
        answer: "b) 16–24 months",
        section: "Immunization"
    },
    {
        question: "46. Best protection for measles is ______.",
        options: ["a) Antibiotics", "b) Vitamin A", "c) MR vaccine", "d) ORS"],
        answer: "c) MR vaccine",
        section: "Immunization"
    },
    {
        question: "47. Cold chain failure first affects ______.",
        options: ["a) DPT", "b) OPV", "c) MR", "d) BCG"],
        answer: "a) DPT", // DPT is most sensitive to freezing (which is a common cold chain failure). OPV is most sensitive to heat.
        section: "Immunization"
    },
    {
        question: "48. Vaccine vial monitor (VVM) is used for ______.",
        options: ["a) Checking expiry date", "b) Checking vaccine temperature exposure", "c) Checking dose", "d) Checking color"],
        answer: "b) Checking vaccine temperature exposure",
        section: "Immunization"
    },
    {
        question: "49. Wasting vaccine is ______.",
        options: ["a) Safe", "b) Spoiled vaccine", "c) Extra vaccine", "d) No vaccine"],
        answer: "b) Spoiled vaccine",
        section: "Immunization"
    },
    {
        question: "50. 0.1 ml BCG is given in ______.",
        options: ["a) Left upper arm", "b) Right thigh", "c) Buttock", "d) Deltoid IM"],
        answer: "a) Left upper arm",
        section: "Immunization"
    },
];

// --- Quiz Logic (UPDATED for Instant Feedback) ---
let userAnswers = {}; // Stores user's selected option for each question
const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const retryBtn = document.getElementById('retry-btn');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score');
const nextBtn = document.getElementById('next-btn'); // Unused in this layout but kept from HTML
const prevBtn = document.getElementById('prev-btn'); // Unused in this layout but kept from HTML

// Function to handle option clicks (Instant Feedback implementation)
function handleOptionClick(event) {
    const selectedItem = event.target;
    const qIndex = parseInt(selectedItem.dataset.questionIndex);
    const selectedOption = selectedItem.textContent;
    const currentQuestion = quizQuestions[qIndex];
    
    // 1. Find the parent list (ul) and the question card
    const optionsList = selectedItem.parentElement;
    const qCard = optionsList.parentElement;

    // 2. Disable all options for this question immediately after one click
    optionsList.querySelectorAll('li').forEach(li => {
        li.removeEventListener('click', handleOptionClick);
        li.classList.remove('selected'); 
    });

    // 3. Mark the selected item and store the answer
    userAnswers[qIndex] = selectedOption;

    // 4. Check for correctness and apply styling
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

    // 5. Display the correct answer message at the bottom of the question card
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
        feedbackElement.style.backgroundColor = '#d4edda'; // Light green
        feedbackElement.style.color = '#155724'; // Dark green text
    } else {
        feedbackElement.textContent = `❌ Incorrect. The correct answer is: ${correctAnswer}`;
        feedbackElement.style.backgroundColor = '#f8d7da'; // Light red
        feedbackElement.style.color = '#721c24'; // Dark red text
    }
}

// Function to render all questions
function renderQuestions() {
    quizContainer.innerHTML = ''; // Clear previous content
    let currentSection = '';

    quizQuestions.forEach((q, index) => {
        // Add a section header if the section changes
        if (q.section !== currentSection) {
            currentSection = q.section;
            const sectionHeader = document.createElement('h2');
            sectionHeader.textContent = `📝 ${currentSection.toUpperCase()} MCQs`;
            sectionHeader.style.color = '#007bff'; 
            sectionHeader.style.marginTop = '20px';
            sectionHeader.style.borderBottom = '2px solid #ccc';
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

// Function to calculate final score and display
function submitQuiz() {
    let score = 0;
    
    quizQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) {
            score++;
        }
    });

    // Display results
    quizContainer.style.display = 'none';
    document.getElementById('controls').style.display = 'none'; 
    resultContainer.style.display = 'block';
    scoreDisplay.textContent = `You scored ${score} out of ${quizQuestions.length} (${((score / quizQuestions.length) * 100).toFixed(2)}%)!`;
}

// Function to reset the quiz
function resetQuiz() {
    userAnswers = {}; // Reset answers
    quizContainer.style.display = 'block'; 
    document.getElementById('controls').style.display = 'block'; 
    resultContainer.style.display = 'none'; 
    renderQuestions(); // Re-render questions
}

// Event Listeners
submitBtn.addEventListener('click', submitQuiz);
retryBtn.addEventListener('click', resetQuiz);

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', renderQuestions);