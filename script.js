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
function calcAreaOfTraiangle(base, heigth) {
    let a = base;
    let b = heigth;
    return (a / 2) * b
}
console.log(calcAreaOfTraiangle(5, 10))
const tertiaryInstitution = {
    School: "Unilorin",
    Location: "Kwara State",
    Faculty: "Physical Sciences",
    Department: {
        main_dept: "Geology and Mineral Science",
        sub_dept: "Engineering Geology"
    }
}
console.log(tertiaryInstitution.Department.sub_dept)
const { Department: { main_dept, sub_dept }, School, Location, Faculty } = tertiaryInstitution;
console.log(sub_dept)

function list(...a) {
    return a
}
const humanArr = list('Dayo', 'Sayo', 'David')
const petArr = list('Snake', 'Cat', 'Dog')
const combine = [...humanArr, ...petArr]
console.log(combine)
// Emptying an Array
// const studentNames = ['Dayo','Sayo','Davis']  //1st method
let studentNames = ['Dayo', 'Sayo', 'Davis'] //2nd method and 3rd method
// studentNames.splice(0 ,studentNames.length) //1st
// studentNames = []  //2nd
// studentNames.length = 0  //3rd method
// console.log(studentNames)

// SCILING AN ARRAY
const slicedArr = studentNames.slice(0, 2)
console.log(slicedArr)

// ITERATING ELEMENTS OF AN ARRAY - forEach method:listing one element one after another
studentNames.forEach((el) => {
    console.log(`${el} money`)
})

//JOINING AN ARRAY
console.log(studentNames.join())

//write a function that reverses a string *hint:using function,stringobject,joininganarray

// Mappping An Array
const larvaStudentNames = ['Ayo', 'Sayo', 'Gbemi', 'Caro']
const mapStudentArr = larvaStudentNames.map((al) => {
    return `Good morning, ${al}`
})
console.log(mapStudentArr)

// Reducing An Array - anytime to perform expression with all and every element within an array is called reduction
const normArr = [3, 4, 1, 2, 6, 10, 11]
// const reducedArr = normArr.reduce((a,b)=> a*b) //or (a,b)=>{return a+b}
// console.log(reducedArr) 
//Other method are some(),every(),from()
const someArr = normArr.some((norm) => {
    return norm > 15 //norm%2===0
})
console.log(someArr)
const everyArr = normArr.every((norm) => {
    return norm > 6
})
console.log(everyArr) //Data Structure and Algorithm, System Design read at leisure!!
// function that return an array that combines static and dynamic data

//Cloning an Object
const goat = {
    color: "black",
    breed: "Asian white",
    location: "China"
}

const anothergoat = Object.assign(goat, { height: "178cm" })
console.log(anothergoat)
const goatmeat = { ...goat, anothergoat };
console.log(goatmeat);

function combo(b, ...a) {
    // const larvaNames = a.map((num)=> `${b} ${num}`)
    // return larvaNames
    return a.map((num) => `${b} ${num}`)
}
const combination = combo("Hello", 'rayo', 'shauo', 'david');
const combination1 = combo("Good Morning", 'rayo', 'shauo', 'david');
console.log(combination);
console.log(combination1)

//Day 12 from
const greeting = "Hello"
const fromArr = Array.from(greeting)
console.log(fromArr)

// const fromArr2 = Array.from([1,2,3],(el)=>el+10) //from to add numbers
// console.log(fromArr2)

// const fromArr2 = [1,2,3]
// const fromArr3 = fromArr2.map((el)=> el + 10)  //another method other than from to add numbers
// console.log(fromArr3)

const fromArr3 = Array.from({ length: 3 }); //an array with fixed length and value undefined
console.log(fromArr3)
fromArr3[0] = "name" // defining the undefined array
fromArr3[1] = "title"
fromArr3[2] = "age"
console.log(fromArr3)

