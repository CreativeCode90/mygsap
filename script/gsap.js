import Propertys from "./Propertys.js";
// gsap.js
export default class gsap {
  element(e) {
    if (typeof e !== "string") return e; // If it's already a DOM element, return it

    if (e.startsWith(".")) {
      return document.querySelector(e); // Select by class
    } else if (e.startsWith("#")) {
      return document.getElementById(e.substring(1)); // Select by ID (removing '#')
    } else {
      return document.getElementsByTagName(e); // Select by tag name
    }
  }
  to(element, styleObject) {
    let el = this.element(element);
    let applyAnimation = () => {
      // one time animation
      setTimeout(() => {
        Object.keys(styleObject).forEach((key) => {
         el.style[key] = styleObject[key];
        });
        el.style.transition = "0.3s linear";
        // Update transformation properties
        Propertys.y =
          styleObject.y !== undefined ? `translateY(${styleObject.y}px)` : "";
        Propertys.x =
          styleObject.x !== undefined ? `translateX(${styleObject.x}px)` : "";
        Propertys.rotate =
          styleObject.rotate !== undefined
            ? `rotate(${styleObject.rotate}deg)`
            : "";
        el.style.transform =
          `${Propertys.y} ${Propertys.x} ${Propertys.rotate}`.trim();
      }, styleObject.duration);
    };
    applyAnimation(); // Run the first time
  }
  from(element, styleObject) {
    let el = this.element(element);
    let fromanimation = setTimeout(() => {
      Object.keys(styleObject).forEach((key) => {
        el.style[key] = styleObject[key];
      });
      // Update transformation properties
      Propertys.y =
        styleObject.y !== undefined ? `translateY(${styleObject.y}px)` : "";
      Propertys.x =
        styleObject.x !== undefined ? `translateX(${styleObject.x}px)` : "";
      Propertys.rotate =
        styleObject.rotate !== undefined
          ? `rotate(${styleObject.rotate}deg)`
          : "";
      el.style.transform =
        `${Propertys.y} ${Propertys.x} ${Propertys.rotate}`.trim();
    }, 0);

    if (styleObject.duration) {
      setTimeout(() => {
        Object.keys(styleObject).forEach((key) => {
          el.style[key] = "";
        });
        el.style.transition = "0.3s linear";
        el.style.transform = "";
      }, styleObject.duration);
    } else {
      setTimeout(() => {
        Object.keys(styleObject).forEach((key) => {
          element.style[key] = "";
          element.style.transition = "0.3s linear";
        });
      }, 1000);
    }
  }
}
