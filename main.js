

// Structuring the page
const thisBody = document.getElementById('this-body');
const thisText = document.createElement('p');
let content = 'Welcome to the portfolio of Ken Frianeza, a skilled and experienced web developer with expertise in both front-end and back-end development. As a master problem-solver and creative thinker, Kens passion for technology and design shines through in every project he undertakes. From crafting visually stunning websites and applications to developing efficient and effective code, Ken\'s work is a testament to his dedication and commitment to excellence. Explore this portfolio to see the wide range of projects Ken has worked on and the impact he has made in the industry.';
thisText.innerText += content;

thisBody.appendChild(thisText);


let stringSize = content.length; // length of the text{returns the count}
let stringValue = content; // value of the content{returns the content}

let maxStringSize = 150; // given max String size
let minStringSize = 0; // given min String size

let showFullTexTContent = content;

const thisButton = document.createElement('button');



console.log(stringSize);

let contentExceedSize = stringSize >= maxStringSize;  // if true this will display the showmore button
// let contentDoesNotExceedSize = stringSize <= maxStringSize; // else this will not display // will not do the else. should not display anything if false

if (contentExceedSize) {

  let showHalfTextContent = (stringValue.substring(minStringSize, maxStringSize)); // Convert it to only 150 letters
  thisText.innerText = showHalfTextContent; // display it to the container

  thisButton.innerText = "Show more ..."; // display the showmore button
  thisBody.appendChild(thisButton); // append the button

  let contentBool = false; // for if looping declare a false value

  thisButton.addEventListener('click', () => { // to click the thisButton

    if(!contentBool) { // contentBool is false condition will be true
    thisText.innerText = showFullTexTContent; // display full content
    thisButton.innerText = "Show less ..."; // display the showless button
     contentBool = true; // this will make the declared value into true to run the else condition
  } else {
    thisText.innerText = showHalfTextContent; // display half content
    thisButton.innerText = "Show more ..."; // display the showmore button
    contentBool = false; // this will make the declared value into false to run the if condition
  }

})

} 













