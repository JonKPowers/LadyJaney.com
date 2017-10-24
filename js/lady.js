"use strict"

///////////////////////////////////////////////
//Photo Carousel
///////////////////////////////////////////////

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
    //Large photo div
    let htmlCode = '';
    for (let i = 0; i < 3; i++) {
        htmlCode += `<img class="lightitup" src="${images[circulatePhotoIndex(firstDisplayedImage + i)]}" alt="">`;
    }
    thumbsLg.innerHTML = htmlCode;

    //Med photo div
    htmlCode = '';
    for (let i = 0; i < 2; i++) {
        htmlCode += `<img class="lightitup" src="${images[circulatePhotoIndex(firstDisplayedImage + i)]}" alt="">`;
    }
    medThumbs.innerHTML = htmlCode;

    //Small photo div
    smallThumbs.innerHTML = `<img class="lightitup" src="${images[circulatePhotoIndex(firstDisplayedImage)]}" alt="">`;
}

advancePhotos();
$('body').scrollspy({ target: '#main-nav', offset:200 });

///////////////////////////////////////////////
//lightbox
///////////////////////////////////////////////
$(document).ready(function() {
    //Lightbox Gallary feature
    var $lightbox = $("<div class='lightbox'></div>");
    console.log($lightbox);
    var $img = $("<img>");

    // Hide the lightbox
    $lightbox.hide();

    // Add image and caption to lightbox
    $lightbox.append($img)

    // Add lighbox to document
    $('body').append($lightbox);

    //Listener for gallery images
    $('.lightitup').click(function(e) {
      e.preventDefault();

    // Get image link and description
      var src = $(this).attr("src");

    // Add data to lighbox
      $img.attr('src', src);

    // Show lightbox
      $lightbox.fadeIn('fast');

    // Exit the lightbox when the div is clicked anywhere
      $lightbox.click(function() {
        $lightbox.fadeOut('fast');
      });
    });
});
