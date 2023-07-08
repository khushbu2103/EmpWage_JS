//// these codes for better understanding////

let a = 10;
let b = 20;
console.log("sum"+(a+b));

let age=20
if(age > 18)
{  
    console.log("you are eligible for voting")
}
else
{
    console.log("you are not eligible")
}

var dogs = ["Bulldog", "Pug", "Lab"];
console.log(dogs);
var allDogs= ""
console.log("\nOlder version of forloop")
for(let i=0; i<dogs.length; i++)
{
    allDogs+=dogs[i]+" ";
}
console.log("All dogs name:"+ allDogs);

console.log("\nNew version of forloop");
var allDogs= "";
for(let dog of dogs)
{
    allDogs+=dog+" ";
}
console.log("All dogs name:"+ allDogs);