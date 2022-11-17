function Badge(name, photo, companyName){
    this.name = name;
    this.photo = photo;
    this.companyName = companyName;
    this.showMessage = () => { // METHOD
        console.log(`Hello ${this.name}. Welcome to the ${this.companyName}`)
    }
}

const verizon = new Badge('Gagan' , 'photo url', 'Verizon');
verizon.showMessage();



function Car(name, color, price, currentSpeed){
    this.name = name;
    this.color = color;
    this.price = price;
    this.currentSpeed = currentSpeed;
    this.race = () => {
        return this.currentSpeed + 1
    },
    this.printSpeed=() => {
        console.log(this.currentSpeed)
    }
    this.break = () => {
        console.log('Brakes applied.', this.currentSpeed--)
    }
}




function Learn(){ // Constructor function / Object
    this.name = "jassi",
    this.age = 36
}
// creating object
const Learn1 = new Learn(); // constructor or object instance 
// inheriting the property from prototype
console.log(Learn1.age);
console.log(Learn1.name);


// practice

let fridge = {
    color: 'white',
    brand: 'LG',
    model: 12
}
console.log(fridge . brand);

//practice1
//callback function
function action(callback,x,y){
    var result = callback(x,y);
    console.log (result);
}
function add(x,y){
    return x+y;

}
function multi(x,y){
    return x*y;
}
console.log(add (3,4));
action (multi , 4,4);


function print_current_page()
{
window.print();
}

//d/m/y
var today = new Date();
var dd = today.getDate();

var mm =today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd= '0'+dd;
}
if(mm<10)
{
    mm= '0'+mm;
}
today = mm+ '/'+ dd+ '/' + yyyy;
console.log(today);


//multi and adivide

function multiplyBy()
{

    num1 = document.getElementById("firstNumber").nodeValue;
    num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").domhtml = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").domhtml = num1 / num2;
}


// Yes, first attempt success
