// --- Quiz Data Structure (Unchanged) ---
const quizQuestions = [
    // PATHOLOGY MCQs (1-25)
    {
        question: "1. Inflammation is a ______.",
        options: ["a) Disease", "b) Body’s protective response", "c) Drug effect", "d) Hormonal change"],
        answer: "b) Body’s protective response",
        section: "Pathology"
    },
    {
        question: "2. A classic sign of inflammation is ______.",
        options: ["a) Cyanosis", "b) Redness", "c) Paralysis", "d) Vomiting"],
        answer: "b) Redness",
        section: "Pathology"
    },
    {
        question: "3. Which of the following is NOT a sign of inflammation?",
        options: ["a) Pain", "b) Swelling", "c) Heat", "d) Constipation"],
        answer: "d) Constipation",
        section: "Pathology"
    },
    {
        question: "4. “Loss of function” occurs in ______.",
        options: ["a) Obesity", "b) Inflammation", "c) Anemia", "d) Fracture"],
        answer: "b) Inflammation",
        section: "Pathology"
    },
    {
        question: "5. Infection is caused by ______.",
        options: ["a) Mental stress", "b) Microorganisms", "c) Exercise", "d) Hormones"],
        answer: "b) Microorganisms",
        section: "Pathology"
    },
    {
        question: "6. All infections lead to inflammation, but ______.",
        options: ["a) All inflammation also leads to infection", "b) Some inflammation occurs without infection", "c) Infection and inflammation are same", "d) None"],
        answer: "b) Some inflammation occurs without infection",
        section: "Pathology"
    },
    {
        question: "7. Natural immunity is ______.",
        options: ["a) Inherited at birth", "b) Gained after vaccination", "c) Artificial only", "d) Temporary"],
        answer: "a) Inherited at birth",
        section: "Pathology"
    },
    {
        question: "8. Passive immunity is ______.",
        options: ["a) Long lasting", "b) Short term", "c) Artificial only", "d) Not useful"],
        answer: "b) Short term",
        section: "Pathology"
    },
    {
        question: "9. Maternal antibodies to baby are example of ______.",
        options: ["a) Natural active", "b) Natural passive", "c) Artificial active", "d) Artificial passive"],
        answer: "b) Natural passive",
        section: "Pathology"
    },
    {
        question: "10. Vaccination provides ______ immunity.",
        options: ["a) Natural passive", "b) Artificial active", "c) Natural active", "d) Artificial passive"],
        answer: "b) Artificial active",
        section: "Pathology"
    },
    {
        question: "11. Immunoglobulins (IG) provide ______ immunity.",
        options: ["a) Long-term", "b) Short-term", "c) No immunity", "d) Lifelong"],
        answer: "b) Short-term",
        section: "Pathology"
    },
    {
        question: "12. Lack of oxygen to cells is called ______.",
        options: ["a) Necrosis", "b) Hypoxia", "c) Apoptosis", "d) Infection"],
        answer: "b) Hypoxia",
        section: "Pathology"
    },
    {
        question: "13. Apoptosis is ______.",
        options: ["a) Normal programmed cell death", "b) Sudden cancer growth", "c) Bacterial death", "d) Reversible injury"],
        answer: "a) Normal programmed cell death",
        section: "Pathology"
    },
    {
        question: "14. Necrosis is ______.",
        options: ["a) Natural cell death", "b) Abnormal, harmful cell death", "c) Caused only by age", "d) Always reversible"],
        answer: "b) Abnormal, harmful cell death",
        section: "Pathology"
    },
    {
        question: "15. Benign tumor is ______.",
        options: ["a) Fast growing", "b) Spreads quickly", "c) Slow growing and localized", "d) Always fatal"],
        answer: "c) Slow growing and localized",
        section: "Pathology"
    },
    {
        question: "16. Malignant tumor is ______.",
        options: ["a) Slow", "b) Safe", "c) Cancerous", "d) Not harmful"],
        answer: "c) Cancerous",
        section: "Pathology"
    },
    {
        question: "17. Spread of cancer to distant organs is known as ______.",
        options: ["a) Mutation", "b) Metastasis", "c) Abrasion", "d) Erosion"],
        answer: "b) Metastasis",
        section: "Pathology"
    },
    {
        question: "18. The study of diseases is called ______.",
        options: ["a) Pedagogy", "b) Pathology", "c) Physiology", "d) Radiology"],
        answer: "b) Pathology",
        section: "Pathology"
    },
    {
        question: "19. The MOST common cause of cell injury is ______.",
        options: ["a) Radiation", "b) Hypoxia", "c) Trauma", "d) Chemicals"],
        answer: "b) Hypoxia",
        section: "Pathology"
    },
    {
        question: "20. Which cell death causes inflammation?",
        options: ["a) Apoptosis", "b) Necrosis", "c) Natural aging", "d) None"],
        answer: "b) Necrosis",
        section: "Pathology"
    },
    {
        question: "21. Heat, redness and swelling are caused due to ______.",
        options: ["a) Decreased blood flow", "b) Increased blood flow", "c) Increased hormones", "d) Lack of blood"],
        answer: "b) Increased blood flow",
        section: "Pathology"
    },
    {
        question: "22. Fever is mainly caused by ______.",
        options: ["a) Pyrogens", "b) Hormones", "c) Electrolytes", "d) Pain"],
        answer: "a) Pyrogens",
        section: "Pathology"
    },
    {
        question: "23. Allergic reaction is related to ______.",
        options: ["a) WBC – Neutrophils", "b) WBC – Eosinophils", "c) WBC – Basophils", "d) RBC"],
        answer: "c) WBC – Basophils",
        section: "Pathology"
    },
    {
        question: "24. Which cell fights bacterial infection?",
        options: ["a) Neutrophils", "b) Eosinophils", "c) Lymphocytes", "d) RBC"],
        answer: "a) Neutrophils",
        section: "Pathology"
    },
    {
        question: "25. Cancer of epithelial tissue is called ______.",
        options: ["a) Sarcoma", "b) Carcinoma", "c) Lymphoma", "d) Melanoma"],
        answer: "b) Carcinoma",
        section: "Pathology"
    },
    
    // PHARMACOLOGY MCQs (26-50)
    {
        question: "26. Pharmacology means study of ______.",
        options: ["a) Body functions", "b) Disease", "c) Medicines", "d) Surgery"],
        answer: "c) Medicines",
        section: "Pharmacology"
    },
    {
        question: "27. Generic name means ______.",
        options: ["a) Scientific name of drug", "b) Company name", "c) Nickname", "d) Chemical formula only"],
        answer: "a) Scientific name of drug",
        section: "Pharmacology"
    },
    {
        question: "28. Which is a brand name of Paracetamol?",
        options: ["a) Amlodipine", "b) Crocin", "c) Ciprofloxacin", "d) Cetirizine"],
        answer: "b) Crocin",
        section: "Pharmacology"
    },
    {
        question: "29. Giving a drug by mouth is ______ route.",
        options: ["a) IM", "b) Oral", "c) IV", "d) SC"],
        answer: "b) Oral",
        section: "Pharmacology"
    },
    {
        question: "30. Fastest route of drug administration is ______.",
        options: ["a) Oral", "b) IM", "c) IV", "d) Inhalation"],
        answer: "c) IV",
        section: "Pharmacology"
    },
    {
        question: "31. Antibiotics are used to treat ______.",
        options: ["a) Viral infection", "b) Bacterial infection", "c) Fungal infection", "d) Allergies"],
        answer: "b) Bacterial infection",
        section: "Pharmacology"
    },
    {
        question: "32. Example of analgesic is ______.",
        options: ["a) Amlodipine", "b) Paracetamol", "c) Ciprofloxacin", "d) Insulin"],
        answer: "b) Paracetamol",
        section: "Pharmacology"
    },
    {
        question: "33. Antipyretics reduce ______.",
        options: ["a) Pain", "b) Fever", "c) Inflammation", "d) BP"],
        answer: "b) Fever",
        section: "Pharmacology"
    },
    {
        question: "34. Cetirizine is used for ______.",
        options: ["a) BP", "b) Allergy", "c) Infection", "d) Fever"],
        answer: "b) Allergy",
        section: "Pharmacology"
    },
    {
        question: "35. Insulin is used in ______.",
        options: ["a) Hypertension", "b) Diabetes", "c) Asthma", "d) Tuberculosis"],
        answer: "b) Diabetes",
        section: "Pharmacology"
    },
    {
        question: "36. Metformin is used to lower ______.",
        options: ["a) Cholesterol", "b) Blood sugar", "c) Fever", "d) Pain"],
        answer: "b) Blood sugar",
        section: "Pharmacology"
    },
    {
        question: "37. Amlodipine is a ______.",
        options: ["a) Antidiabetic", "b) Antibiotic", "c) Antihypertensive", "d) Analgesic"],
        answer: "c) Antihypertensive",
        section: "Pharmacology"
    },
    {
        question: "38. Adverse drug reaction means ______.",
        options: ["a) Expected effect", "b) Mild effect", "c) Harmful/unwanted effect", "d) No effect"],
        answer: "c) Harmful/unwanted effect",
        section: "Pharmacology"
    },
    {
        question: "39. Drugs should NOT be given if patient is ______.",
        options: ["a) Hungry", "b) Allergic to the drug", "c) Sleeping", "d) Awake"],
        answer: "b) Allergic to the drug",
        section: "Pharmacology"
    },
    {
        question: "40. “Right dose” is part of ______.",
        options: ["a) 3 rights", "b) 5 rights", "c) 6 rights", "d) 10 rights"],
        answer: "d) 10 rights",
        section: "Pharmacology"
    },
    {
        question: "41. Right time means ______.",
        options: ["a) Anytime", "b) As written in order", "c) Morning only", "d) Evening only"],
        answer: "b) As written in order",
        section: "Pharmacology"
    },
    {
        question: "42. If a patient shows rash after drug, nurse should ______.",
        options: ["a) Continue drug", "b) Stop drug & inform doctor", "c) Ignore", "d) Double the dose"],
        answer: "b) Stop drug & inform doctor",
        section: "Pharmacology"
    },
    {
        question: "43. Antibiotics should be taken ______.",
        options: ["a) Until symptoms stop", "b) Full course completed", "c) Only 2 days", "d) With juice only"],
        answer: "b) Full course completed",
        section: "Pharmacology"
    },
    {
        question: "44. NSAIDs commonly cause ______.",
        options: ["a) Constipation", "b) Stomach irritation", "c) Fever", "d) Hypoglycemia"],
        answer: "b) Stomach irritation",
        section: "Pharmacology"
    },
    {
        question: "45. Oral drugs are absorbed mainly in ______.",
        options: ["a) Stomach", "b) Small intestine", "c) Liver", "d) Mouth"],
        answer: "b) Small intestine",
        section: "Pharmacology"
    },
    {
        question: "46. IV route means drug goes into ______.",
        options: ["a) Muscle", "b) Vein", "c) Skin", "d) Bone"],
        answer: "b) Vein",
        section: "Pharmacology"
    },
    {
        question: "47. IM injections are usually given in ______.",
        options: ["a) Deltoid", "b) Umbilicus", "c) Wrist", "d) Knee"],
        answer: "a) Deltoid",
        section: "Pharmacology"
    },
    {
        question: "48. Topical drugs are applied on ______.",
        options: ["a) Skin", "b) Muscle", "c) Bone", "d) Heart"],
        answer: "a) Skin",
        section: "Pharmacology"
    },
    {
        question: "49. Severe allergic reaction after drug is known as ______.",
        options: ["a) Rash", "b) Itching", "c) Anaphylaxis", "d) Fever"],
        answer: "c) Anaphylaxis",
        section: "Pharmacology"
    },
    {
        question: "50. Before giving any medication, the nurse must FIRST check ______.",
        options: ["a) Patient’s religion", "b) Patient’s allergy status", "c) Patient’s job", "d) Patient’s breakfast"],
        answer: "b) Patient’s allergy status",
        section: "Pharmacology"
    },
];

