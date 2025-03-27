import Element from "./Element.js";
import SelectionBar from "./SelectionBar.js";
const elm = new Element();
const selection = new SelectionBar();
export default class SelectorAnimate{
    startAnimate (e , start= false  ){
        let element = elm.element(e);
        selection.selectionBar(start);
    }
}