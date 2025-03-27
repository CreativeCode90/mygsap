import gsap from "../script/gsap.js";
import SelectorAnimate from "../script/SelectorAnimate.js";
const Gsap = new gsap();
const selectAnimate = new SelectorAnimate();
Gsap.to(".box1", {
  y: 300,
  ease: "linear",
  scale : 2,
  easeTime: 0.2,
});
Gsap.to(".box2", {
  y: 125,
  ease: "linear",
  easeTime: 0.2,
});

selectAnimate.startAnimate(".box1", true);
