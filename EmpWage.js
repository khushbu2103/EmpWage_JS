console.log("Welcome to the Employee Wage program")

////UC6 Storing EmpWage And TotalWage In Array ////
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
let EmpDailyWageArray = new Array()
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
    EmpDailyWageArray.push(empWage);
    totalWage+=empWage;
    day++
    totalEmpHrs+=empHrs;
    console.log("Employee daily wage for day "+ day + " is "+ empWage)
}

console.log("Employee Total Wage without using array: "+ totalWage);
console.log(EmpDailyWageArray);

let total= 0;
for(let element of EmpDailyWageArray)
{
    total+=element;
}
console.log("Total wage using array: "+ total)

total = 0;
function GetTotalWage(dailyWage)
{
    total+=dailyWage;
}
EmpDailyWageArray.forEach(GetTotalWage);
console.log("UC-7A Using forEach helping function to calculate totalwage: "+total);

function GetTotalWageUsingReduce(totalWage, dailyWage)
{
    return totalWage+dailyWage;
}
console.log("UC-7A Using reduce helper function to calculate totalwage: "+ EmpDailyWageArray.reduce(GetTotalWageUsingReduce))

let dayCount= 0;
function GetDayAlongWithWage(dailyWage)
{
    dayCount++
    return " day" + dayCount + ": " +dailyWage ;
}
let dayAlongWithWage = EmpDailyWageArray.map(GetDayAlongWithWage)
console.log("UC-7B Using map helper function to generate day along with wage: "+ dayAlongWithWage)

function GetFullTimeDays(input)
{
    if(input.includes("160"))
    return input;
}
let fullTimeDays = dayAlongWithWage.filter(GetFullTimeDays)
console.log("UC-7C Using filter helper function finding fulltime wage:\n "+ fullTimeDays)
console.log("UC-7D Using find helper function finding 1st occurence of fulltime wage:\n "+ fullTimeDays.find(GetFullTimeDays))
console.log("UC-7E Using find helper function checking every element is fulltime or not:\n "+ fullTimeDays.every(GetFullTimeDays))
function GetPartTimeDays(input)
{
    if(input==80)
    return input;
}
console.log("UC7F using some helper function finding atleast one parttime wage: "+ EmpDailyWageArray.some(GetPartTimeDays))

function GetTotalWorkingDays(totalWorkingDays, dailyWage)
{
    if(dailyWage>0)
    return totalWorkingDays+1;
    else 
    return totalWorkingDays;
}


console.log("UC7G using reduce helper function finding total number of working days: "+EmpDailyWageArray.reduce(GetTotalWorkingDays, 0))