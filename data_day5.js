// Data for Day 5: Renal + Endocrine + Diabetes

const quiz_data_day5 = [
    // RENAL / URINARY SYSTEM (1–20)
    {
        question: "1. Minimum normal urine output per hour is ______.",
        options: ["a) 10 mL", "b) 20 mL", "c) 30 mL", "d) 50 mL"],
        answer: "c) 30 mL",
        section: "Renal / Urinary System"
    },
    {
        question: "2. Oliguria means urine output less than ______.",
        options: ["a) 1000 ml/day", "b) 400 ml/day", "c) 2000 ml/day", "d) 100 ml/day"],
        answer: "b) 400 ml/day",
        section: "Renal / Urinary System"
    },
    {
        question: "3. Anuria means ______.",
        options: ["a) No urine", "b) Painful urine", "c) Blood in urine", "d) Too much urine"],
        answer: "a) No urine",
        section: "Renal / Urinary System"
    },
    {
        question: "4. Dysuria means ______.",
        options: ["a) Blood in urine", "b) Painful urination", "c) Low urine", "d) No urine"],
        answer: "b) Painful urination",
        section: "Renal / Urinary System"
    },
    {
        question: "5. Hematuria means ______.",
        options: ["a) Pus in urine", "b) Blood in urine", "c) Frothy urine", "d) Excess urine"],
        answer: "b) Blood in urine",
        section: "Renal / Urinary System"
    },
    {
        question: "6. Most common cause of UTI is ______.",
        options: ["a) Virus", "b) E. coli", "c) Parasite", "d) Fungus"],
        answer: "b) E. coli",
        section: "Renal / Urinary System"
    },
    {
        question: "7. Most common symptom of UTI is ______.",
        options: ["a) Diarrhea", "b) Burning urination", "c) Chest pain", "d) Headache"],
        answer: "b) Burning urination",
        section: "Renal / Urinary System"
    },
    {
        question: "8. Best prevention of renal stones is ______.",
        options: ["a) Low water intake", "b) Drink 3–4 liters/day", "c) High salt diet", "d) Eat sweets"],
        answer: "b) Drink 3–4 liters/day",
        section: "Renal / Urinary System"
    },
    {
        question: "9. Renal stone pain radiates to ______.",
        options: ["a) Left arm", "b) Groin", "c) Neck", "d) Face"],
        answer: "b) Groin",
        section: "Renal / Urinary System"
    },
    {
        question: "10. Acute kidney injury is ______.",
        options: ["a) Slow damage", "b) Sudden kidney failure", "c) Chronic infection", "d) Only genetic"],
        answer: "b) Sudden kidney failure",
        section: "Renal / Urinary System"
    },
    {
        question: "11. High potassium causes ______.",
        options: ["a) Hair loss", "b) Cardiac arrest", "c) Fever", "d) Low BP"],
        answer: "b) Cardiac arrest",
        section: "Renal / Urinary System"
    },
    {
        question: "12. Most important blood test for kidney function is ______.",
        options: ["a) Hemoglobin", "b) Creatinine", "c) Calcium", "d) Lipid profile"],
        answer: "b) Creatinine",
        section: "Renal / Urinary System"
    },
    {
        question: "13. Normal creatinine level is ______.",
        options: ["a) 0.6–1.2 mg/dL", "b) 5–7 mg/dL", "c) 3–5 mg/dL", "d) 12–14 mg/dL"],
        answer: "a) 0.6–1.2 mg/dL",
        section: "Renal / Urinary System"
    },
    {
        question: "14. CKD patients need ______.",
        options: ["a) High salt", "b) Low salt", "c) High protein", "d) High sugar"],
        answer: "b) Low salt",
        section: "Renal / Urinary System"
    },
    {
        question: "15. Which food is restricted in kidney patients?",
        options: ["a) Bananas", "b) Apples", "c) Rice", "d) Curd"],
        answer: "a) Bananas", // Due to high potassium content
        section: "Renal / Urinary System"
    },
    {
        question: "16. Best diet for hyperkalemia is ______.",
        options: ["a) Potato", "b) Tomato", "c) Nuts", "d) Apple"],
        answer: "d) Apple", // Apples are low in potassium, while the others are high.
        section: "Renal / Urinary System"
    },
    {
        question: "17. Edema in renal failure occurs due to ______.",
        options: ["a) High urine output", "b) Water retention", "c) Vitamin deficiency", "d) Exercise"],
        answer: "b) Water retention",
        section: "Renal / Urinary System"
    },
    {
        question: "18. In AKI, urine output becomes ______.",
        options: ["a) High", "b) Normal", "c) Low", "d) Blue"],
        answer: "c) Low",
        section: "Renal / Urinary System"
    },
    {
        question: "19. Dialysis is done when ______.",
        options: ["a) Sugar is high", "b) Potassium is high", "c) Kidney cannot remove waste", "d) BP is normal"],
        answer: "c) Kidney cannot remove waste",
        section: "Renal / Urinary System"
    },
    {
        question: "20. Kidney produces which hormone?",
        options: ["a) Adrenaline", "b) Insulin", "c) Erythropoietin", "d) TSH"],
        answer: "c) Erythropoietin",
        section: "Renal / Urinary System"
    },
    // ENDOCRINE SYSTEM (21–35)
    {
        question: "21. Endocrine glands secrete ______.",
        options: ["a) Food", "b) Hormones", "c) Blood", "d) Enzymes"],
        answer: "b) Hormones",
        section: "Endocrine System"
    },
    {
        question: "22. Thyroid gland produces ______.",
        options: ["a) Insulin", "b) Adrenaline", "c) T3 & T4", "d) Cortisol"],
        answer: "c) T3 & T4",
        section: "Endocrine System"
    },
    {
        question: "23. Main function of T3/T4 is ______.",
        options: ["a) Digestion", "b) Metabolism", "c) Immunity", "d) Clotting"],
        answer: "b) Metabolism",
        section: "Endocrine System"
    },
    {
        question: "24. Calcitonin ______ calcium levels.",
        options: ["a) Increases", "b) Decreases", "c) No effect", "d) Stops absorption"],
        answer: "b) Decreases",
        section: "Endocrine System"
    },
    {
        question: "25. Symptom of hypothyroidism is ______.",
        options: ["a) Weight gain", "b) Heat intolerance", "c) Fast pulse", "d) Tremors"],
        answer: "a) Weight gain",
        section: "Endocrine System"
    },
    {
        question: "26. Symptom of hyperthyroidism is ______.",
        options: ["a) Weight gain", "b) Cold intolerance", "c) Slow pulse", "d) Weight loss"],
        answer: "d) Weight loss",
        section: "Endocrine System"
    },
    {
        question: "27. Bulging eyes are seen in ______.",
        options: ["a) Hypothyroidism", "b) Hyperthyroidism", "c) Addison’s", "d) Diabetes"],
        answer: "b) Hyperthyroidism",
        section: "Endocrine System"
    },
    {
        question: "28. Drug used in hypothyroidism is ______.",
        options: ["a) Insulin", "b) Carbimazole", "c) Levothyroxine", "d) Metformin"],
        answer: "c) Levothyroxine",
        section: "Endocrine System"
    },
    {
        question: "29. Drug used in hyperthyroidism is ______.",
        options: ["a) Levothyroxine", "b) Carbimazole", "c) Paracetamol", "d) Insulin"],
        answer: "b) Carbimazole",
        section: "Endocrine System"
    },
    {
        question: "30. Cushing syndrome shows ______.",
        options: ["a) Weight loss", "b) Moon face", "c) Dark skin", "d) Sweating"],
        answer: "b) Moon face",
        section: "Endocrine System"
    },
    {
        question: "31. Addison’s disease shows ______.",
        options: ["a) High BP", "b) Dark skin", "c) Weight gain", "d) High sugar"],
        answer: "b) Dark skin",
        section: "Endocrine System"
    },
    {
        question: "32. Treatment of Addison crisis is ______.",
        options: ["a) Insulin", "b) Adrenaline", "c) Hydrocortisone", "d) Paracetamol"],
        answer: "c) Hydrocortisone",
        section: "Endocrine System"
    },
    {
        question: "33. High cortisol causes ______.",
        options: ["a) Addison’s disease", "b) Cushing syndrome", "c) Hyperthyroidism", "d) Hypothyroidism"],
        answer: "b) Cushing syndrome",
        section: "Endocrine System"
    },
    {
        question: "34. Low cortisol causes ______.",
        options: ["a) Cushing", "b) Addison’s", "c) Diabetes", "d) Hypothyroidism"],
        answer: "b) Addison’s",
        section: "Endocrine System"
    },
    {
        question: "35. Aldosterone mainly controls ______.",
        options: ["a) Insulin", "b) Calcium", "c) Sodium", "d) Thyroxine"],
        answer: "c) Sodium",
        section: "Endocrine System"
    },
    // DIABETES MELLITUS (36–50)
    {
        question: "36. Polyuria means ______.",
        options: ["a) Less urine", "b) No urine", "c) Frequent urination", "d) Painful urination"],
        answer: "c) Frequent urination",
        section: "Diabetes Mellitus"
    },
    {
        question: "37. Diabetes is mainly due to ______.",
        options: ["a) Low iron", "b) No insulin or less insulin action", "c) Low salt", "d) Low calcium"],
        answer: "b) No insulin or less insulin action",
        section: "Diabetes Mellitus"
    },
    {
        question: "38. Most common symptom of diabetes is ______.",
        options: ["a) Rash", "b) Sweating", "c) Increased thirst", "d) Hair fall"],
        answer: "c) Increased thirst", // Polydipsia (along with polyuria and polyphagia)
        section: "Diabetes Mellitus"
    },
    {
        question: "39. Fasting blood sugar for diabetes is ______.",
        options: ["a) >80 mg/dL", "b) >126 mg/dL", "c) >100 mg/dL", "d) >160 mg/dL"],
        answer: "b) >126 mg/dL",
        section: "Diabetes Mellitus"
    },
    {
        question: "40. Type 1 diabetes needs ______.",
        options: ["a) Insulin", "b) Tablets", "c) Only diet", "d) Only exercise"],
        answer: "a) Insulin",
        section: "Diabetes Mellitus"
    },
    {
        question: "41. Type 2 diabetes is treated with ______.",
        options: ["a) Oxygen", "b) Metformin", "c) Paracetamol", "d) Insulin only"],
        answer: "b) Metformin",
        section: "Diabetes Mellitus"
    },
    {
        question: "42. Best injection site for insulin is ______.",
        options: ["a) Buttock", "b) Thigh", "c) Abdomen", "d) Wrist"],
        answer: "c) Abdomen",
        section: "Diabetes Mellitus"
    },
    {
        question: "43. Main danger of insulin therapy is ______.",
        options: ["a) Hypoglycemia", "b) Fever", "c) High BP", "d) Infection"],
        answer: "a) Hypoglycemia",
        section: "Diabetes Mellitus"
    },
    {
        question: "44. Hypoglycemia signs include ______.",
        options: ["a) Sweating & shaking", "b) Weight gain", "c) High BP", "d) Chest pain"],
        answer: "a) Sweating & shaking",
        section: "Diabetes Mellitus"
    },
    {
        question: "45. First treatment for hypoglycemia is ______.",
        options: ["a) Water", "b) Sugar or juice", "c) Insulin", "d) Antibiotic"],
        answer: "b) Sugar or juice",
        section: "Diabetes Mellitus"
    },
    {
        question: "46. Diabetic foot occurs due to ______.",
        options: ["a) Low BP", "b) Nerve damage", "c) Allergy", "d) Exercise"],
        answer: "b) Nerve damage",
        section: "Diabetes Mellitus"
    },
    {
        question: "47. Diabetic diet includes ______.",
        options: ["a) High sugar", "b) Low sugar", "c) High salt", "d) High fat"],
        answer: "b) Low sugar",
        section: "Diabetes Mellitus"
    },
    {
        question: "48. Long-term complication of diabetes is ______.",
        options: ["a) Cancer", "b) Kidney damage", "c) Hair fall", "d) Ear infection"],
        answer: "b) Kidney damage", // Diabetic nephropathy
        section: "Diabetes Mellitus"
    },
    {
        question: "49. HbA1c test measures ______.",
        options: ["a) Iron", "b) Long-term blood sugar", "c) Calcium", "d) BP"],
        answer: "b) Long-term blood sugar",
        section: "Diabetes Mellitus"
    },
    {
        question: "50. Diabetes patient should check feet ______.",
        options: ["a) Monthly", "b) Daily", "c) Yearly", "d) Never"],
        answer: "b) Daily",
        section: "Diabetes Mellitus"
    },
];