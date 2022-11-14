const employees= [
    {
    name:"George",
    age:32,
    retiredate:"March 12,2014",
},
  {
    name: "Edward",
    age : 17,
    retiredate:"June 2,2023",
  },

  {
      name: "Christine",
      age:58,
      retiredate:"December 20,2036",
  },
  {
       name:"Sarah",
       age:62,
       retiredate:"April 30, 2020",
  },


];





 
employees.map(function (employee) {
    if (employee.age >= 30 && employee.age <= 40) {
        employee.found=true;
        console.log(employee);
    }else{
        employee.found=false;
        console.log(employee);
    }
});


//console.log(employees.map(element => element.age>=30 & element.age<=40));







//console.log(employees.find(element => element.age>50));

//console.log(employees.find(element => element.age>16 & element.age<19));

//console.log(employees.filter(element => element.name.charAt(0) ==='E'|| element.name.charAt(0)==='C'));



/** 
let text = "HELLO WORLD";
let letter = text.charAt(0);
console.log(letter);
***/

//let letter= employees.charAt(0);
//console.log(letter);