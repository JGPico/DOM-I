const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = siteContent.nav;
let navItem = document.querySelectorAll('a');

// ask about for loop or forEach.


let navBarBits = Object.values(navBar);

for (let i = 0; i < 6; i++) {
  navItem[i].textContent = navBarBits[i];
}


let ctaTitle = document.querySelector('.cta-text h1');
ctaTitle.textContent = siteContent.cta['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta['button'];

let ctaImage = document.querySelector('.cta img');
ctaImage.src = 'img/header-img.png';

// main content

let mainContent = siteContent["main-content"];

let midImg = document.querySelector('#middle-img');
midImg.src = 'img/mid-page-accent.jpg';

let hContent = document.querySelectorAll('.main-content h4');
hContent[0].textContent = mainContent['features-h4'];
hContent[1].textContent = mainContent['about-h4'];
hContent[2].textContent = mainContent['services-h4'];
hContent[3].textContent = mainContent['product-h4'];
hContent[4].textContent = mainContent['vision-h4'];

let pContent = document.querySelectorAll('.main-content p');
pContent[0].textContent = mainContent['features-content'];
pContent[1].textContent = mainContent['about-content'];
pContent[2].textContent = mainContent['services-content'];
pContent[3].textContent = mainContent['product-content'];
pContent[4].textContent = mainContent['vision-content'];

// Contact & footer

let contactContent = siteContent["contact"];

let contactHContent = document.querySelector('.contact h4');
contactHContent.textContent = contactContent['contact-h4'];

let contactPContent = document.querySelectorAll('.contact p');
contactPContent[0].textContent = contactContent['address'];
contactPContent[1].textContent = contactContent['phone'];
contactPContent[2].textContent = contactContent['email'];

let footerC = document.querySelector('footer p');
footerC.textContent = siteContent["footer"]["copyright"];