const stylesheet = document.querySelector("#matrixStylesheet");
const clearChoiceButton = document.querySelector('#clearChoice');
const pillChoice = localStorage.getItem("pill");
const slider = document.querySelector(".slider");
const button = document.querySelector(".button");
const hero = document.querySelector(".hero");
const nav = document.querySelector("nav");
const body = document.querySelector("body"); // actual body tag
const heroMessage = document.querySelector(".heroMessage");
let grids = document.querySelectorAll(".heroGrid");

let hamburger = document.querySelector("#hamburger");
let navList = document.querySelector(".nav-list");
let hamburgerState = "closed";


// red pill animation
var animation = anime.timeline({autoplay: false});
animation.add({
  targets: ".heroGrid",
  opacity: [0, 1],
  delay: anime.stagger(100),
  easing: "easeInQuad"
})
.add({
  targets: heroMessage,
  opacity: [0, 1],
  color: ['rgb(255, 255, 255)', 'rgb(0,0,0)'],
  easing: "easeInQuad",
}, '-=900')

let buttonState; // 


// media query for 768px
let mobileQuery = window.matchMedia("(max-width: 1024px)");
mobileQuery.addEventListener("change", (e) => {
  if (e.matches) {
    console.log("changed to mobile");
    navList.style.transform = "translateX(-100%)";
  } 
})

let desktopQuery = window.matchMedia("(min-width: 1025px)");
desktopQuery.addEventListener("change", (e) => {
  if (e.matches) {
    navList.style.transform = "translateX(0%)";
    hamburgerState = "closed";
  }
})


// listen for hamburger clicks
hamburger.addEventListener('click', (e) => {
  if (hamburgerState === "closed") {
    // then open the menu
    navList.style.transform = "translateX(0%)";
    hamburgerState = "open";
  } else {
    navList.style.transform = "translateX(-100%)";
    hamburgerState = "closed";
  }
})

if (pillChoice === 'red') {
  redPill();
} else if (pillChoice === 'blue') {
  bluePill();
} else {
  buttonState = 'blue'
  grids.forEach((grid) => {
    grid.style.opacity = 0;
  })
}


// want to reset the game
clearChoiceButton.addEventListener('click', (e) => {
  console.log("button clicked");
  localStorage.removeItem('pill');
  location.reload();
})

slider.addEventListener('click', (e) => {
  // change it to red
  if (buttonState === 'blue') {
    redPill();
  }
  // change it to blue 
  else if (buttonState == 'red') {
    bluePill();
  }
  
})


// anime js animations
function animations() {
  var t1 = anime.timeline({
    easing: 'easeOutQuad',
    // easing: 'easeOutElastic(1, .8)',
    duration: 750,
    delay: 200
  })


  t1.add({
    targets: [nav],
    opacity: [0,1],
    translateX: [-100, 0]
  })
  .add({
    targets: hero,
    opacity: [0,1],
    translateY: [75, 0]
  }, "-=500")
  .add({
    targets: document.querySelector(".heroMessage"),
    opacity: [0,1],
    color: "rgb(0,0,0)",
    translateX: [0, '-50%'],
    translateY: ['-50%','-50%'],
    duration: 1000,
    easing: "easeOutQuint"
  },'-=500')
  
  console.log("done");
}


