// gsap.js
export default class gsap {

  to(element, styleObject) {
    setTimeout(() => {
      Object.keys(styleObject).forEach((key) => {
        element.style[key] = styleObject[key];
      });
      element.style.transition = '0.3s linear'
      
    }, styleObject.duration);
  };
  from(element, styleObject) {
    let durationMs =(styleObject.duration || 0) * 1000;
    // tranform location
    let topY = `translateY(${styleObject.y}px)`;

    
    let fromanimation =setTimeout(() => {
      Object.keys(styleObject).forEach((key) => {
        element.style[key] = styleObject[key];
      });
      element.style.transform = topY;
      
    }, 0);

    if(styleObject.duration){
      setTimeout(() => {
        Object.keys(styleObject).forEach((key) => {
          element.style[key] = "";
        });
        element.style.transition = '0.3s linear';
        element.style.transform = "";
      }, styleObject.duration);
    }else{
      setTimeout(() => {
        Object.keys(styleObject).forEach((key) => {
          element.style[key] = "";
          element.style.transition = '0.3s linear';
        });
        
      }, 1000);
    }
    
  }
}
