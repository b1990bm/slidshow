let slideshow=document.querySelector(".slideshow")
let slides=document.querySelectorAll(".slide")
let point=document.querySelectorAll(".points > span")
let prev=document.querySelector(".prev")
let next=document.querySelector(".next")
let active=0
let timer = 2000

function classSwitcher (){
    slides.forEach(slide=>slide.classList.remove("active"))
    slides[active].classList.add("active")
    point.forEach(slide=>slide.classList.remove("active"))
    point[active].classList.add("active")

}

let gonext = () =>{
    active=(active==slides.length -1) ? 0 : active +1
    classSwitcher()
}

setInterval(gonext,timer)