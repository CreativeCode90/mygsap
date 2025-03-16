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
// let heading1 = document.querySelector(".heading1");

// let box = document.querySelector(".box");
// a.to(heading, {
//   color: "red",
//   // y : 100,
//   backgroundColor: "none",
//   duration: 1000,
// });
// a.to(box , {
//   backgroundColor : 'pink',
//   duration : 1000,
//   x : 300,
//   y : 20,
//   scale : 1.2,
//   rotate : 360,
// })
// a.from(heading1, {
//   color: "green",
// //   scale: 1.2,
//   backgroundColor : 'green',
//   fontSize : '70px',
//   duration: 2000,
//   y : 200,
// });



// let box = document.querySelector(".box");
// a.to(box , {
//   x : -500,
//   rotate : 180,
//   y : 100,
//   duration : 1000,
//   // repeat : true,
//   backgroundColor : 'green',
//   borderRadius : '50%',
// })

// a.from(heading , {
//   scale : 1.2,
//   color : 'red',
//   duration : 2000,
// })




let box1 = document.querySelector(".box");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");


// a.to(box3,{
//   x : 800,
//   y : 20,
//   duration : 1000,
// })
// a.to(box2,{
//   x : 800,
// y : -20,
//   duration : 2000,
// })
// a.to(box1,{
//   x : 800,
//   y : 20,
//   duration : 3000,
// })



a.to(".box",{
  x : 800,
  y : 20,
  duration : 1000,
})
a.to(".box2",{
  x : 800,
y : -20,
  duration : 2000,
})
a.to(".box3",{
  x : 800,
  y : 20,
  duration : 3000,
})



// let b = document.querySelectorAll('.b');

// a.to(b , {
//   x : 200,
// })

// a.element(".box");