// DARK AND LIGHT MODE TOGGLE
const navBar = document.querySelector('nav');

// create dark mode button and append to nav bar
const darkBtn = document.createElement("button");
darkBtn.textContent = "Dark Mode";
darkBtn.id = "darkModeBtn";
navBar.append(darkBtn);
darkBtn.style.backgroundColor = "white";
darkBtn.style.border = "1px solid black";

// create light mode button and append to nav bar
const lightModeBtn = document.createElement("button");
lightModeBtn.textContent = "Light Mode";
lightModeBtn.id = "lightModeBtn";
navBar.append(lightModeBtn);
lightModeBtn.style.display = "none";
lightModeBtn.style.color = "yellow";
lightModeBtn.style.backgroundColor = "black";
lightModeBtn.style.border = "1px solid yellow";

// node list for tags and classes targeted but light mode and dark mode
let tags = document.querySelectorAll(".btn, a, h1, h4, p");

// event listener for dark mode on click of button
darkBtn.addEventListener("click", darkMode);
function darkMode () {
  document.getElementsByTagName("body")[0].style.backgroundColor = 'black';
  document.getElementsByTagName("header")[0].style.backgroundColor = 'black';
  document.getElementsByTagName("footer")[0].style.backgroundColor = 'black';
  tags.forEach(tag => {
    tag.style.color = "yellow";
  });
  // hide dark mode button and show light mode button on click
  document.getElementById("darkModeBtn").style.display = "none";
  document.getElementById("lightModeBtn").style.display = "inline";
};

// event listener for light mode on click of button
lightModeBtn.addEventListener("click", lightMode);
function lightMode () {
  document.getElementsByTagName("body")[0].style.backgroundColor = 'white';
  document.getElementsByTagName("header")[0].style.backgroundColor = 'white';
  document.getElementsByTagName("footer")[0].style.backgroundColor = 'white';
  tags.forEach(tag => {
    tag.style.color = "black";
  });
  // hide light mode button and show dark mode button on click
  document.getElementById("darkModeBtn").style.display = "inline";
  document.getElementById("lightModeBtn").style.display = "none";
};