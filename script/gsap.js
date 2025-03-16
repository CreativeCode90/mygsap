import Propertys from "./Propertys.js";
// gsap.js
export default class gsap {
  Ease = {
  ease : (el , val, duration)=>{
    if(val === "ease"){
      el.style.transition = `${duration}s ease`;
    }
    if(val === "linear"){
      el.style.transition = `${duration}s linear`;
    }
    if(val === "ease-in"){
      el.style.transition = `${duration}s ease-in`;
    }
    if(val === "ease-out"){
      el.style.transition = `${duration}s ease-out`;
    }
    if(val === "ease-in-out"){
      el.style.transition = `${duration}s ease-in-out`;
    }
  }   
  }
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
  // keymap to
  keyMapTo(element, MapstyleObject) {
    let el = this.element(element);
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
          }
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

        el.style.transition = "0.5s ease-in-out";
        if (keyframe.onEnter) {
          el.addEventListener("mouseenter", keyframe.onEnter);
        }
         // Apply hover effect if defined
         if (currentFrame.TextHover) {
          currentFrame.TextHover();
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
  OnTextHover(element, styleObject) {
    let el = this.element(element);
    // el.style[key] = styleObject[key];
    el.addEventListener("mouseenter", () => {
      Object.keys(styleObject).forEach((key) => {
        el.style[key] = styleObject[key];
        el.style.transition = "0.3s linear";
        Propertys.ease = styleObject.ease;
        this.Ease.ease(el , Propertys.ease , styleObject.duration);
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
    let el = this.element(element);
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
          Propertys.ease = styleObject.ease;
          this.Ease.ease(span , Propertys.ease , styleObject.duration);

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
