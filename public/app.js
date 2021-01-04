
const app = () => {
  const sentences = ["Wake up, Neo..."];
  const popup = document.querySelector(".matrixContainer");
  const website = document.querySelector(".body");
  const body = document.querySelector("body"); // actual body tag
  const matrixText = document.querySelector(".text");


  // hide the website which shows the matrix popup in the background
  setTimeout(() => {
    website.classList.add("collapse");
    body.style.overflow = "hidden";
    console.log('outer settimeout');

    // delay on black screen
    setTimeout(() => {
      // get array of delays for each typing of letter
      let delays = makeRandomDurations(sentences[0].length);
      num = 0
      for (let i = 0; i < sentences[0].length; i++) {
        console.log("done", i);
        setTimeout(() => {
          matrixText.textContent += sentences[0][i];
        }, num += (delays[i]*700))
      }
    },2000)

    
    
  }, 5000)
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


