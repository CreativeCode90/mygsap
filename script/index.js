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
// let heading = document.querySelector(".heading");
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

// a.from(".box", {
//   x: 800,
//   y: 50,
//   duration: 600,
//   rotate  : 360,
//   backgroundColor : 'orange',
// });
// a.from(".box2", {
//   x: 800,
//   y: -80,
//   duration: 1200,
//   borderRadius : "20px",
//   rotate : 180,
//   backgroundColor : 'pink',
// });
// a.from(".box3", {
//   x: 800,
//   y: 60,
//   duration: 1800,
//   rotate : 90,
//   backgroundColor : 'green',
// });
// a.from(".box h1", {
//   color: "black",
//   duration: 1800,
// });

// let b = document.querySelectorAll('.b');

// a.to(b , {
//   x : 200,
// })

// a.element(".box");

// stagger
/*

*/

const Gsap = new gsap();

// Gsap.keyMapTo(".box", {
//   map: [
//     {
//       key : 1,
//       x: 50,
//       y : -50,
//     },
//     {
//       key : 2,
//       x: 100,
//       y: 50,
//       opacity : 0,
//     },
//     {
//       key : 3,
//       x: 150,
//       y: -100,
//       opacity : 1,
//     },
//     {
//       key : 4,
//       x: 200,
//       y: 100,
//     },
//     {
//       key : 5,
//       width : '100vw',
//       height : '100vh',
//       x: 0,
//       y: 0,
//       onEnter : ()=>{
//         document.querySelector(".box2").style.display = "flex";

//       }
//     },
//   ],
// });

// Gsap.keyMapTo(".h1", {
//   map: [
//     // {
//     //   y: -100,
//     //   opacity: 0,
//     // },
//     {
//       y: 100,
//       letterSpacing: "50px",
//       opacity: 1,
//       TextHover : Gsap.OnEachTextHover(".h1",{
//         color : 'rgba(255, 254, 236, 0.517)',
//         fontSize : '150px',
//       })
//     },
//   ],
// });


// Gsap.to('.h1',{
//   TextHover : Gsap.OnEachTextHover(".h1",{
//     color : 'red',
//     fontSize : '110px',
//     ease : "ease-in",
//     duration : 0.1,
//   })
// })
Gsap.to('.h1',{
  Hover : Gsap.OnTextHover(".h1",{
    color : 'red',
    fontSize : '110px',
    ease : "ease-in-out",
    duration : 3,
  })
})