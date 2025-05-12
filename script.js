console.log("Javascript")
// alert("hello")
// prompt("what is your name?")
// console.log('my name')
// console.log("my name")
// console.log(`my name`)
// console.log('i\'m here')
// console.log(typeof("string1"))
// console.log(typeof(null))
// console.log(10.25+2.25)
// console.log("my name is" +" "+ "Adejare")
// console.log(3*1+2)
// console.log(true&&false)
// console.log(false&&true)
// console.log(false&&false)
// console.log(true&&true)
// console.log(false||false)
// console.log(!true)
// console.log(!false)
// console.log(!true&&true||false)
// console.log(5=='5')
console.log('5' === '5')
console.log(5 != '5')
console.log(5 !== '5');
// (5<2) ? console.log('5 is less than 2') : console.log('5 is greater than 2')
// console.log((5<2) ? '5 is less than 2' : '5 is greater than 2')
// let firstName
// console.log(firstName)
// console.log(typeof(firstName))
// let firstName
// firstName='Precious'
// console.log(firstName)
let firstName = 'Precious'
firstName = 'LightSeid'
console.log(firstName)
const lastName = 'Ebuka'
console.log(lastName)
function greet() {
    console.log('good morning')
}
greet()
function sum() {
    const x = 2
    const y = 3
    const result = x + y
    return result
    // return x+y
}
// console.log(x)
// console.log(sum())
const x = 2
const y = 3
function sum() {
    console.log(x)
    console.log(y)
}
sum()
const multiply = () => {
    return 2 * 3
}
console.log(multiply())
function modulus(num1, num2) {
    return num1 % num2
}
console.log(modulus(5, 2))
function negative(num1) {
    return !num1
}
console.log(negative(false))
function find(x, y, z) {
    return x || y && z
}
console.log(find(true, false, true))
function greatPeople(...persons) {
    return persons
}
console.log(greatPeople('dami', 'praise', 'precious', 'Barokah'))

function greatpeople(greetings, surname, ...persons) {
    // return persons.map((person)=> greetings+ " " + person)
    return persons.map((person) => `${greetings} ${person} ${surname}`)
}
console.log(greatpeople("Good morning", "Abeke", 'dami', 'praise', 'precious', 'Barokah'))

function circle(radius, circum) {
    return {
        radius,
        circum
    }
}
const circleN = circle(100, 20)
console.log(circleN)

const food = 'Amala'
console.log(food.length)

const human = {
    Name: "Wally",
    Complexion: "Chocolate",
    Age: 11,
    isTall: true,
}
console.log(human.Name)
console.log(human)
console.log(human['Complexion'])
const { Name, Complexion, Age } = human;
console.log(`His name is ${human.Name} and he is ${human.Age} years old with a ${human.Complexion} complexion`)
console.log(Name)
console.log(`His name is ${Name} and he is ${Age} years old`)
human.Name = "Waliyullahi";
console.log(human);
console.log(human.Name)
human.isTall = false;
human.isShort = true;
console.log(human);
delete human.Complexion;
console.log(human)
function calcAreaOfTraiangle(base,heigth){
    let a = base;
    let b = heigth;
    return (a/2)*b
}
console.log(calcAreaOfTraiangle(5,10))
const tertiaryInstitution ={
    School:"Unilorin",
    Location:"Kwara State",
    Faculty:"Physical Sciences",
    Department:{
        main_dept: "Geology and Mineral Science",
        sub_dept:"Engineering Geology"
    }
}
console.log(tertiaryInstitution.Department.sub_dept)
const{Department:{main_dept,sub_dept},School,Location,Faculty}=tertiaryInstitution;
console.log(sub_dept)

function list(...a){
    return a
}
const humanArr = list('Dayo','Sayo','David')
const petArr = list('Snake','Cat','Dog')
const combine = [...humanArr,...petArr]
console.log(combine)
// Emptying an Array
// const studentNames = ['Dayo','Sayo','Davis']  //1st method
let studentNames = ['Dayo','Sayo','Davis'] //2nd method and 3rd method
// studentNames.splice(0 ,studentNames.length) //1st
// studentNames = []  //2nd
// studentNames.length = 0  //3rd method
// console.log(studentNames)

// SCILING AN ARRAY
const slicedArr = studentNames.slice(0,2)
console.log(slicedArr)