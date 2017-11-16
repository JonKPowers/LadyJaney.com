"use strict"

///////////////////////////////////////////////
//Photo Carousel
///////////////////////////////////////////////

const images = ["img/0",
                //"img/1",
                "img/2",
                "img/3",
                //"img/4",
                //"img/5",
                "img/6",
                //"img/7",
                "img/8",
                "img/9",
                "img/10",
                "img/11",
                "img/12",
                "img/13",
                "img/14",
                "img/15",
                "img/16",
                "img/17",
                "img/18",
                "img/19",
                "img/20",
                "img/21",
                "img/22",
                "img/23"
]

let firstDisplayedImage = 0;
const thumbsLg = document.querySelector('#thumbs_lg');
const smallThumbs = document.querySelector('#thumbs_small')
const medThumbs = document.querySelector('#thumbs_med')

const circulatePhotoIndex = (imageIndex) => {
    //This function keeps the image index rotating after reaching the first or last items in the image array
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
    //Large photo div
    let htmlCode = '';
    for (let i = 0; i < 3; i++) {
        htmlCode += `<img class="lightitup" src="${images[circulatePhotoIndex(firstDisplayedImage + i)]}_small.jpg" target="${images[circulatePhotoIndex(firstDisplayedImage + i)]}.jpg" alt="">`;
    }
    thumbsLg.innerHTML = htmlCode;

    //Med photo div
    htmlCode = '';
    for (let i = 0; i < 2; i++) {
        htmlCode += `<img class="lightitup" src="${images[circulatePhotoIndex(firstDisplayedImage + i)]}_small.jpg" target="${images[circulatePhotoIndex(firstDisplayedImage + i)]}.jpg" alt="">`;
    }
    medThumbs.innerHTML = htmlCode;

    //Small photo div
    smallThumbs.innerHTML = `<img class="lightitup" src="${images[circulatePhotoIndex(firstDisplayedImage)]}_small.jpg" target="${images[circulatePhotoIndex(firstDisplayedImage)]}.jpg" alt="">`;

    //Rebuild the lightbox for newly added items
    add_lightbox();
}

/////////////////////////////////////////////
//Lightbox--This code will build a lightbox with the currently displayed images
/////////////////////////////////////////////
//Lightbox Gallary feature

const add_lightbox = () => {
    var $lightbox = $("<div class='lightbox'></div>");
    console.log($lightbox);
    var $img = $("<img>");


    $lightbox.hide();

    // Build up the lightbox
    $lightbox.append($img)
    $('body').append($lightbox);

    //Add listener
    $('.lightitup').click(function(e) {
      e.preventDefault();
      var src = $(this).attr("target");
      $img.attr('src', src);
      $lightbox.fadeIn('fast');

    // Exit lightbox on a click
      $lightbox.click(function() {
        $lightbox.fadeOut('fast');
      });
    });
}

/////////////////////////////////////////////
//Fire up the page!
/////////////////////////////////////////////

$(document).ready(function() {
    advancePhotos();
    $('body').scrollspy({ target: '#main-nav', offset:200 });
});
