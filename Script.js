let tl = gsap.timeline()    // gsap code for animation
tl.to("#calculater",{
   y:"100vh",
   scale:0.5,
   duration:0
})
tl.to("#calculater",{
   y:"0vh",
   duration:0.8,
   delay:1
})
tl.to("#calculater",{
   y:"0vh",
   rotate:360,
   scale:1,
   duration:0.5
})
tl.from("#input-box",{
   y:-100,
   duration:1,
   delay:0.5,
   opacity:0,
   stagger:0.1
})
tl.from(".button-c>button",{
   scale:0,
   opacity:0,
   stagger:0.1
})

let input = document.getElementById("input-box");  // javascript code for logic
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener("click", (elem) => {
       if(elem.target.innerHTML == "="){
        string = eval(string);
        input.value = string;
       }
       else if(elem.target.innerHTML == "AC"){
            string = "";
            input.value = string;
       }
       else if(elem.target.innerHTML == "DEL"){
          string = string.substring(0, string.length-1);
          input.value = string;
       }
       else{
        string += elem.target.innerHTML ;
        input.value = string;
       }
    });
});