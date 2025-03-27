import { WHeading } from "./widget/Widget.js";

const selectionStyleObject = {
    position: 'fixed',
    right: '10px',
    bottom: '10px',
    width: 'auto',
    padding : '8px 12px',
    height: '80px',
    backgroundColor: 'rgb(14, 13, 13)',
    color: 'white',
    display :'flex',
    alignItems : 'center',
    justifyContent : 'center',
    fontSize : '24px',
    borderRadius : '10px',
    border : '.2px solid rgba(255, 255, 255, 0.322)',
    cursor: 'pointer',

};

export default class SelectionBar {
    constructor() {
        this.selectionBar();
    }

    selectionBar(start) {
        const selectionContainer = document.createElement("div");
        WHeading(selectionContainer , "Selector bar");

        // add click event 
        selectionContainer.addEventListener("click",()=>{
            document.body.style.cursor =  'crosshair'
            selectionContainer.append(closeanimate);
        })
        for (const key in selectionStyleObject) {
            selectionContainer.style[key] = selectionStyleObject[key];
        }
        if (start){
            document.body.appendChild(selectionContainer); // Append to body
        }
    }
}
