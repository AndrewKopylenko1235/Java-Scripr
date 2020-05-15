"use strict";

import images from './gallary-items.js';
console.log(images);

let imgIndex = 0;
let galleryList = document.querySelector(".gallery");
let lightBoxImg = document.querySelector(".lightbox__image");
let lightBox = document.querySelector(".lightbox");
let closeBtn = lightBox.querySelector("button");
let lightboxOverlay = lightBox.querySelector(".lightbox__content");

let itemsHTML = "";
images.forEach((el) => {
    
const listElem = document.createElement('li');
const link = document.createElement('a');
const img = document.createElement('img');

listElem.classList.add("gallery__item");
link.classList.add("gallery__link");
link.setAttribute('href', el.original);
img.classList.add("gallery__image");
img.setAttribute('src', el.preview);
img.setAttribute('data-source', el.original);
img.setAttribute('alt', el.description)
img.setAttribute('data-index', imgIndex++);

listElem.prepend(link);
link.prepend(img);
galleryList.append(listElem);
  
});

let maxIndex = --imgIndex;
imgIndex = 0;

galleryList.insertAdjacentHTML("afterbegin", itemsHTML);
galleryList.addEventListener("click", () => {
  event.preventDefault();
  const target = event.target;
  imgIndex = +target.getAttribute("data-index");
  let largeImgUrl = target.getAttribute("data-source");
  
  lightBoxImg.setAttribute("src", largeImgUrl);
  lightBox.classList.add("is-open");
});

const close = function () {
  lightBoxImg.removeAttribute("src");
  lightBox.classList.remove("is-open");
};

closeBtn.addEventListener("click", close);


window.addEventListener("keydown", () => {
  if (!lightBox.classList.contains("is-open")) return;
  if (event.keyCode === 27) close();
  else if (event.keyCode === 37) {
    imgIndex--;
    if (imgIndex === -1) imgIndex = maxIndex;
    lightBoxImg.setAttribute("src", images[imgIndex].original);
  } else if (event.keyCode === 39) {
    imgIndex++;
    if (imgIndex > maxIndex) imgIndex = 0;
    lightBoxImg.setAttribute("src", images[imgIndex].original);
  }
});

lightboxOverlay.addEventListener("click", close);
