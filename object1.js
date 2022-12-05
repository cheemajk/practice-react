const car =
    {
    name: "BMW",
    color: 'white',
    model: 123,

}
const car2={
name : "honda",
color : "black",
model : 345

}
// Dot notation
const myCar={}; 
myCar.make = "Ford",
myCar.model = "Mustang",
myCar.year = 1969,

console.log(myCar.year);

// Bracket notation

const myCar3={};
myCar3["make"] = "Ford";
myCar3["model"] = "Mustang";
myCar3["year"] = 1969;

console.log(myCar3.model);

const key ="name";
const getKey = () => "name";
const Obj = { name : "Mohan"};

console .log (Obj ["name"]);