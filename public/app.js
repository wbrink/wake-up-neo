
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
  }, 5000)



  // const typing = () => {
  //   for (let i = 0, i<sentences[0].length)  
  // }

}


app();



