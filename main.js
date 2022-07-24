// NAV BAR
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    
    header.classList.toggle('scrolling-active', windowPosition);
});

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

/* NAV LINKS */

home = document.getElementById('home');
home.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".home").scrollIntoView({behavior: "smooth"});
});

about = document.getElementById('about');
about.addEventListener("click", (event) => {
    event.preventDefault();
    navbarLinks.classList.remove('active');
    document.querySelector(".about").scrollIntoView({behavior: "smooth"});
});

partners = document.getElementById('partners');
partners.addEventListener("click", (event) => {
    event.preventDefault();
    navbarLinks.classList.remove('active');
    document.querySelector(".partners").scrollIntoView({behavior: "smooth"});
});

products_area = document.getElementById('products');
products_area.addEventListener("click", (event) => {
    event.preventDefault();
    navbarLinks.classList.remove('active');
    document.querySelector(".products").scrollIntoView({behavior: "smooth"});
});

contact = document.getElementById('contact');
contact.addEventListener("click", (event) => {
    event.preventDefault();
    navbarLinks.classList.remove('active');
    document.querySelector(".social").scrollIntoView({behavior: "smooth"});
});


/* PRODUCTS SECTION */
const productList = document.querySelector(".product-list");
const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
const products = document.querySelectorAll(".product");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfproducts = products.length;

let slideNumber = 0;

// next button
nextButton.addEventListener("click", () => {

    products.forEach((product) => {
        product.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfproducts - 1)){
        slideNumber = 0;
    };

    products[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");

});

// Previous Button
prevButton.addEventListener("click", () => {

    products.forEach((product) => {
        product.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfproducts - 1;
    };

    products[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");

});

/* AUTO Product Slider */
let autoSlider;

let autoRepeat = () => {
    playSlider = setInterval(function(){
        products.forEach((product) => {
            product.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfproducts -1)){
            slideNumber = 0;
        }

        products[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 5000);
}

autoRepeat();

// stopping the auto slider upon mouse hover
productList.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

// restarting the autoslider when mouse leaves
productList.addEventListener("mouseout", () => {
    autoRepeat();
});

/* Aim Section */
const overlay = document.querySelector(".overlay");
window.addEventListener('scroll', function () {
    let windowPosition = window.scrollY > 0;
    overlay.classList.toggle('in-view', windowPosition);
});
