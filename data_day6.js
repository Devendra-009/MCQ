// Data for Day 6: Nervous System + Stroke + Seizures + Meningitis

const quiz_data_day6 = [
    // NERVOUS SYSTEM (1–15)
    {
        question: "1. The basic unit of the nervous system is ______.",
        options: ["a) Neuron", "b) Nephron", "c) Ovum", "d) Alveoli"],
        answer: "a) Neuron",
        section: "Nervous System Basics"
    },
    {
        question: "2. Which part of the brain controls thinking and memory?",
        options: ["a) Cerebrum", "b) Cerebellum", "c) Brainstem", "d) Hypothalamus"],
        answer: "a) Cerebrum",
        section: "Nervous System Basics"
    },
    {
        question: "3. Cerebellum controls ______.",
        options: ["a) Breathing", "b) Balance & coordination", "c) Temperature", "d) Speech"],
        answer: "b) Balance & coordination",
        section: "Nervous System Basics"
    },
    {
        question: "4. Brainstem controls ______.",
        options: ["a) Walking", "b) Heartbeat & breathing", "c) Memory", "d) Balance"],
        answer: "b) Heartbeat & breathing",
        section: "Nervous System Basics"
    },
    {
        question: "5. Sympathetic nervous system causes ______.",
        options: ["a) Slow heart rate", "b) Increased heart rate", "c) Sleep", "d) Digestion"],
        answer: "b) Increased heart rate",
        section: "Nervous System Basics"
    },
    {
        question: "6. Parasympathetic nervous system causes ______.",
        options: ["a) Fight-or-flight", "b) Increased BP", "c) Rest & digestion", "d) Increased breathing"],
        answer: "c) Rest & digestion",
        section: "Nervous System Basics"
    },
    {
        question: "7. Glasgow Coma Scale minimum score is ______.",
        options: ["a) 0", "b) 3", "c) 5", "d) 10"],
        answer: "b) 3",
        section: "Nervous System Basics"
    },
    {
        question: "8. GCS ≤ 8 indicates ______.",
        options: ["a) Mild injury", "b) Need for intubation", "c) Full consciousness", "d) Normal condition"],
        answer: "b) Need for intubation",
        section: "Nervous System Basics"
    },
    {
        question: "9. A patient suddenly becomes unconscious. The FIRST thing to check is ______.",
        options: ["a) Pulse", "b) Airway", "c) BP", "d) Temperature"],
        answer: "b) Airway",
        section: "Nervous System Basics"
    },
    {
        question: "10. Which lobe of the brain controls vision?",
        options: ["a) Frontal", "b) Parietal", "c) Occipital", "d) Temporal"],
        answer: "c) Occipital",
        section: "Nervous System Basics"
    },
    {
        question: "11. Sensory loss on one side of body is called ______.",
        options: ["a) Hemiplegia", "b) Hemiparesis", "c) Hemianesthesia", "d) Paralysis"],
        answer: "c) Hemianesthesia",
        section: "Nervous System Basics"
    },
    {
        question: "12. Increased intracranial pressure (ICP) causes ______.",
        options: ["a) Slow pulse", "b) Fast pulse", "c) High urine output", "d) Increased appetite"],
        answer: "a) Slow pulse", // Bradycardia is part of Cushing's Triad
        section: "Nervous System Basics"
    },
    {
        question: "13. Earliest sign of raised ICP is ______.",
        options: ["a) Vomiting", "b) Headache", "c) Change in LOC (consciousness)", "d) Fever"],
        answer: "c) Change in LOC (consciousness)",
        section: "Nervous System Basics"
    },
    {
        question: "14. Cushing’s triad includes all EXCEPT ______.",
        options: ["a) Bradycardia", "b) High BP", "c) Irregular breathing", "d) Fever"],
        answer: "d) Fever",
        section: "Nervous System Basics"
    },
    {
        question: "15. Best position for patient with high ICP is ______.",
        options: ["a) Flat", "b) 30-degree head elevation", "c) Trendelenburg", "d) Prone"],
        answer: "b) 30-degree head elevation",
        section: "Nervous System Basics"
    },
    // STROKE (CVA) (16–30)
    {
        question: "16. Stroke is also called ______.",
        options: ["a) MI", "b) CVA", "c) COPD", "d) CKD"],
        answer: "b) CVA",
        section: "Stroke (CVA)"
    },
    {
        question: "17. Ischemic stroke is caused by ______.",
        options: ["a) Bleeding", "b) Blockage", "c) Infection", "d) Allergy"],
        answer: "b) Blockage",
        section: "Stroke (CVA)"
    },
    {
        question: "18. Hemorrhagic stroke is caused by ______.",
        options: ["a) Blood clot", "b) Bleeding", "c) Tumor", "d) Fever"],
        answer: "b) Bleeding",
        section: "Stroke (CVA)"
    },
    {
        question: "19. FAST stands for ______.",
        options: ["a) Face–Arm–Speech–Time", "b) Food–Air–Sleep–Temperature", "c) Feet–Arms–Shoulder–Teeth", "d) None"],
        answer: "a) Face–Arm–Speech–Time",
        section: "Stroke (CVA)"
    },
    {
        question: "20. Most common symptom of stroke is ______.",
        options: ["a) Sudden weakness on one side", "b) Diarrhea", "c) Rash", "d) Swelling"],
        answer: "a) Sudden weakness on one side",
        section: "Stroke (CVA)"
    },
    {
        question: "21. Best position for stroke patient is ______.",
        options: ["a) High Fowler’s", "b) Side-lying", "c) Prone", "d) Flat"],
        answer: "b) Side-lying", // Prevents aspiration if swallowing reflex is impaired
        section: "Stroke (CVA)"
    },
    {
        question: "22. Golden time for giving tPA (thrombolytic drug) is ______.",
        options: ["a) 1 hour", "b) 4.5 hours", "c) 12 hours", "d) 24 hours"],
        answer: "b) 4.5 hours",
        section: "Stroke (CVA)"
    },
    {
        question: "23. tPA is given only in ______.",
        options: ["a) Hemorrhagic stroke", "b) Ischemic stroke", "c) Allergy", "d) Trauma"],
        answer: "b) Ischemic stroke",
        section: "Stroke (CVA)"
    },
    {
        question: "24. Contraindication for tPA is ______.",
        options: ["a) High fever", "b) Bleeding", "c) High BP", "d) Age < 30"],
        answer: "b) Bleeding", // Absolute contraindication due to risk of converting ischemic to hemorrhagic stroke
        section: "Stroke (CVA)"
    },
    {
        question: "25. In stroke, facial drooping occurs due to ______.",
        options: ["a) Hypotension", "b) Facial nerve weakness", "c) Hyperglycemia", "d) Heart failure"],
        answer: "b) Facial nerve weakness",
        section: "Stroke (CVA)"
    },
    {
        question: "26. Aphasia means ______.",
        options: ["a) Inability to talk", "b) Inability to walk", "c) Inability to see", "d) Inability to hear"],
        answer: "a) Inability to talk",
        section: "Stroke (CVA)"
    },
    {
        question: "27. Dysphagia means ______.",
        options: ["a) Difficulty swallowing", "b) Difficulty walking", "c) Difficulty hearing", "d) Difficulty speaking"],
        answer: "a) Difficulty swallowing",
        section: "Stroke (CVA)"
    },
    {
        question: "28. Best way to prevent aspiration in stroke patient is ______.",
        options: ["a) Supine position", "b) Side-lying position", "c) Trendelenburg", "d) Giving more fluids"],
        answer: "b) Side-lying position",
        section: "Stroke (CVA)"
    },
    {
        question: "29. Before giving food to stroke patient, nurse should check ______.",
        options: ["a) Pulse", "b) Swallowing ability", "c) Reflexes", "d) BP"],
        answer: "b) Swallowing ability",
        section: "Stroke (CVA)"
    },
    {
        question: "30. Hemiplegia means paralysis of ______.",
        options: ["a) Both legs", "b) Both arms", "c) One side of body", "d) Whole body"],
        answer: "c) One side of body",
        section: "Stroke (CVA)"
    },
    // SEIZURES / EPILEPSY (31–42)
    {
        question: "31. Seizure is caused by ______.",
        options: ["a) Heart problem", "b) Abnormal brain activity", "c) Kidney stones", "d) Infection only"],
        answer: "b) Abnormal brain activity",
        section: "Seizures / Epilepsy"
    },
    {
        question: "32. First action during a seizure is ______.",
        options: ["a) Put object in mouth", "b) Hold patient tightly", "c) Protect from injury", "d) Give water"],
        answer: "c) Protect from injury",
        section: "Seizures / Epilepsy"
    },
    {
        question: "33. Best position during seizure is ______.",
        options: ["a) Supine", "b) Side-lying", "c) Prone", "d) Sitting"],
        answer: "b) Side-lying", // Recovery position to prevent aspiration
        section: "Seizures / Epilepsy"
    },
    {
        question: "34. Nurse should NOT do which of the following during a seizure?",
        options: ["a) Note duration", "b) Loosen tight clothes", "c) Insert spoon in mouth", "d) Turn patient to side"],
        answer: "c) Insert spoon in mouth", // Risk of injury/dental damage
        section: "Seizures / Epilepsy"
    },
    {
        question: "35. Post-ictal phase means ______.",
        options: ["a) After seizure", "b) Before seizure", "c) Middle of seizure", "d) No seizure"],
        answer: "a) After seizure",
        section: "Seizures / Epilepsy"
    },
    {
        question: "36. Drug of choice for acute seizure is ______.",
        options: ["a) Ibuprofen", "b) Insulin", "c) Diazepam", "d) Paracetamol"],
        answer: "c) Diazepam", // Benzodiazepines are first-line for acute seizure termination
        section: "Seizures / Epilepsy"
    },
    {
        question: "37. Long-term management drug for epilepsy is ______.",
        options: ["a) Salbutamol", "b) Phenytoin", "c) ORS", "d) Vitamin C"],
        answer: "b) Phenytoin",
        section: "Seizures / Epilepsy"
    },
    {
        question: "38. Side effect of phenytoin is ______.",
        options: ["a) Hair fall", "b) Gum hypertrophy", "c) Rash", "d) Weight loss"],
        answer: "b) Gum hypertrophy",
        section: "Seizures / Epilepsy"
    },
    {
        question: "39. Status epilepticus lasts more than ______.",
        options: ["a) 2 minutes", "b) 5 minutes", "c) 10 minutes", "d) 20 minutes"],
        answer: "b) 5 minutes",
        section: "Seizures / Epilepsy"
    },
    {
        question: "40. Emergency drug for status epilepticus is ______.",
        options: ["a) Diazepam", "b) ORS", "c) Amlodipine", "d) Metformin"],
        answer: "a) Diazepam",
        section: "Seizures / Epilepsy"
    },
    {
        question: "41. Febrile seizures happen in ______.",
        options: ["a) Elderly", "b) Infants and children", "c) Pregnant women", "d) Adults with diabetes"],
        answer: "b) Infants and children",
        section: "Seizures / Epilepsy"
    },
    {
        question: "42. Main risk of seizure is ______.",
        options: ["a) Burns", "b) Aspiration", "c) Fever", "d) Eye infection"],
        answer: "b) Aspiration",
        section: "Seizures / Epilepsy"
    },
    // MENINGITIS (43–50)
    {
        question: "43. Meningitis is inflammation of ______.",
        options: ["a) Brain covering", "b) Lungs", "c) Kidneys", "d) Heart"],
        answer: "a) Brain covering",
        section: "Meningitis"
    },
    {
        question: "44. Classical triad of meningitis includes all EXCEPT ______.",
        options: ["a) Fever", "b) Neck stiffness", "c) Headache", "d) Vomiting is mandatory"],
        answer: "d) Vomiting is mandatory", // Triad is Fever, Neck Stiffness, Altered Mental Status
        section: "Meningitis"
    },
    {
        question: "45. The MOST important test for meningitis diagnosis is ______.",
        options: ["a) MRI", "b) Lumbar puncture", "c) X-ray", "d) Ultrasound"],
        answer: "b) Lumbar puncture",
        section: "Meningitis"
    },
    {
        question: "46. CSF in bacterial meningitis shows ______.",
        options: ["a) Clear fluid", "b) High protein & low glucose", "c) Low protein & high sugar", "d) No WBC"],
        answer: "b) High protein & low glucose",
        section: "Meningitis"
    },
    {
        question: "47. Positive Kernig sign indicates ______. ",
        options: ["a) Stroke", "b) Meningitis", "c) Asthma", "d) Hypoglycemia"],
        answer: "b) Meningitis",
        section: "Meningitis"
    },
    {
        question: "48. Best room condition for meningitis patient is ______.",
        options: ["a) Bright lights", "b) Dark & quiet", "c) No windows", "d) Cold air"],
        answer: "b) Dark & quiet", // Due to photophobia (light sensitivity) and phonophobia (noise sensitivity)
        section: "Meningitis"
    },
    {
        question: "49. First-line treatment for bacterial meningitis is ______.",
        options: ["a) ORS", "b) Antibiotics", "c) Paracetamol only", "d) Insulin"],
        answer: "b) Antibiotics",
        section: "Meningitis"
    },
    {
        question: "50. Common complication of meningitis is ______.",
        options: ["a) Seizure", "b) Kidney stones", "c) COPD", "d) Hypotension only"],
        answer: "a) Seizure",
        section: "Meningitis"
    },
];