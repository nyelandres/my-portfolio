var carousel = document.querySelector(".carousel");
var carouselItems = document.querySelectorAll(".carousel-item");
var currentItem = 0;

function showCurrentItem() {
    carouselItems.forEach(function(item) {
        item.classList.remove("active");
    });
    carouselItems[currentItem].classList.add("active");
}

showCurrentItem();

document.querySelector(".carousel-control-prev").addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = carouselItems.length - 1;
    }
    showCurrentItem();
});

document.querySelector(".carousel-control-next").addEventListener("click", function() {
    currentItem++;
    if (currentItem > carouselItems.length - 1) {
        currentItem = 0;
    }
    showCurrentItem();
});