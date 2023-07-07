console.log("Welcome to the Employee Wage program")

////UC2 Employee Wage Based on part time and full time////
let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
let EMP_RATE_PER_HOUR=20;
let empHrs=0;
let empWage=0;
empCheck= (Math.floor(Math.random()*10)%3)
switch(empCheck)
{
    case IS_FULL_TIME:
        console.log("Employee is full time present");
        empHrs=8;
        break;
    case IS_PART_TIME:
        console.log("Employee is part time present");
        empHrs=4;
        break;
    default:
        console.log("Employee is absent");
        break;
}

empWage= (empHrs*EMP_RATE_PER_HOUR)
console.log("Employee Daily Wage:"+ empWage);