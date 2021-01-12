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

let buttonState;

if (pillChoice === 'red') {
  // slider.style.backgroundColor = "rgb(241, 33, 61)";
  // button.style.transform = "translateX(75px) translateY(-50%)"
  // buttonState = 'red'
  redPill();
} else if (pillChoice === 'blue') {
  // slider.style.backgroundColor = "rgb(0, 222, 252)";
  // button.style.transform = "translateX(0px) translateY(-50%)"
  // buttonState = 'blue'
  bluePill();
} else {
  buttonState = 'blue'
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
    translateX: [0, '-50%'],
    duration: 1000,
    easing: "easeOutQuint"
  },'-=500')
  
  console.log("done");
}


// plays animation of the wake up neo sequence
function matrixApp() {
  const sentences = ["Wake up, Neo...", "The matrix has you...", "You know something... What you know you can't explain but you feel it. You've felt it your entire life. That there's something wrong with the world, it is this feeling that has brought you to me.","You take the blue pill, the story ends and you wake up in your bed and believe whatever you want to believe... You take the red pill you stay in wonderland and I show you how deep the rabbit hole goes\n\n"];
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
          redPill();
          localStorage.setItem('pill', 'red');
          website.classList.remove("collapse");
          document.querySelector('.matrixContainer').remove();
        } else if (data === 'blue') {
          slider.style.display = 'block';
          bluePill();        
          localStorage.setItem('pill', 'blue');
          website.classList.remove('collapse');
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

  let delay = 5000 //5s

  // hide the website which shows the matrix popup in the background
  timeline(delay)
    .then((data) => {
      website.classList.add("collapse");
      body.style.overflow = "hidden";
      console.log('outer settimeout');
    });

  // leave black for 2 seconds then start typing letters
  timeline(delay += 2000)
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
  timeline(delay += 4000)
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
      
  timeline(delay += 7000)
    .then(() => {
      matrixText.textContent = "";
      let delays = makeRandomDurations(sentences[2].length);
      num = 0
      for (let i = 0; i < sentences[2].length; i++) {
        setTimeout(() => {
          matrixText.textContent += sentences[2][i];
        }, num += (delays[i]*300))
      }
    })

  timeline(delay += (sentences[2].length * .5 * 300))
    .then(() => {
      matrixText.textContent = "";
      let delays = makeRandomDurations(sentences[3].length);
      num = 0
      for (let i = 0; i < sentences[3].length; i++) {
        setTimeout(() => {
          matrixText.textContent += sentences[3][i];
        }, num += (delays[i]*300))
      }
    })

  timeline(delay += sentences[3].length * .5 * 300)
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
      if (rand <= .7) {
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
  slider.style.backgroundColor = 'rgb(241, 33, 61)';
  button.style.transform = "translateX(75px) translateY(-50%)"
  stylesheet.setAttribute('href', './public/matrix.css');
  buttonState = 'red';
  body.style.overflow = "auto"

  anime({
    targets: ".heroGrid",
    opacity: [0, 1],
    delay: anime.stagger(100),
    easing: "easeInQuad"
  })
  anime({
    targets: heroMessage,
    opacity: [0, 1],
    easing: "easeInQuad",
    delay: 750
  })
  anime({
    targets: heroMessage, 
    color: ["rgb(119, 250, 147)","rgb(0,0,0)"],
    easing: "easeInQuad",
    delay: 1000
  })
}

// changes the slider to blue and sets the button at right position
function bluePill() {
  slider.style.backgroundColor = 'rgb(0, 222, 252)';
  button.style.transform = "translateX(0px) translateY(-50%)"
  stylesheet.setAttribute('href', '#');
  buttonState = 'blue';
  body.style.overflow = "auto";

  grids.forEach((grid) => {
    grid.style.opacity = 0;
  })

  animations();
  // anime({
  //   targets: ".heroGrid",
  //   opacity: [1, 0],
  //   delay: anime.stagger(100),
  //   easing: "easeInQuad",
  //   duration: 800
  // })
}

