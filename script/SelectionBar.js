import { WButton, WContainer, WHeading, Widget } from "./widget/Widget.js";

const widget = new Widget();

export default class SelectionBar {
  constructor() {
    this.selectionBar();
  }

  selectionBar(start) {
    const body = document.body;
    const _MainselectionContaine = WContainer(
      {
        position: "fixed",
        right: "10px",
        bottom: "10px",
        width: "auto",
        padding: "10px",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row-reverse",
        cursor: "pointer",
      },
      "selectoranimatecontainer"
    );
    const selectionContaine = WContainer(
      {
        padding: "8px 12px",
      },
      "selectionbar"
    );
    widget.append(selectionContaine, _MainselectionContaine);
    const headng = WHeading("Selector bar", {
      color: "white",
      fontSize: "2rem",
    });
    widget.append(headng, selectionContaine);
    // add click event
    selectionContaine.addEventListener("click", () => {
      document.body.style.cursor = "crosshair";
      const close = WButton("Stop", {
        backgroundColor: "transparent",
        border: "none",
        color: "white",
        fontSize: "1.5rem",
        marginRight: "1rem",
        backgroundColor: "crimson",
        padding: "4px 7px 5px",
      });
      widget.append(close, _MainselectionContaine);
      body.addEventListener("click", DetectionAnimateElement, true);
      // close animation selection
      close.addEventListener("click", () => {
        body.removeEventListener("click", DetectionAnimateElement);
      });
    });
    const DetectionAnimateElement = (e) => {
      if (e.target.id !== "selectoranimatecontainer") {
        // document.body.removeEventListener("click", DetectionAnimateElement, true);
        console.log(e.target);
      }
    };

    if (start) {
      // document.body.append(_MainselectionContaine); // Append to body
      widget.append(_MainselectionContaine, body);
    }
  }
}
