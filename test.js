// 1. Define a variable named totalAllottedTime and assign it a value of 100 hours. This represents the total time allotted for a project.
const totalAllottedTime = 100;

// 2.Define variables for the time spent on different tasks each week:
const task1Week1 = 8;
const task1Week2 = 10;
const task1Week3 = 12;
const task1Week4 = 14;
const task2Week1 = 10;
const task2Week2 = 12;
const task2Week3 = 9;
const task2Week4 = 14;

// 3.Calculate the total time spent on Task 1 for the month by adding up the time for each week and assign it to a variable named totalTimeTask1.
 const totalTimeTask1 = task1Week1 + task1Week2 + task1Week3 + task1Week4;

 // 4. Calculate the total time spent on Task 2 for the month by adding up the time for each week and assign it to a variable named totalTimeTask2.
 const totalTimeTask2 = task2Week1 + task2Week2 + task2Week3 + task2Week4;

 // 5. Calculate the total time spent on the project by adding totalTimeTask1 and totalTimeTask2 and assign it to a variable named totalTimeSpent.
 const totalTimeSpent = totalTimeTask1 + totalTimeTask2;

 // 6. Calculate the remaining time by subtracting totalTimeSpent from the totalAllottedTime and assign it to a variable named remainingTime.
 const remainingTime = totalAllottedTime - totalTimeSpent;

 // 7. Determine the status of the project based on the remainingTime using an if-else statement:
 let projectStatus;

 if(remainingTime < 0) {
    projectStatus = "You have exceeded the planned time for this project.";
 } else if(remainingTime < 10) {
    projectStatus = "You are about to reach the planned time for this project. Consider reviewing your time management.";
 } else if(remainingTime < 30) {
    projectStatus = "You are doing okay, but you may need to manage your time more efficiently.";
 } else {
    projectStatus = "You are on track with your project schedule.";
 }

 console.log("Project Time report");

 console.log("------------------------");

 console.log("Total Time Alloted: ", totalAllottedTime + ` hours`);
 console.log("Total Time Spend: ", totalTimeSpent + ` hours`);
 console.log("Total Time Spend on Task 1: ", totalTimeTask1 + ` hours`);
 console.log("Total Time Spend on Task 2: ", totalTimeTask2 + ` hours`);
 console.log("Remaining Time: ", remainingTime + ` hours`);
 console.log(); // Blank Line
 console.log("Project Status: ", projectStatus);