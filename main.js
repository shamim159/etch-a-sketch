//button to add more squares
const buttonContainer = document.querySelector("#buttonContainer")
const customButton = document.createElement("button")
customButton.textContent = "New Grid"
buttonContainer.appendChild(customButton);
//main div container
const divContainer = document.querySelector("#container");


//button function
customButton.addEventListener("click", changeSize);

function changeSize(){
  prompt("how many boxes per side");
}

//little divs
for (let i = 0; i <272; i++) {// added extra as grid was uneven
  const div = document.createElement("div");
  divContainer.appendChild(div);
  
  div.addEventListener("mouseenter", mouseEnter);
  
  function mouseEnter(){
    div.style.backgroundColor = "red";
  }
}


