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

 

