let slideshow=document.querySelector(".slideshow")
let slides=document.querySelectorAll(".slide")
let point=document.querySelectorAll(".points > span")
let prev=document.querySelector(".prev")
let next=document.querySelector(".next")
let active=0
let timer = 2000
// func baray ezafe kardan classlist active be html
function classSwitcher (){
    slides.forEach(slide=>slide.classList.remove("active"))
    slides[active].classList.add("active")
    point.forEach(slide=>slide.classList.remove("active"))
    point[active].classList.add("active")

}

// ye func  baray inke on add active ta jai bere ke ma ax darim
let gonext = () =>{
    active=(active==slides.length -1) ? 0 : active +1
    classSwitcher()
}

let goprev = () =>{
    active=(active==0) ? slides.length -1 : active -1
    classSwitcher()
}
//timer baray auto photo namayesh
let runsliedhow=setInterval(gonext,timer)

point.forEach((point,index)=>{
    point.addEventListener("click",e=>{
        active=index
        classSwitcher()
    })
})


next.addEventListener("click",e=> gonext())
prev.addEventListener("click",e=> goprev())

slideshow.addEventListener("mouseover",e=>{
    clearInterval(runsliedhow)
})

slideshow.addEventListener("mouseleave",e=>{
    runsliedhow=setInterval(gonext,timer)
})