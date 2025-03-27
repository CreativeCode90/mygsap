/*
headng ,
button 
*/

function ElementCreate(elm ){
    return document.createElement(elm);
    
}

export function WHeading(nodeElm , title){
    let wHeading = ElementCreate("span");
    wHeading.innerText = title ==""? 'Hello': title;
    wHeading.style.color = 'white';
    nodeElm.append(wHeading);
    return wHeading;
}

