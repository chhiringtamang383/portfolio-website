let mode = document.querySelector("#mode");
let body = document.querySelector("body");

mode.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        console.log("You are now in light mode");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        console.log("You are now in dark mode");
    }
});
// for text-animation
const typewriterText = new Typed('.second-txt', {
    //new  is keyword that create instance of class which means new helps to create an object with all the defined properties in typed class
    strings: ["Web-developer","Web-designer", "Digital-Marketer","Ethical-Hacker"],
    typeSpeed: 100,
    backSpeed: 100, 
    loop: true 
});



const tablinks = document.querySelectorAll(".tab-links");


const tabcontents = document.querySelectorAll(".tab-contents");
function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      
        tabcontent.classList.remove("active-tab");
    }
                      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
}
// responsive menu 
var sidemenu = document.querySelector(".nav-items");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbyu5U2YKxdLxYjw5uPZDVqPbuHq8eDYgqq1pMGLdfIJRqrT2BW3uQrnKfOC7Lq3abjPaQ/exec';
const form = document.forms['submit-to-google-sheet'];
const overlay = document.getElementById('overlay');

form.addEventListener('submit', async (e) => {
    e.preventDefault();  

    overlay.style.display = 'flex'; 
    try {
        const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });

        if (response.ok) {
            overlay.style.display = 'none';
            setTimeout(() => {
                alert("Message sent successfully");
                form.reset();
            },100);
        } else {
            overlay.style.display = 'none';
            setTimeout(() => {
                alert("There was an error sending your message.");
            }, 100);
        }
    } catch (error) {
        console.error('Error!', error.message); 
        overlay.style.display = 'none';
        setTimeout(() => {
            alert("There was an error sending your message.");
        }, 1000);
    }
});
const scrollUpBtn = document.getElementById('scrollUp');
const scrollDownBtn = document.getElementById('scrollDown');
const footerOffset = document.body.scrollHeight - window.innerHeight; 

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
 if (scrollPosition < 100) {
        scrollDownBtn.style.display = 'block';
        scrollUpBtn.style.display = 'none';
    }
 else if (scrollPosition > footerOffset - 100) {
        scrollUpBtn.style.display = 'block';
        scrollDownBtn.style.display = 'none';
    }
    else {
        scrollUpBtn.style.display = 'block';
      
        scrollDownBtn.style.display = 'block';
    }
});
const currentYear = new Date().getFullYear();
  document.getElementById('currentYear').textContent = currentYear;