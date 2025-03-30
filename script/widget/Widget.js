/*
headng ,
button 
*/

function ElementCreate(elm ){
    return document.createElement(elm);
    
}

export function WHeading(title , stylesheet){
    let wHeading = ElementCreate("span");
    wHeading.innerText = title ==""? 'Hello': title;
    if (stylesheet== null){
        wHeading.style.color = 'white'
    }else{
        Object.keys(stylesheet).forEach((styleKey) => {
            wHeading.style[styleKey] = stylesheet[styleKey];
          });
        
    }
    return wHeading;
}


export function WButton(title , stylesheet , id , classname){
    let wButton = ElementCreate("button");
    wButton.innerText = title ==""? 'Hello': title;
    if (stylesheet== null){
        wButton.style.color = 'white'
    }else{
        Object.keys(stylesheet).forEach((styleKey) => {
            wButton.style[styleKey] = stylesheet[styleKey];
          });
        
    }
    return wButton;
}


export function WContainer(stylesheet , id){
    let wContainer = ElementCreate("div");
    wContainer.id = id == null ? 'wContainer':id;
    if (stylesheet== null){
        wContainer.style.border  = '1px solid red'
    }else{
        Object.keys(stylesheet).forEach((styleKey) => {
            wContainer.style[styleKey] = stylesheet[styleKey];
          });
        
    }
    return wContainer;
}


export class Widget{
     append = (elm , nodeElem)=>{
        return nodeElem.append(elm);
    }
}