const person = {
    name: "Wally",
    age: 45,
    height: "185cm"
}
const machine = {
    model: "Kai",
    Version: "M21",
    year: 2024
}
console.log(person)
console.log(machine)

// // const humanoid = Object.assign(person);
// const humanoid = {...person,...machine}
// console.log(humanoid)

// // Assignment
// function bills (bill,...tip){
//     const tip_percentage = (tip*bill)/100;
//     return tip.map((num)=>`The bill was ${bill},the tip was ${num},and the total value is ${bill+tip_percentage}`)

// }
// const payment = bills(275,15);
// console.log(payment)

// CONTROL FLOW (Conditional Statement)
// const num = 11.25
// const toStr = String(num)


// if(typeof(num) !== "number"){
//     console.log("Value is not a number")
// } else if (num === 0) {
//     console.log("Number is Zero")
// } else if (toStr.includes('.')) {
//     console.log('number is decimal')
// } else if (num % 2 === 0) {
//     console.log("Number is even")
// } else if (num % 2 !== 0) {
//     console.log("Number is Odd")
// }
// else {
//     console.log("Number is not from earth")
// }


//SWITCH CASE STATEMENT


const role = "Gateman"

switch (role) {
    case "Student":
        console.log('Person is student')
        break;
    case "Tutor":
        console.log('Person is tutor')
        break;
    case "Admin":
        console.log('Person is admin')
        break;
    default:
        console.log('unknown user')
        break;
}

//TERNARY OPERATOR 
// const email = "larva@gmail.com"

// email.includes('@') && email.endsWith(".com")
//     ? console.log('Email is acceptable')
//     : console.log('Invalid Email')

//Assignment Correction
const calculator = function calc(bill,tip) {
    const cal = bill >= 50 && bill <= 300
        ? bill * tip 
        : bill * tip
    return `The bill was ${bill} and the tip was ${tip} and the total value was ${bill+cal}`
}
// console.log(calculator(305,0.2))

//  Assignment Use a function to handle the conditional statement
function control(num){
    if(num === 0){
        return `The number is Zero`
    }
    else if(num % 2 === 0){
        return `The number is Even`
    }
    else{
        return `The number is Odd`
    }
}
const cond = control(0)
// console.log(cond)

function Switch (role){
    switch(role){
        case 'student':
            return `The person is a student`
            break;
        case 'tutor':
            return `The person is a tutor`
            break;
        case 'admin':
            return `The person is the Admin`
            break;
        default:
            return `Unknown User`
            break;
    }
}
const Case = Switch('gateman')
// console.log(Case)

function Ter(email){
    return email.includes('@') && email.endsWith('.com') ? `Email is Acceptable` : `Invalid Email` 

}
const Email = Ter('Larva@gmail.com')
console.log(Email)

// LOOPS => for loop,while loop,do-while loop,infinite loop,for/in loop,for/of loop A Loop is a program that runs in a repetitive manner.
// for(let i=0;i<5;i++){
//     console.log(i)
// }
const variable = ['Ayo','Bayo','Cayo','Dayo']
// let variable1 =variable.reverse()
// for(let i=0;i<variable.length;i++){
//     console.log(i,variable[i])
// }
//While loop
// let i = 0
// while(i>5){
//     console.log(i)
//     i++
// }
//Do-While Loop
let i =0
// do{
//     console.log(i)
//     i++
// }while(i<5)
// For/of Loop - to iteriate the element of an array
for(el of variable){
    console.log(el)
}
// For/in Loop - to iteriate the keys of an object
// const school = {
//     name:"Unilorin",
//     location:"Kwara",
//     time_zone:"+7-hours"
// }
// for(key in school){
//     console.log(school[key])
// }
// for(el in variable){
//     console.log(variable[el])
// }

//Timing Functions  --- setTimeOUt and setInterval
//setTimeout - function that specifies a time for an operation or expression to be executed
// setTimeout(() => {
//     console.log("Loading...")
// }, 5000);
setInterval(() => {
    console.log('Javascript')
}, 2000);

