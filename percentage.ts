// Percentage Calculator:

// This code calculate percentage for 5 subjects
// Subjects: Meth, Physics, Chemistry, English, and Biology

// Student Detail:
let student_Id = "765QUYT"

// Total Marks:
let TotalMarks =500

// Student Marks:
let MathScore = 85
let PhysicsScore = 97
let ChemistryScore = 35
let EnglisScore = 55
let BiologyScore = 77

let FinalResult = ((MathScore+PhysicsScore+ChemistryScore+EnglisScore+BiologyScore) / TotalMarks) * 100
let ResultStatement = "Student " +student_Id + " Obtained this percentage: " + FinalResult +  "%"
console.log(ResultStatement)

let grade1 = FinalResult > 90
console.log("grade1 :", grade1)
let grade2 = FinalResult > 80
console.log("grade2 :", grade2)
let grade3 = FinalResult > 70
console.log("grade3 :", grade3)
let grade4 = FinalResult > 60
console.log("grade4 :", grade4)