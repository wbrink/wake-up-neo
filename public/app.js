
const app = () => {
  const sentences = ["Wake up, Neo...", "The matrix has you...", "Let me tell you why your here. You know something... you've felt it your entire life. Sluggish animations, unecessary loading screens, slow FCP these issues have brought you here to me. It is the world that has been pulled over your eyes. ","You take the blue pill, the story ends and you wake up in your bed and see the web how they want you to see it... You take the red pill you stay in wonderland and I show you how the web was supposed to be... \n\nEnter blue/red"];
  const popup = document.querySelector(".matrixContainer");
  const website = document.querySelector(".body");
  const body = document.querySelector("body"); // actual body tag
  const matrixText = document.querySelector(".text");
  const blinkingCursor = document.querySelector(".blinkingCursor");
  const userInputMatrix = document.querySelector(".userInputMatrix");
  const matrixInput = document.querySelector(".matrixInput");

  
  // setTimeout(() => {
  //   website.classList.add("collapse");
  //   body.style.overflow = "hidden";
  //   console.log('outer settimeout');

  //   // delay on black screen
  //   setTimeout(() => {
  //     // get array of delays for each typing of letter
  //     let delays = makeRandomDurations(sentences[0].length);
  //     num = 0
  //     for (let i = 0; i < sentences[0].length; i++) {
  //       console.log("done", i);
  //       setTimeout(() => {
  //         matrixText.textContent += sentences[0][i];
  //       }, num += (delays[i]*700))
  //     }
  //   },2000)

    
    
  // }, 5000)

  let delay = 5000 //5s

  // hide the website which shows the matrix popup in the background
  timeline(delay)
    .then((data) => {
      website.classList.add("collapse");
      body.style.overflow = "hidden";
      console.log('outer settimeout');
    });

  // // leave black for 2 seconds then start typing letters
  // timeline(delay += 2000)
  //   .then(() => {
  //     // get array of delays for each typing of letter
  //     let delays = makeRandomDurations(sentences[0].length);
  //     num = 0
  //     for (let i = 0; i < sentences[0].length; i++) {
  //       setTimeout(() => {
  //         matrixText.textContent += sentences[0][i];
  //       }, num += (delays[i]*500))
  //     }
  //   })
  //   .then((data) => {
  //     console.log(data)
  //   })

  // // the matrix has you (value is guess and checked since it has to wait for the set time outs from last timeline)
  // timeline(delay += 5000)
  //   .then(() => {
  //     matrixText.textContent = "";
  //     // get array of delays for each typing of letter
  //     let delays = makeRandomDurations(sentences[1].length);
  //     num = 0
  //     for (let i = 0; i < sentences[1].length; i++) {
  //       setTimeout(() => {
  //         matrixText.textContent += sentences[1][i];
  //       }, num += (delays[i]*500))
  //     }
  //   })
      
  // timeline(delay += 7000)
  //   .then(() => {
  //     matrixText.textContent = "";
  //     let delays = makeRandomDurations(sentences[2].length);
  //     num = 0
  //     for (let i = 0; i < sentences[2].length; i++) {
  //       setTimeout(() => {
  //         matrixText.textContent += sentences[2][i];
  //       }, num += (delays[i]*300))
  //     }
  //   })

  // timeline(delay += (sentences[2].length * .5 * 300))
  //   .then(() => {
  //     matrixText.textContent = "";
  //     let delays = makeRandomDurations(sentences[3].length);
  //     num = 0
  //     for (let i = 0; i < sentences[3].length; i++) {
  //       setTimeout(() => {
  //         matrixText.textContent += sentences[3][i];
  //       }, num += (delays[i]*300))
  //     }
  //   })

    // this function will display the prompt
  timeline(delay += 2000)
    .then(() => {
      userInputMatrix.style.display = "flex";
      matrixInput.focus();
    })
}


app();


// gives us an array of random delays that are between .5s and .08s (length = sentenceLength)
function makeRandomDurations(sentenceLength) {
  const delays = []
  for (let i = 0; i<sentenceLength; i++) {
    while(true) {
      const rand = Math.random();
      if (rand <= .5 && rand >= .08 ) {
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

