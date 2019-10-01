//---------------- START DARK AND LIGHT MODE TOGGLE SECTION ----------------//

// create navBar variable to append buttons to
const navBar = document.querySelector('nav');

// create dark mode button, style it, and append to nav bar
const Mode = document.createElement("button");
Mode.textContent = "Dark Mode";
Mode.id = "darkModeBtn";
navBar.append(Mode);
Mode.style.backgroundColor = "white";
Mode.style.border = "1px solid black";

// create light mode button, style it, and append to nav bar
const lightModeBtn = document.createElement("button");
lightModeBtn.textContent = "Light Mode";
lightModeBtn.id = "lightModeBtn";
navBar.append(lightModeBtn);
lightModeBtn.setAttribute("style", "display: none; color: yellow; background: black; border: 1px solid yellow;");

// node list for tags and classes targeted by light mode and dark mode, to be used in event listeners below
const tags = document.querySelectorAll(".btn, a, h1, h2, h4, p");

// variable for body tag, used in dark/light mode and wheel scroll animation
const bodyTag = document.getElementsByTagName("body");

// event listener for dark mode on click of Mode
darkModeBtn.addEventListener("click", darkMode);
function darkMode () {
  // change backgrounds to black
  bodyTag[0].style.backgroundColor = 'black';
  document.getElementsByTagName("header")[0].style.backgroundColor = 'black';
  document.getElementsByTagName("footer")[0].style.backgroundColor = 'black';
  tags.forEach(tag => {
    tag.style.color = "yellow";
  });
  // hide dark mode button and show light mode button
  document.getElementById("darkModeBtn").style.display = "none";
  document.getElementById("lightModeBtn").style.display = "inline";
};

// event listener for light mode on click of lightModeBtn
lightModeBtn.addEventListener("click", lightMode);
function lightMode () {
  // change backgrounds to white
  document.getElementsByTagName("body")[0].style.backgroundColor = 'white';
  document.getElementsByTagName("header")[0].style.backgroundColor = 'white';
  document.getElementsByTagName("footer")[0].style.backgroundColor = 'white';
  tags.forEach(tag => {
    tag.style.color = "black";
  });
  // hide light mode button and show dark mode button
  document.getElementById("darkModeBtn").style.display = "inline";
  document.getElementById("lightModeBtn").style.display = "none";
};

//---------------- END DARK AND LIGHT MODE TOGGLE SECTION ----------------//




//-------------------- START WHEEL SCROLL ANIMATION ----------------------//

// grab bus logo
const busLogo = document.querySelector(".home img");

// add event listener to make bus drive off page
busLogo.addEventListener("wheel", () => {
    busLogo.setAttribute("style", "transform: translateX(2000px); transition: all 2s;");
});

//-------------------- END WHEEL SCROLL ANIMATION ----------------------//