// --- Quiz Logic ---
let userAnswers = {}; // Stores user's selected option for each question
const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const retryBtn = document.getElementById('retry-btn');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score');

// Function to handle option clicks (UPDATED FOR INSTANT FEEDBACK)
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

    // 3. Mark the selected item
    userAnswers[qIndex] = selectedOption;

    // 4. Check for correctness and apply styling
    const correctAnswer = currentQuestion.answer;
    
    // Highlight the correct answer (green)
    optionsList.querySelectorAll('li').forEach(li => {
        if (li.textContent === correctAnswer) {
            li.classList.add('correct');
        }
    });

    // Highlight the user's selected answer (red if incorrect)
    if (selectedOption !== correctAnswer) {
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
        qCard.appendChild(feedbackElement);
    }
    
    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = "✅ Correct!";
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
            sectionHeader.style.color = currentSection === 'Pathology' ? '#007bff' : '#dc3545';
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

        // Check if question has already been answered (e.g., after a reset or previous attempt)
        const isAnswered = userAnswers.hasOwnProperty(index);

        q.options.forEach(option => {
            const listItem = document.createElement('li');
            listItem.textContent = option;
            listItem.dataset.questionIndex = index;
            
            // Re-apply styles if already answered, but disable clicks
            if (isAnswered) {
                if (option === q.answer) {
                    listItem.classList.add('correct');
                } else if (option === userAnswers[index] && option !== q.answer) {
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

            let feedbackElement = document.createElement('div');
            feedbackElement.className = 'feedback-message';
            feedbackElement.style.marginTop = '10px';
            feedbackElement.style.padding = '8px';
            feedbackElement.style.borderRadius = '4px';
            feedbackElement.style.fontWeight = 'bold';

            if (selectedOption === correctAnswer) {
                feedbackElement.textContent = "✅ Correct!";
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
    document.getElementById('controls').style.display = 'none'; // Hide controls 
    resultContainer.style.display = 'block';
    scoreDisplay.textContent = `You scored ${score} out of ${quizQuestions.length} (${((score / quizQuestions.length) * 100).toFixed(2)}%)!`;
}

// Function to reset the quiz
function resetQuiz() {
    userAnswers = {}; // Reset answers
    quizContainer.style.display = 'block'; // Show quiz
    document.getElementById('controls').style.display = 'block'; // Show controls 
    resultContainer.style.display = 'none'; // Hide results
    renderQuestions(); // Re-render questions with click handlers and no selections
}

// Event Listeners
submitBtn.addEventListener('click', submitQuiz);
retryBtn.addEventListener('click', resetQuiz);

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', renderQuestions);