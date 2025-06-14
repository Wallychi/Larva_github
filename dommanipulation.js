// console.log("Hello World")
const divEl = document.getElementById('text')
console.log(divEl)

divEl.innerText = "Praise"
const lis = document.getElementsByClassName('list')
console.log(lis)
const alertButton = document.getElementById('_alert')
setTimeout(() => {
    alertButton.innerText = 'Opermint'
}, 2000);
const school = { name: 'JAVIS', age: 56, gender: 'MALE' }
const School = document.getElementById('objective')
School.innerText = `My name is ${school.name}, I'm a ${school.gender} and I'm ${school.age} years old.`

// // Selecting the child
// const parent = document.getElementById('parent')
const children = parent.childNodes
console.log(children)
// Selecting the firstchild
const firstChild = parent.firstElementChild
console.log(firstChild)
// Selecting the lastChild
const lastChild = parent.lastElementChild
console.log(lastChild)
// Selecting the middle Child
const middleBorn = document.getElementById('parent')
const lastChild1 = middleBorn.lastElementChild
const middleChild = lastChild1.previousElementSibling
console.log(middleChild)
// Selcting the parent through the child
const child = document.querySelector('#para')
const papa = child.parentNode
console.log(papa)

// Manipulating HTML elements from our DOM
// 1.createElement
const newEl = document.createElement('div')
newEl.innerText = "This is a new element"
document.body.appendChild(newEl)
// 2. appendChild
const h1Tag = document.createElement('h1')
h1Tag.innerText = "Header Text"
const divChild = document.getElementById('para')
const pappy = divChild.parentNode
pappy.appendChild(h1Tag)
// innerText
const paraTag = document.getElementById('para') // having access to the innerText
console.log(paraTag.innerText)
// paraTag.innerText = "Something Else" // reassigning the innerText
// textContent
console.log(paraTag.textContent)
// innerHTML
paraTag.innerHTML = "<span><u>New item</u></span>"
// Append 
const newEle = document.getElementById('text')
const newest = document.createElement('p')
const newest1 = document.createElement('p')
newest.innerText = "cool"
newest1.innerText = "fuck"
newEle.appendChild(newest, newest1)

// Prepend => adding something before a list of items 
const parenty = document.getElementById('parent')
const newChild = document.createElement('li')
newChild.innerText = "Item 0"
parenty.prepend(newChild)
// insertAdjacentHTML
const parentTag = document.getElementById('listing')
const liTags = document.createElement('li')
liTags.innerText = "5 child"
// parentTag.insertAdjacentHTML('beforeend','4')
parentTag.insertBefore(liTags, parentTag.lastElementChild/*.previousElementSibling*/)
// Cloning A Node
const cloned = parentTag.cloneNode(true)
document.body.appendChild(cloned)
// replaceChild
parentTag.replaceChild(liTags, parentTag.lastElementChild)
// removeChild
parentTag.removeChild(parentTag.lastElementChild)
// Adding an event
function displayMsg() {
    console.log('hello Javascript')
}
const Main = document.getElementById('main_button')
// Main.onclick = displayMsg
// using addEventListener method
Main.addEventListener('click', displayMsg)
// div,add classname to div, style div in css h 100,w 100 bg brown, addEventListener onmouseenter,display New text
// Exercise
const DivOne = document.getElementById('divOne')
DivOne.className = "dIvOne"
const maintag = document.getElementById('parentag')
function clicking() {
    const listTags = document.createElement('p')
    listTags.innerText = "New Text"
    maintag.appendChild(listTags)
}
function unclicking(){
    maintag.removeChild(maintag.lastElementChild)
}
DivOne.addEventListener('mouseenter',clicking)
DivOne.addEventListener('mouseleave',unclicking)