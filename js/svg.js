// ------------
// Eye tracking
// ------------

const eyeRightPupil = document.querySelector('.Eyeball-R');
const eyeLeftPupil = document.querySelector('.Eyeball-L');
const eyeLeftInner = document.querySelector('.Eye-L');
const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
const xMovement = (innerEyeWidth - pupilWidth - 15)/2;
const yMovement = (innerEyeHeight - pupilHeight)/2;

//Entry Animation for Projects svg
const svgtween = gsap.timeline();

svgtween.set("#Me", {yPercent:200, opacity:0});
svgtween.to("#Me", {
  opacity: 1,
  ease: "elastic.out(0.3, 0.4)",
  yPercent: 0,
  duration: 1,
});

const svgcontroller = new ScrollMagic.Controller();
const scene2 = new ScrollMagic.Scene({
  triggerElement: ".projects",
  triggerHook: 0.3,
})
  .setTween(svgtween)
  .addTo(svgcontroller);

const contacttween = gsap.timeline();

//Entry Animation for Contact page
contacttween.set("#me", {yPercent:200, opacity:0});
contacttween.to("#me", {
  opacity: 1,
  ease: "elastic.out(0.3, 0.4)",
  yPercent: 0,
  duration: 1,
});

const contactcontroller = new ScrollMagic.Controller();
const scene3 = new ScrollMagic.Scene({
  triggerElement: ".contact",
  triggerHook: 0.3,
})
  .setTween(contacttween)
  .addTo(contactcontroller);

//Rotate Eye on mouse position
window.addEventListener('mousemove', updateEyePosition);

function updateEyePosition(event) {
  const posX = ((event.clientX / document.body.clientWidth) * 2 - 1) * xMovement;
  const posY = ((event.clientY / document.body.clientHeight) * 2 - 0.3) * yMovement;
  
  eyeLeftPupil.style.transform = `translate(${posX}px, ${posY}px)`;
  eyeRightPupil.style.transform = `translate(${posX}px, ${posY}px)`;
}

//-----------
// Blink Eyes
//-----------
setInterval(function(){
  document.querySelectorAll(".Eye").forEach(e=>{
    e.style.display = "none";
  }); 
 }, 5000);

setInterval(function(){
  document.querySelectorAll(".Eye").forEach(e=>{
    e.style.display = "block";
  }); 
 }, 600);
