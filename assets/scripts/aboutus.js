let elements = document.querySelector('#gallery');
let images = elements.querySelectorAll('#image');
let cardGallery = document.querySelector('#card-gallery');
let smallGallery = cardGallery.querySelectorAll('#smallGallery');
let modal = document.querySelector('#imgModal');
let caption = document.querySelector('#caption');
let imageModal = document.querySelector('#img01');

let close = document.querySelector('.close');

// iterate through all images 
for (let i = 0; i < images.length; i++) {
    
    images[i].addEventListener('click', (e) => {
        modal.style.display = 'block';
        imageModal.src = images[i].src;
    })
}

close.onclick = (e) => {
    modal.style.display = 'none';
}

//photoswipe

const openPhotoSwipe = () => {
    const pswpElement = document.querySelectorAll('.pswp')[0];

    //build items array 
    const items = [
        {
            src : './assets/site-img/backhoefleet.jpg',
            w : 752,
            h : 352
        },
        {
            src : "./assets/site-img/dredging.jpg",
            w : 854,
            h : 470
        },
        {
            src : "./assets/site-img/zoomlion.jpg",
            w : 1344,
            h : 640
        },
        {
            src : "./assets/site-img/pililia1.jpg",
            w : 1344,
            h : 640
        },
        {
            src : './assets/site-img/extended.jpg',
            w : 752,
            h : 368
        },
        {
            src : './assets/site-img/backhoebarge.jpg',
            w : 768,
            h : 432
        },
        {
            src : './assets/site-img/crane.jpg',
            w : 720,
            h : 960
        },
        {
            src : './assets/site-img/davillan.jpg',
            w : 2016,
            h : 1120
        },
        {
            src : './assets/site-img/sheetpile.jpg',
            w : 768,
            h : 432
        },
        {
            src : './assets/site-img/telescopic.jpg',
            w :  768,
            h : 432
        },
        {
           src : './assets/site-img/multiple.jpg',
           w : 752,
           h : 368 
        },
        {
            src : './assets/site-img/fleet.jpg',
            w : 1440,
            h : 1080
        }
    ];

    const options = {
        index: 0
    };

    const gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init()
}

cardGallery.addEventListener('click', (e) => {
    openPhotoSwipe()
 });








