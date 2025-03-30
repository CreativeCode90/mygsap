import gsap from "../script/gsap.js";
import SelectorAnimate from "../script/SelectorAnimate.js";
const Gsap = new gsap();
const selectAnimate = new SelectorAnimate();
// Gsap.to(".box3", {
//   x : 200,
//   y : 200,
//   scale : 2,
//   ease : 'linear',
//   easeTime : 0.3,
// });


// Gsap.from(".box3", {
//   x : 200,
//   y : 200,
//   scale : 2,
//   ease : 'linear',
//   easeTime : 0.3,
// });


Gsap.keyMapTo(".box3",{
  map : [
   {
    key : 1,
    x : 200,
    y : 200,
   },
   {
    key : 2,
    x : -200,
    y : 400,
    
    easeTime : 0.4,
   },
   {
    key : 3,
    ease : 'linear',
    easeTime : 0.4,
    x : 200,
    y : 200,
    scale : 2,
   },
  ]
})
// selectAnimate.startAnimate(false);
