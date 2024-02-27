var i = 0;
var txt = ' The Future of Real Estate is Here with Blockchain and Web3 Innovation from Blits Estates. This white paper delves into how Blits Estates is harnessing the potential of Web3-powered solutions to reshape digital real estate, while also introducing a decentralized approach to real estate investment through DAO technology.';
var speed = 50;

function typeWriter() {
    var speed = 50; // Adjust the typing speed in milliseconds
    var i = 0;
    function type() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }


window.onload = function() {
    typeWriter();
  };

  document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = sliderContainer.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let slideIndex = 0;
    const slideWidth = slides[0].offsetWidth;

    // Clone the first few slides and append them to the end
    for (let i = 0; i < totalSlides; i++) {
        sliderContainer.appendChild(slides[i].cloneNode(true));
    }

    function showSlides() {
        slideIndex++;
        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }
        const offset = -slideIndex * slideWidth;
        sliderContainer.style.transform = `translateX(${offset}px)`;
    }

    setInterval(showSlides, 2000); // Change slide every 2 seconds
});



