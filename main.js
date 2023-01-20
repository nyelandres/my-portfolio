// Show more show less

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

// carousel

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideSize);

// slides[0].style.left = 0;
// slides[1].style.left = slideWidth + 'px';
// slides[2].style.left = slideWidth + 2 + 'px';

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if(targetIndex === 0) {
    prevButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
  }else if (targetIndex === slides.length -1) {
    prevButton.classList.remove('hidden');
    nextButton.classList.add('hidden');
  }else {
    prevButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');
  }
}

prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);

  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);

});

dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  console.log(targetDot)

  if(!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];
  
  moveToSlide(track, currentSlide, targetSlide);
  // currentDot.classList.remove('current-slide');
  // targetDot.classList.add('current-slide');
  updateDots(currentDot, targetDot);

  hideShowArrows(slides, prevButton, nextButton, targetIndex);
})

// console.log(dots);






