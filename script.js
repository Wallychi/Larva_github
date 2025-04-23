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
console.log('5'==='5')
console.log(5!='5')
console.log(5!=='5');
// (5<2) ? console.log('5 is less than 2') : console.log('5 is greater than 2')
// console.log((5<2) ? '5 is less than 2' : '5 is greater than 2')
// let firstName
// console.log(firstName)
// console.log(typeof(firstName))
// let firstName
// firstName='Precious'
// console.log(firstName)
let firstName = 'Precious'
firstName='LightSeid'
console.log(firstName)
const lastName = 'Ebuka'
console.log(lastName)
function greet(){
    console.log('good morning')
}
greet()
function sum(){
    const x=2
    const y=3
    const result = x+y
    return result
    // return x+y
}
// console.log(x)
// console.log(sum())
const x = 2
const y = 3
function sum(){
    console.log(x)
    console.log(y)
}
sum()
const multiply =()=>{
    return 2*3
}
console.log(multiply())
function modulus(num1,num2){
    return num1 % num2
}
console.log(modulus(5,2))
function negative(num1){
    return !num1
}
console.log(negative(false))
function find(x,y,z){
    return x||y&&z
}
console.log(find(true,false,true))
function greatPeople(...persons){
    return persons
}
console.log(greatPeople('dami','praise','precious','Barokah'))

function greatpeople(greetings,surname,...persons){
    // return persons.map((person)=> greetings+ " " + person)
    return persons.map((person)=> `${greetings} ${person} ${surname}`)
}
console.log(greatpeople("Good morning","Abeke",'dami','praise','precious','Barokah'))
