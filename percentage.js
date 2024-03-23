// Percentage Calculator:
// This code calculate percentage for 5 subjects
// Subjects: Meth, Physics, Chemistry, English, and Biology
// Student Detail:
var student_Id = "765QUYT";
// Total Marks:
var TotalMarks = 500;
// Student Marks:
var MathScore = 85;
var PhysicsScore = 97;
var ChemistryScore = 35;
var EnglisScore = 55;
var BiologyScore = 77;
var FinalResult = ((MathScore + PhysicsScore + ChemistryScore + EnglisScore + BiologyScore) / TotalMarks) * 100;
var ResultStatement = "Student " + student_Id + " Obtained this percentage: " + FinalResult + "%";
console.log(ResultStatement);
var grade1 = FinalResult > 90;
console.log("grade1 :", grade1);
var grade2 = FinalResult > 80;
console.log("grade2 :", grade2);
var grade3 = FinalResult > 70;
console.log("grade3 :", grade3);
var grade4 = FinalResult > 60;
console.log("grade4 :", grade4);
