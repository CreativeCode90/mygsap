class Element {
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
}

const elm = new Element();
const Propertys = {
  duration : 0,
  y : 0,
  x : 0,
  rotate : 0,
  repeat : false,
  ease : null,
}

// gsap.js
export default class gsap {
  Ease = {
    ease: (el, val, time) => {
      if (val === "ease") {
        el.style.transition = `${time}s ease`;
      }
      if (val === "linear") {
        el.style.transition = `${time}s linear`;
      }
      if (val === "ease-in") {
        el.style.transition = `${time}s ease-in`;
      }
      if (val === "ease-out") {
        el.style.transition = `${time}s ease-out`;
      }
      if (val === "ease-in-out") {
        el.style.transition = `${time}s ease-in-out`;
      }
    },
  };
  to(element, styleObject) {
    let el = elm.element(element);

    let applyAnimation = () => {
      setTimeout(() => {
        Object.keys(styleObject).forEach((key) => {
          el.style[key] = styleObject[key];
          el.style.transition = '0.3s ease'
        });
        this.Ease.ease(el, styleObject.ease, styleObject.easeTime);

        // Update transformation properties
        let y =
          styleObject.y !== undefined ? `translateY(${styleObject.y}px)` : "";
        let x =
          styleObject.x !== undefined ? `translateX(${styleObject.x}px)` : "";
        let rotate =
          styleObject.rotate !== undefined
            ? `rotate(${styleObject.rotate}deg)`
            : "";

        el.style.transform = `${y} ${x} ${rotate}`.trim();
      }, styleObject.duration);
    };

    // Immediate start
    applyAnimation();
    // scrollTrigger action 
    let count = 0;
// repeat
    if(styleObject.rp == true){
      let interval = setInterval(() => {
        el.style = "";
        applyAnimation();
        count++;
        if (styleObject.repeat !== -1 && count >= styleObject.repeat) {
          clearInterval(interval);
        }
      }, 1000);
    }

    
  }
  from(element, styleObject) {
    let el = elm.element(element);
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
          el.style.transition = "0.3s ease";
        });
        this.Ease.ease(el, styleObject.ease, styleObject.easeTime);
        el.style.transform = "";
      }, styleObject.duration);
    } else {
      setTimeout(() => {
        Object.keys(styleObject).forEach((key) => {
          el.style[key] = "";
          el.style.transition = "0.3s linear";
        });
      }, 1000);
    }
  }
  // keymap to
  keyMapTo(element, MapstyleObject) {
    let el = elm.element(element);
    if (!el) {
      console.error("Element not found:", element);
      return;
    }

    let index = 0; // Start from the first keyframe

    let applyAnimation = () => {
      if (index >= MapstyleObject.map.length) return; // Stop when all keyframes are done
      let keyframe = MapstyleObject.map[index];
      // console.log("Applying keyframe:", keyframe);
      setTimeout(() => {
        Object.keys(keyframe).forEach((key) => {
          if (key !== "key") {
            el.style[key] = keyframe[key];
            el.style.transition = "0.3s ease";
          }
          this.Ease.ease(el, keyframe.ease, keyframe.easeTime);
        });
        // Construct transform properties
        let transformValues = [
          keyframe.y !== undefined ? `translateY(${keyframe.y}px)` : "",
          keyframe.x !== undefined ? `translateX(${keyframe.x}px)` : "",
          keyframe.rotate !== undefined ? `rotate(${keyframe.rotate}deg)` : "",
        ]
          .filter(Boolean)
          .join(" "); // Remove empty values and join

        if (transformValues) {
          el.style.transform = transformValues;
        }

        if (keyframe.onEnter) {
          el.addEventListener("mouseenter", keyframe.onEnter);
        }
      }, 500); // Delay before applying styles
      index++; // Move to the next keyframe

      // Schedule the next keyframe
      if (index < MapstyleObject.map.length) {
        setTimeout(applyAnimation, 1000); // Wait before next animation
      }
    };

    applyAnimation(); // Start animation
  }
  // gsap events
  OnHover(element, styleObject) {
    let el = elm.element(element);
    // el.style[key] = styleObject[key];
    el.addEventListener("mouseenter", () => {
      Object.keys(styleObject).forEach((key) => {
        el.style[key] = styleObject[key];
        this.Ease.ease(el, styleObject.ease, styleObject.easeTime);
      });
    });
    el.addEventListener("mouseleave", () => {
      Object.keys(styleObject).forEach((key) => {
        el.style[key] = "";
        el.style.transition = "0.3s linear";
      });
    });
  }
  OnEachTextHover(element, styleObject) {
    let el = elm.element(element);
    let text = el.innerText;

    // Wrap each letter in a span
    el.innerHTML = "";
    text.split("").forEach((char, index) => {
      let span = document.createElement("span");
      span.innerText = char;
      span.style.display = "inline-block";
      el.appendChild(span);

      // Apply hover effect
      span.addEventListener("mouseenter", () => {
        Object.keys(styleObject).forEach((key) => {
          span.style[key] = styleObject[key];
          this.Ease.ease(el, styleObject.ease, styleObject.easeTime);
        });
      });

      span.addEventListener("mouseleave", () => {
        Object.keys(styleObject).forEach((key) => {
          span.style[key] = ""; // Reset styles on mouse leave
        });
      });
    });
  }

}
