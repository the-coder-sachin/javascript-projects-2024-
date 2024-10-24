// controls 
let fontSizeInput = document.querySelector('.font-size');
let horizontalInput = document.querySelector('.horizontal-offset');
let verticalInput = document.querySelector('.vertical-offset');
let blurInput = document.querySelector('.blur-intensity');
let shadowInput = document.querySelector('.shadow-input')
let boldInput = document.querySelector('.bold-input')
let italicInput = document.querySelector('.italic-input')
let underlineInput = document.querySelector('.underline-input')
let textColorInput = document.querySelector('.text-color')
let shadowColorInput = document.querySelector('.shadow-color')
let normalFontStyleInput = document.querySelector(".normal-font-style-input");
let cursiveFontStyleInput = document.querySelector(".cursive-font-style-input");

// display
let display = document.querySelector('.display');

// conditons
let isShadowEnabled = false;
let isBold = false;
let isItalic = false;
let isUnderline = false;
let isFontNormal = true;
let IsFontCursive = false;
let xOffSetVal = `5px`;
let yOffSetVal = `5px`;
let blurIntensity = `5px`;
let shadowClr = `#000`;

// default
normalFontStyleInput.checked = true;

fontSizeInput.addEventListener('input', e=>{
    let size = e.target.value;    
    display.style.fontSize = `${size}px`
    fontSizeInput.previousElementSibling.textContent = `Font Size(${size})`;
})

horizontalInput.addEventListener("input", (e) => {
  xOffSetVal = `${e.target.value}px`;
  isShadowEnabled = true;
  shadowInput.checked = true;
  display.style.textShadow = `${xOffSetVal} ${yOffSetVal} ${blurIntensity} ${shadowClr}`;
});

verticalInput.addEventListener("input", (e) => {
  yOffSetVal = `${e.target.value}px`;
  isShadowEnabled = true;
  shadowInput.checked = true;
  display.style.textShadow = `${xOffSetVal} ${yOffSetVal} ${blurIntensity} ${shadowClr}`;
});

blurInput.addEventListener("input", (e) => {
  blurIntensity = `${e.target.value}px`;
  isShadowEnabled = true;
  shadowInput.checked = true;
  display.style.textShadow = `${xOffSetVal} ${yOffSetVal} ${blurIntensity} ${shadowClr}`;
});

shadowInput.addEventListener('click', e=>{
     if(!isShadowEnabled){
        isShadowEnabled = true;
        display.style.textShadow = `5px 5px 5px #000`;
    }else{
        isShadowEnabled = false;
        display.style.textShadow = ``;
     }
})

boldInput.addEventListener('click', e=>{
    if(!isBold){
        isBold = true;
        display.style.fontWeight = `700`
    }else{
        isBold = false;
        display.style.fontWeight = '400'
    }
})

italicInput.addEventListener('click', e=>{
    if(!isItalic){
        isItalic = true;
        display.style.fontStyle = `italic`
    }else{
        isItalic = false;
        display.style.fontStyle = `normal`
    }
})

underlineInput.addEventListener('click', e=>{
    if(!isUnderline){
        isUnderline = true;
        display.style.textDecoration = `underline`
    }else{
        isUnderline = false;
        display.style.textDecoration = `none`;
    }
})

cursiveFontStyleInput.addEventListener('click', e=>{
    if(!IsFontCursive){
        IsFontCursive = true;
        isFontNormal = false;
        display.style.fontFamily = `dancing script`
        normalFontStyleInput.checked = false;
    }else{
        IsFontCursive = false;
        isFontNormal = true;
        display.style.fontFamily = `arial`
        normalFontStyleInput.checked = true;
    }
})

normalFontStyleInput.addEventListener('click', e=>{
    if(!isFontNormal){
        isFontNormal = true;
        IsFontCursive = false;
        display.style.fontFamily = `arial`
        cursiveFontStyleInput.checked = false
    }else{
        normalFontStyleInput.checked = true;
    }
})

textColorInput.addEventListener('input', e=>{
    let clr = e.target.value;
    display.style.color = `${clr}`
})

shadowColorInput.addEventListener('input', e=>{
    let clr = e.target.value;
    shadowClr = clr;
    isShadowEnabled = true;
    shadowInput.checked = true;
    display.style.textShadow = `${xOffSetVal} ${yOffSetVal} ${blurIntensity} ${clr}`
})

