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

// add event listener to make bus drive off page on mouse wheel scroll
busLogo.addEventListener("wheel", () => {
    busLogo.setAttribute("style", "transform: translateX(2000px); transition: all 2s;");
});

//-------------------- END WHEEL SCROLL ANIMATION ----------------------//




//--------------- START IMAGE FLIP DOUBLE CLICK ANIMATION ---------------//

//grab boat image
const boatImg = document.querySelector(".content-destination img");

//add double click event listener to make image flip on double click
boatImg.addEventListener("dblclick", () => {
    boatImg.setAttribute("style", "transform: rotateY(360deg); transition: all 2s;");
});

//---------------- END IMAGE FLIP DOUBLE CLICK ANIMATION ----------------//




//-------------------- START IMAGE ROTATE ANIMATION ---------------------//

//grab first info img
const infoImg = document.querySelector(".img-content img");

//add even listener to rotate image on mouseover
infoImg.addEventListener("mouseover", () => {
    infoImg.setAttribute("style", "transform: rotate(360deg); transition: all 2s");
});

//-------------------- END IMAGE ROTATE ANIMATION ---------------------//




// -------------------- START MAGNIFY ANIMATION ------------------------//

//grab fun bus header paragraph
const funBusHead = document.querySelector(".intro p");

//add event listener to magnify text on drag
funBusHead.addEventListener("drag", () => {
    funBusHead.style.fontSize = "60px";
});

//--------------------- END MAGNIFY ANIMATION ------------------------//




//--------------- START DISAPPEARING BUTTON ANIMATION -----------------//

//grab fun in the sun button
const funSunBtn = document.querySelector(".destination .btn");

//grab fun in the sun container
const funSunHead = document.querySelector(".destination");

//create new message, hide it, and append it to fun in the sun
const sike = document.createElement("h4");
sike.textContent = "SIKE!";
sike.style.display = "none";
sike.style.fontSize = "30px";
funSunHead.append(sike);

//add event listener to make button dissapear on click and make message take it's place
funSunBtn.addEventListener("click", () => {
    funSunBtn.style.display = "none";
    sike.style.display = "inline";
});

//--------------- END DISAPPEARING BUTTON ANIMATION -----------------//




//---------------- START IMAGE FLY AWAY ANIMATION --------------------//

//make node list out of both info images
const infoImgs = document.querySelectorAll(".content-section img");

//add event listener on second image since first already has animation
//image will fly away diagonally after mouse out
infoImgs[1].addEventListener("mouseout", () => {
    infoImgs[1].setAttribute("style", "transform: translate(-1000px, -2000px); transition: all 2s;");
})

//---------------- END IMAGE FLY AWAY ANIMATION --------------------//




//---------------- START FADING BUTTON ANIMATION --------------------//

//node list out of all info buttons
const infoBtns = document.querySelectorAll(".btn");

//add event listener to second button since first already has animation
//button will fade off screen when clicked
infoBtns[1].addEventListener("click", () => {
    infoBtns[1].style.opacity = "0";
    infoBtns[1].style.transition = "opacity .25s ease-in-out";
})

//---------------- END FADING BUTTON ANIMATION --------------------//




//-------------- START EXPANDING BUTTON ANIMATION ------------------//

//add event listener to last button in node list
//button will expand everything else off the page
infoBtns[2].addEventListener("click", () => {
    infoBtns[2].setAttribute("style", "height: 100vh; width: 100vw; transform: translate(-1110px, -800px); transition: all 5s;");
});

//-------------- END EXPANDING BUTTON ANIMATION ------------------//



//-------------- DISAPPEARING PARAGRAPHS ON COPY ------------------//

//create node list for all containers
const allContainers = document.querySelectorAll("header, .container, .footer");

//create node list for all text on page
const allText = document.querySelectorAll("p");

//event listener for any p tag
allText.forEach(paragraph => (
    paragraph.addEventListener("copy", () => {
        paragraph.style.display = "none";
    })
))

//------------- END DISAPPEARING PARAGRAPHS ON COPY ---------------//