console.log("Welcome to the Employee Wage program")

////UC1 Checking Employee Attendence////
let IS_FULLTIME = 1
empCheck= (Math.floor(Math.random()*10)%2)

if(empCheck==IS_FULLTIME)
{
    console.log("Employee is present")
}
else
{
    console.log("Employee is absent")
}