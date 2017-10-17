"use strict"

const images = ["img/1.JPG",
                "img/2.JPG",
                "img/3.JPG",
                //"img/4.JPG",
                "img/5.JPG",
                "img/6.JPG",
                "img/7.JPG",
                "img/8.JPG",
                "img/9.JPG",
                "img/10.JPG",
                "img/11.JPG",
                "img/12.JPG",
                "img/13.JPG",
                "img/14.JPG"
]

let firstDisplayedImage = 0;
const thumbsLg = document.querySelector('#thumbs_lg');
const smallThumbs = document.querySelector('#thumbs_small')
const medThumbs = document.querySelector('#thumbs_med')

const circulatePhotoIndex = (imageIndex) => {
    if (imageIndex < 0) {
        imageIndex = images.length + imageIndex;
    } else if (imageIndex >= images.length) {
        imageIndex = imageIndex % images.length;
    }
    return imageIndex;

};

const advancePhotos = (direction, num) => {
    //Move firstDisplayedImage index forward or back
    if (direction === "back") {
        firstDisplayedImage = circulatePhotoIndex(firstDisplayedImage - (num));
    } else if (direction === 'forward') firstDisplayedImage = circulatePhotoIndex(firstDisplayedImage + num);
    //Push updated photos to thumbnail gallery divs
    advanceLargePhotos();
    advanceMedPhotos();
    advanceSmallPhotos();
}

const advanceLargePhotos = direction => {
    let htmlCode = '';
    for (let i = 0; i < 3; i++) {
        htmlCode += `<img src="${images[circulatePhotoIndex(firstDisplayedImage + i)]}" alt="">`;
    }
    thumbsLg.innerHTML = htmlCode;
}

const advanceMedPhotos = direction => {
    let htmlCode = '';
    for (let i = 0; i < 2; i++) {
        htmlCode += `<img src="${images[circulatePhotoIndex(firstDisplayedImage + i)]}" alt="">`;
    }
    medThumbs.innerHTML = htmlCode;
}

const advanceSmallPhotos = direction => {
    smallThumbs.innerHTML = `<img src="${images[circulatePhotoIndex(firstDisplayedImage)]}" alt="">`;
}

advancePhotos();
$('body').scrollspy({ target: '#main-nav', offset:200 });
