"use strict"

const images = ["img/1.jpg",
                "img/2.jpg",
                "img/3.jpg",
                "img/4.jpg",
                "img/5.jpg",
                "img/6.jpg",
                "img/7.jpg",
                "img/8.jpg",
                "img/9.jpg",
                "img/10.jpg",
                "img/11.jpg",
                "img/12.jpg",
                "img/13.jpg",
                "img/14.jpg",
                "img/15.jpg",
                "img/16.jpg",
                "img/17.jpg",
                "img/18.jpg",
]

let imageIndex = 0;
const thumbs_1 = document.querySelector('#thumbs_1');
const thumbs_2 = document.querySelector('#thumbs_2');

const circulatePhotoIndex = () => {
    if (imageIndex < 0) {
        imageIndex = images.length + imageIndex;
    } else if (imageIndex >= images.length) {
        imageIndex = imageIndex % 6;
    }
    console.log(imageIndex);
};

const advancePhotos = (direction) => {
    if (direction === "back") {imageIndex -= 12};
    let htmlCode = '';
    for (let i = 0; i <3; i++) {
        circulatePhotoIndex();
        htmlCode += `<img src="${images[imageIndex++]}" alt="">`;
    }
    thumbs_1.innerHTML = htmlCode;

    htmlCode = '';
    for (let i = 0; i <3; i++) {
        circulatePhotoIndex();
        htmlCode += `<img src="${images[imageIndex++]}" alt="">`;
    }
    thumbs_2.innerHTML = htmlCode;
}

const backtrackPhotos = () => {
    thumbs_1.innerHTML = `<img src="${images[imageIndex - 6 ]}" alt="">
<img src="${images[imageIndex - 5]}" alt="">
<img src="${images[imageIndex - 4]}" alt="">`;

    thumbs_2.innerHTML = `<img src="${images[imageIndex - 3]}" alt="">
<img src="${images[imageIndex - 2]}" alt="">
<img src="${images[imageIndex - 1]}" alt="">`;
imageIndex -= 6;
}

advancePhotos();
