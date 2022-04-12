import './less/index.less'

// Your code goes here!
//CLICK H2 INTRO
const headerIntro = document.querySelector(".intro h2")
headerIntro.addEventListener("click", (event) => {
    event.target.style.color = "red"
})

//MOUSEOVER ALL NAV A ITEMS
const navLinks = document.querySelectorAll("nav a")
navLinks.forEach((e) => {
    e.addEventListener("mouseover", (event) => {
        event.target.style.color="orange"
    })
})

//HEADER IMG DOUBLE-CLICK
const headerImg = document.querySelector("header img")
headerImg.addEventListener("dblclick", (event) => {
    event.target.src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
})

//HEADER CHANGE COLOR ON WHEEL
const headerBackground = document.querySelector("header")
headerBackground.addEventListener("wheel", (event) => {
    event.target.style.backgroundColor = "pink"
})

//CHANGE TEXT OF "LET'S GO" H2
const letsGoText = document.querySelector(".text-content:nth-of-type(1) h2")
letsGoText.addEventListener("mouseout", (event) => {
    event.target.textContent="I am a new text!"
})

//CHANGE COLOR OF ENTIRE PAGE ON LOAD
const entirePage = document.querySelector("body")
window.addEventListener('load', (event) => {
    entirePage.style.backgroundColor="aqua"
});

//BUTTON BOTTOM MOUSEOUT
const buttonBottom = document.querySelector(".destination:nth-of-type(2) .btn")
buttonBottom.addEventListener("mouseout", (event) => {
    event.target.style.fontSize = "3rem"
})

//CHANGE FOOTER BACKGROUND ON MOUSELEAVE
const footer = document.querySelector(".footer")
footer.addEventListener("mouseleave", () => {
    footer.style.backgroundColor = "yellow"

})

//TITLE TO DISAPPEAR ON COPY
const removeTitle = document.querySelector(".logo-heading")
removeTitle.addEventListener("copy", event =>{
    event.target.innerText = ""
})

//CHANGE FONT SIZE TO ITALIC ON MOUSEENTER
const contentDestination = document.querySelector(".content-destination h2")
contentDestination.addEventListener("mouseenter", (event) => {
    event.target.style.fontStyle="italic"
})