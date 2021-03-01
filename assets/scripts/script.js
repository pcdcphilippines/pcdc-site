let secondNav = document.querySelector('#secondNav');
let page = document.querySelector('body');

page.onscroll = () => {

    let x = window.scrollY;

    if (x > 600) {
        secondNav.classList.add('second');
    }else{
        secondNav.classList.remove('second');
    }
}

const isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

let project1 = document.querySelector('#project1');
let project2 = document.querySelector('#project2');

window.addEventListener('scroll', function (event) {
    if (isInViewport(project1)) {
        project1.classList.add('cards101')
    }
}, false);

window.addEventListener('scroll', function (event) {
    if (isInViewport(project2)) {
        project2.classList.add('cards202')
    }
}, false);


// Author: Nicholas Fazzolari
// Basic tab switching code in pure ES6

// TODO:   Add default tab open feature with an on off switch
//         Make the event listener assignments general

function openTab(tabName) {
    let i;
    let tabContent;
    
    tabContent = document.getElementsByClassName("tab-content");
    
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    document.getElementById(tabName).style.display = "flex";
}


// This needs to DRY'ed up so it can be used with a CMS
let designLinkEl = document.getElementById("DesignLink");
let progLinkEl = document.getElementById("ProgLink");
let musicLinkEl = document.getElementById("SupportLink");

designLinkEl.addEventListener("click", function(){openTab("Design")}, false);
progLinkEl.addEventListener("click", function(){openTab("Programming")}, false);
musicLinkEl.addEventListener("click", function(){openTab("Support")}, false);

openTab("Design");

// ----------------------------------------------------------------------------------------------




