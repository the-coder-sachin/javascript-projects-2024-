let display = document.querySelector("#display");
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let val = btn.getAttribute("value");
    if (val === "AC") {
      display.value = ``;
    } else if (val === "DEL") {
      clearLastDigit();
    } else if (val === "=") {
      evaluate();
    } else {
      appendToDisplay(val);
    }
  });
});

function clearLastDigit() {
  let str = display.value;
  display.value = str.slice(0, str.length - 1);
}
function evaluate() {
  let operators = ["+", "-", "*", "/", "%"];
  let lastChar = display.value[display.value.length - 1];
  if (display.value && !operators.includes(lastChar)) {
    display.value = eval(display.value);
  }
}

function appendToDisplay(val) {
  let lastChar = display.value[display.value.length - 1];
  let operators = ["+", "-", "*", "/", "%"];
  if (
    (operators.includes(val) && operators.includes(lastChar)) ||
    (!display.value && operators.includes(val))
  ) {
    return;
  }
  display.value = `${display.value}${val}`;
}

document.addEventListener("keydown", (e) => {
  let val = e.key;
  const validKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "%",
  ];
  if (validKeys.includes(val)) {
    appendToDisplay(val);
  } else if (val === "Enter") {
    evaluate();
  } else if (val === "Backspace") {
    clearLastDigit();
  } else if (val === " ") {
    display.value = "";
  } else {
    console.error(`error: invalid input`);
  }
});
