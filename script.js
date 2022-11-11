const body = document.body
body.append("Hello World") //Adding string to element body

const div = document.createElement("div") //Creating element div
body.append(div)
div.innerText = "Hello World!!"
div.textContent = "Hello Hello!!"

const div1 = document.querySelector('div')
console.log(div1.textContent) //Spacing, indentation will show
console.log(div1.innerText) //Gets content only to display in html

const strong = document.createElement("strong") 
body.append(strong)
strong.innerText = "This text is strong" //Modify and add element to html

const spanDay = document.querySelector('#day')
//spanDay.remove() //Removes element completely from html

const spanGood = document.querySelector('#good')
console.log(spanGood.title) //Gets title=good. console.log(spanGood.getAttribute('title'))
console.log(spanGood.id) //Gets id=good
console.log(spanGood.setAttribute("title", "testing")) //Changes title to testing from good
spanGood.title = "new test" //Shorter way
spanGood.removeAttribute("title") //title attribute removed

console.log(spanDay.dataset.test) //Shows inside data-test
spanDay.dataset.newName = "Hello" //Adds new data attribute

spanGood.classList.add("good3") //Adds a new class to Good
spanGood.classList.remove("good1") //Removes class from Good
spanGood.classList.toggle("good2") //Adds/removes class
spanGood.classList.toggle("good1", true) //Adds good1 of true, remove if false

spanDay.style.backgroundColor="red" //Converts from camelcase to background-color