// plays animation of the wake up neo sequence
function matrixApp() {
  const sentences = ["Wake up, Neo...", "The matrix has you...", "You take the blue pill, the story ends and you wake up in your bed and believe whatever you want to believe... You take the red pill you stay in wonderland and I show you how deep the rabbit hole goes\n\n"];
  const popup = document.querySelector(".matrixContainer");
  const website = document.querySelector(".body");
  // const body = document.querySelector("body"); // actual body tag
  const matrixText = document.querySelector(".text");
  const blinkingCursor = document.querySelector(".blinkingCursor");
  const userInputContainer = document.querySelector(".userInputMatrix");
  const matrixInput = document.querySelector(".matrixInput");
  const instructions = document.querySelector(".instructions");
  
  // check the pill choice
  if (pillChoice === 'red') {
    stylesheet.setAttribute('href', './public/matrix.css');
    document.querySelector('.matrixContainer').remove();
    return;
  } else if (pillChoice === "blue") {
    return;
  }

  // when the prompt is finished
  matrixInput.addEventListener("keydown", (e) => {
    if (matrixInput.textContent.length <= 11) {
      console.log(matrixInput.textContent.length);
      if (e.key === "Enter") {
        e.preventDefault();
        const data = validateChoice(matrixInput.textContent.trim());
        matrixInput.textContent = "";
        if (!data) {
          instructions.textContent = "Error: CommandNotFoundException (Enter 'Blue/'Red')";
        } else if (data === 'red') {
          document.querySelector('.matrixContainer').remove();
          website.classList.remove("collapse");
          redPill();
          localStorage.setItem('pill', 'red');
          
          
        } else if (data === 'blue') {
          document.querySelector('.matrixContainer').remove();
          slider.style.display = 'block';
          website.classList.remove('collapse');
          bluePill();        
          
          localStorage.setItem('pill', 'blue');
          
          body.style.overflow = "auto";
        }
      } else {
        return true;
      }
    } else {
      if (e.key === "Backspace") {
        return true;
      } else {
        e.preventDefault();
      }
    }
  })

  let delay = 7000 //5s

  // hide the website which shows the matrix popup in the background
  timeline(delay)
    .then((data) => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      website.classList.add("collapse");
      body.style.overflow = "hidden";
      console.log('outer settimeout');
    });

  // leave black for 3 seconds then start typing letters
  timeline(delay += 3000)
    .then(() => {
      // get array of delays for each typing of letter
      let delays = makeRandomDurations(sentences[0].length);
      num = 0
      for (let i = 0; i < sentences[0].length; i++) {
        setTimeout(() => {
          matrixText.textContent += sentences[0][i];
        }, num += (delays[i]*500))
      }
    })
    .then((data) => {
      console.log(data)
    })

  // the matrix has you (value is guess and checked since it has to wait for the set time outs from last timeline)
  timeline(delay += 7000)
    .then(() => {
      matrixText.textContent = "";
      // get array of delays for each typing of letter
      let delays = makeRandomDurations(sentences[1].length);
      num = 0
      for (let i = 0; i < sentences[1].length; i++) {
        setTimeout(() => {
          matrixText.textContent += sentences[1][i];
        }, num += (delays[i]*400))
      }
    })
      
  //show blue pill red pill choice text
  timeline(delay += 7000)
    .then(() => {
      matrixText.textContent = "";
      let delays = makeRandomDurations(sentences[2].length);
      num = 0
      for (let i = 0; i < sentences[2].length; i++) {
        setTimeout(() => {
          matrixText.textContent += sentences[2][i];
        }, num += (delays[i]*200))
      }
    })

  // show prompt
  timeline(delay += 24000)
  // timeline(delay += 1000)
    .then(() => {
      userInputContainer.style.display = "flex";
      instructions.style.display = "block";
      matrixInput.focus();
    })
}






animations();
matrixApp();


// gives us an array of random delays that are between .5s and .08s (length = sentenceLength)
function makeRandomDurations(sentenceLength) {
  const delays = []
  for (let i = 0; i<sentenceLength; i++) {
    while(true) {
      const rand = Math.random();
      if (rand <= .8 || rand >=.2) {
        delays.push(rand);
        break;
      }
    }
    const rand = Math.random();
    delays.push(rand);
  } 
  return delays;
}


function timeline(time) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
     return resolve();
    }, time)
  })
}

function validateChoice(choice) {
  choice = choice.toLowerCase();
  if (choice === 'blue') {
    return 'blue'
  }
  else if (choice === "red") {
    return 'red'
  } 
  else {
    return false;
  }
}


// changes the slider to red and sets the button at right position
function redPill() {
  heroMessage.style.opacity = 0;
  slider.style.backgroundColor = 'rgb(241, 33, 61)';
  button.style.transform = "translateX(75px) translateY(-50%)"
  stylesheet.setAttribute('href', './public/matrix.css');
  buttonState = 'red';

  animation.play();
}

// changes the slider to blue and sets the button at right position
function bluePill() {
  console.log("blue Pill")
  animation.restart();
  animation.pause();
  heroMessage.style.color = 'rgb(0,0,0)'; // having to restart the font color after the animation from redPill();
  heroMessage.style.opacity = 1; // can counter animate this
  console.log("paused");
  slider.style.backgroundColor = 'rgb(0, 222, 252)';
  button.style.transform = "translateX(0px) translateY(-50%)"
  stylesheet.setAttribute('href', '#');
  buttonState = 'blue';
  body.style.overflow = "auto";

  grids.forEach((grid) => {
    grid.style.opacity = 0;
  })
}

