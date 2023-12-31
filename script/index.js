//changeing image display through clicking of thumbnail
let imageBg = document.querySelector(".prod-display img");

//for pop-up
let popBg = document.querySelector(".pop-display img");
function changeImage(imageChoice) {
  image = imageChoice;

  if (image == "imageOne") {
    imageBg.src = "./images/image-product-1.jpg";
    popBg.src = "./images/image-product-1.jpg";
  } else if (image == "imageTwo") {
    imageBg.src = "./images/image-product-2.jpg";
    popBg.src = "./images/image-product-2.jpg";
  } else if (image == "imageThree") {
    imageBg.src = "./images/image-product-3.jpg";
    popBg.src = "./images/image-product-3.jpg";
  } else if (image == "imageFour") {
    imageBg.src = "./images/image-product-4.jpg";
    popBg.src = "./images/image-product-4.jpg";
  }
}

//displaying pop-up
const popUp = document.querySelector(".pop-up");
imageBg.addEventListener("click", () => {
  popUp.style.display = "flex";
});

const popClose = document.querySelector(".pop-close");
popClose.addEventListener("click", () => {
  popUp.style.display = "none";
});
