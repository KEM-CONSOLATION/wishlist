// Arrows
// const arrow1 = document.querySelector('#arrow1');
// const arrow2 = document.querySelector('#arrow2');
// const arrow3 = document.querySelector('#arrow3');
// const arrow4 = document.querySelector('#arrow4');
// const arrow5 = document.querySelector('#arrow5');

// const faqsPara = document.querySelector('#faqsPara');
// const getStarted = document.querySelector('.getStarted');
// const bars = document.querySelector('#bars');
// const body = document.querySelector('#body');
// const overlay = document.querySelector('#overlay');
// const cancel = document.querySelector('#cancel');
// const login = document.querySelector('.login');
// const loginOverlay=document.querySelector('#loginOverlay');

// // Dropdowns
// const dropdown1=document.querySelector('#dropdown1');
// const dropdown2=document.querySelector('#dropdown2');
// const dropdown3=document.querySelector('#dropdown3');
// const dropdown4=document.querySelector('#dropdown4');
// const dropdown5=document.querySelector('#dropdown5');
// // const faqParas = document.querySelectorAll('.faqParas');
// // const arrows = document.querySelectorAll('#arrow');



// arrow1.addEventListener('click', ()=>{
//     if(dropdown1.style.display=="block"){
//         dropdown1.style.display="none";
//     }else{
//         dropdown1.style.display="block";
//     }
// }) 


// arrow2.addEventListener('click', ()=>{
//     if(dropdown2.style.display=="block"){
//         dropdown2.style.display="none";
//     }else{
//         dropdown2.style.display="block";
//     }
// })

// arrow3.addEventListener('click', ()=>{
//     if(dropdown3.style.display=="block"){
//         dropdown3.style.display="none";
//     }else{
//         dropdown3.style.display="block";
//     }
// })


// arrow4.addEventListener('click', ()=>{
//     if(dropdown4.style.display=="block"){
//         dropdown4.style.display="none";
//     }else{
//         dropdown4.style.display="block";
//     }
// })

// arrow5.addEventListener('click', ()=>{
//     if(dropdown5.style.display=="block"){
//         dropdown5.style.display="none";
//     }else{
//         dropdown5.style.display="block";
//     }
// })
    
// // }
// var faq = document.getElementsByClassName("faq-page");
// var i;
// for (i = 0; i < faq.length; i++) {
//     faq[i].addEventListener("click", function () {
//         /* Toggle between adding and removing the "active" class,
//         to highlight the button that controls the panel */
//         this.classList.toggle("active");
//         /* Toggle between hiding and showing the active panel */
//         var body = this.nextElementSibling;
//         if (body.style.display === "block") {
//             body.style.display = "none";
//         } else {
//             body.style.display = "block";
//         }
//     });
// }



var faq = document.getElementsByClassName("faqParas");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

// getStarted.addEventListener("click", () =>{
//     // faqsPara.innerHTML="Hello";
//     alert('hello');
//     console.log("Hello");
// })
// login.addEventListener('click', ()=>{
//     loginOverlay.style.display="block";
// })

bars.addEventListener("click", () =>{
    overlay.style.display = "block";
})
cancel.addEventListener('click', ()=>{
    overlay.style.display="none";
})


