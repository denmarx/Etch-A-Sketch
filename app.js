const wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute("id", "wrapper");
window.document.body.appendChild(wrapperDiv);

const button = document.createElement("button");
button.setAttribute("id", "reset-btn");
button.textContent = "Reset";
button.addEventListener("click", resetGrid);
wrapperDiv.appendChild(button);


let containerDiv;
let userInput;
containerDiv = document.createElement("div");
containerDiv.setAttribute("id", "container");
containerDiv.setAttribute("style", "display: grid; grid-template-columns: repeat(16, 1fr); width:960px; height: 960px;");
wrapperDiv.appendChild(containerDiv);

function generateSquares () {
   for (i=0; i<256; i++) {
     const square = document.createElement("div");
     square.style["border-style"] = "solid";
     square.style["border-color"] = "black";
     square.style["border-width"] = "1px";
     square.addEventListener("mouseover", changeColor);
     containerDiv.appendChild(square);
    }
  }

generateSquares();

function generateSquares2 () {
  for (i=0; i<(userInput * userInput); i++) {
    const square = document.createElement("div");
    square.style["border-style"] = "solid";
    square.style["border-color"] = "black";
    square.style["border-width"] = "1px";
    square.addEventListener("mouseover", changeColor);
    containerDiv.appendChild(square);
    }
  }

function changeColor (square) {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  square.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function resetGrid (button) {
  userInput = parseInt(prompt("How many squares would you like to generate?", "0"));
  if (userInput > 100 || userInput <= 0) {
    alert("Please enter a number between 1 and 100");
    resetGrid();
  } else { 
    containerDiv.parentNode.removeChild(containerDiv);
    containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "container2");
    containerDiv.setAttribute("style", `display: grid; grid-template-columns: repeat(${userInput}, 1fr); width:960px; height: 960px;`);
    wrapperDiv.appendChild(containerDiv);
    generateSquares2();
  }
}

