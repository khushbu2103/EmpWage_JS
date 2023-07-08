console.log("Welcome to the Employee Wage program")

////UC4 Employee Wage for a month ////
let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
let EMP_RATE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS= 20;
let empHrs=0;
//let empWage=0;
let totalWage=0;

function GetWorkingHrs()
{  
switch(empCheck)
{
    case IS_FULL_TIME:
        console.log("Employee is full time present");
        empHrs=8;
        return empHrs;
    case IS_PART_TIME:
        console.log("Employee is part time present");
        empHrs=4;
        return empHrs;
    default:
        console.log("Employee is absent");
        return empHrs;
}
}
for(let i=0; i<NUM_OF_WORKING_DAYS; i++)
{
    empCheck= (Math.floor(Math.random()*10)%3)
    empHrs+= GetWorkingHrs(empCheck)
   
    console.log("Employee hrs:"+ empHrs);
}
 let empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("Employee Total Wage:"+ empWage);
