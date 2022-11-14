//Array 
const car =["honda","bmw","range"];
let length = car.length; //show length 
console.log(length);
console.log(car[1]);

//accessing the last array element
const brands =["honda","bmw","range"];
let drive = brands[brands.length -1]; //show last length(range) 
console.log(drive);



//changing an Array Element
const cars = ["honda","bmw","range"];
 cars[0] = "ferrari"; // honda replace to ferrari
 console.log(cars);

 //Array are Object
 const emp = {          //object
     firstname : "jassi",
     lastname :"kaur",
     age : 35
 
 };
 console.log(emp.firstname);

 //pop array
 const fruits= ["kiwi","apple","pear"];

 fruits. pop(); //remove pear
 fruits[3] ="mango"; // adding new element
 console.log(fruits); 

 //push array
 let food =["kiwi","apple","pear"];
 food.push("mango");//add new element
 console.log(food);

 //shift method
 let color=["yellow","red","blue"];
 color.shift(); //remove first element
 
 console.log(color);

 //unshift method
 const colors =["yellow","red","blue"];
 colors.unshift("orange");//add new element at beggin
 console.log(colors);

 //filter array function
 const number = [23,24,28,18];
 let result =number.filter(checkNo);

 function checkNo(number){
     return number>=20 ;

 }
 console.log(result);

 //find 
 const array=[30,13,34,44];
 let fun= array.find(marks); 

 function marks(array){
     return array >14;
 }
 console.log(fun);

 //splice method
 let number1 = [3,45,12,6,8];
 let removedElemnet = number1.splice(4,1,23); //remove/add 8 remove $23 add 1 means one element remove 
 console.log(removedElemnet);
 console.log(number1 & element);










 /*** 
  * /**for (i = 0 ; i< employees.length ; i++ ) {
    if (employees[i].age >= 30 && employees[i].age <= 40) {
        employees[i].found=true;
        console.log(employees[i]);
    } else {
        employees[i].found=false;
        console.log(employees[i]);
    }
}
 */
