

// Structuring the page
const thisBody = document.getElementById('js-content');
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

let contentExceedSize = stringSize >= maxStringSize;  // if true this will display the showmore button
// let contentDoesNotExceedSize = stringSize <= maxStringSize; // else this will not display // will not do the else. should not display anything if false
let contentBool = null; // for if looping declare a false value

if (contentExceedSize) {
  let showHalfTextContent = (stringValue.substring(minStringSize, maxStringSize)); // Convert it to only 150 letters
  thisText.innerText = showHalfTextContent; // display it to the container

  thisButton.style.textDecoration = "underline";
  thisButton.innerText = "Show more ..."; // display the showmore button
  thisBody.appendChild(thisButton); // append the button

 
  contentBool = false; // for if looping declare a false value
  thisButton.addEventListener('click', () => { // to click the thisButton
  
  // Ano tong nasa line 38?
  const showState = {less: "Show less ...", more: "Show more ..."}
  
  !contentBool ? 
    changeDisplayButton(true, showFullTexTContent, showState.less) : 
    changeDisplayButton(false, showHalfTextContent, showState.more);
    
})

}

// changeDisplayButton function: display full content, display the showless button
// this will make the declared value into true to run the else condition

function changeDisplayButton(condition, textContent, stringValue) {
  thisText.innerText = textContent; 
  thisButton.innerText = stringValue; 
  contentBool = condition; 
}













