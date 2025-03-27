export default class Element {
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
