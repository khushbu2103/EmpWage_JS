console.log("Welcome to the Employee Wage program")

////UC4 Employee Wage for a month ////
let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
const EMP_RATE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS= 20;
const TOTAL_HOURS_IN_MONTH=160;

let empHrs=0;
let empWage=0;
let totalWage=0;
let totalEmpHrs=0;
let day=1;
function GetWorkingHrs(empCheck)
{  
switch(empCheck)
{
    case IS_FULL_TIME:
       // console.log("Employee is full time present");
        empHrs=8;
        return empHrs;
    case IS_PART_TIME:
        //console.log("Employee is part time present");
        empHrs=4;
        return empHrs;
    default:
       // console.log("Employee is absent");
        return empHrs;
}
}
while(totalEmpHrs<=TOTAL_HOURS_IN_MONTH && day<=NUM_OF_WORKING_DAYS)
{
    let empCheck= (Math.floor(Math.random()*10)%3);
    empWage = GetWorkingHrs(empCheck)*EMP_RATE_PER_HOUR
    totalWage+=empWage;
    day++
    totalEmpHrs+=empHrs;
    console.log("Employee daily wage for day "+ day + " is "+ empWage)
}

console.log("Employee Total Wage:"+ totalWage);
