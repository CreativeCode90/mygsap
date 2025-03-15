/*
 -> initial to fiinal
  -> 0 to 100
gsap.to("element name , class , id", {
//main body object
})
final to initial
-> 100 to 0 -> revercing
gsap.from("element name , class , id", {
//main body object
})
gsap -> object . from , to -> method
to , from take only 2 arguments 
1-> which element
2-> A object and withing this object give some styleing method
*/
import gsap from "./gsap.js";

let a = new gsap();
let heading = document.querySelector(".heading");
let heading1 = document.querySelector(".heading1");

a.to(heading, {
  color: "red",
  backgroundColor: "none",
  duration: 1000,
  fontSize : '30px',
});
a.from(heading1, {
  color: "green",
//   scale: 1.2,
  backgroundColor : 'green',
  fontSize : '70px',
  duration: 2000,
  y : 200,
});
