// Rotating typing text
const texts = ["ComputerScienceEngineer", "FullStack Developer", "Java Developer", "Web Designer"];
const rotator = document.querySelector(".rotator");

let currentTextIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let deleting = false;

function type() {
  const currentText = texts[currentTextIndex];

  if (!deleting) {
    rotator.textContent += currentText[charIndex];
    charIndex++;

    if (charIndex === currentText.length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    rotator.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
  }

  setTimeout(type, typingSpeed);
}

type();

// Professional skills circles// --- Function to draw professional skills circles ---
function loadSkills() {
  const circles = document.querySelectorAll(".circle");
  circles.forEach(elem => {
    const dots = parseInt(elem.getAttribute("data-dots"));
    const marked = parseInt(elem.getAttribute("data-percent"));
    const percent = Math.floor(dots * marked / 100);
    const rotate = 360 / dots;

    let points = "";
    for (let i = 0; i < dots; i++) {
      points += `<div class="points" style="--i:${i};--rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
      pointsMarked[i].classList.add("marked");
    }
  });
}

// --- Run when Skills navbar clicked ---
document.querySelector('a[href="#skills"]').addEventListener("click", () => {
  setTimeout(loadSkills, 300); // small delay so scroll lands first
});

// --- Run when user scrolls into Skills section ---
const skillsSection = document.querySelector("#skills");
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadSkills();
    }
  });
}, { threshold: 0.3 });

skillsObserver.observe(skillsSection);


// portfolio
// Portfolio filter functionality
const filterButtons = document.querySelectorAll('.fillter-buttons .btn');
const portfolioBoxes = document.querySelectorAll('.portfolio-gallery .port-box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.textContent.toLowerCase().trim();

        portfolioBoxes.forEach(box => {
            const category = box.getAttribute('data-category').trim().toLowerCase();
            if (!category) return; // skip if no category
            box.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
        });

        // highlight active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


//active menu
let menuli=document.querySelectorAll('header ul li a');
let section =document.querySelectorAll('section');
function activeMenu(){
  let len=section.length;
  while(--len&&window.scrollY+97<section[len].offsetTop){}
  menuli.forEach(sec=>sec.classList.remove("active"));
  menuli[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);
//stickynavbar------
const header=document.querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",this.window.scrollY>50)
})
//togle icon
let menuIcon=document.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");
menuIcon.onclick=()=>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}

window.onscroll=()=>{
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
}
const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show-items");

    }
    else{
      entry.target.classList.remove("show-items");
    }
  });
});
const scrollScale=document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom=document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop=document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

//contact message
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;
  let myWhatsApp = "917824961145";  
  let whatsappMessage = `*Name:* ${name}%0A*Email:* ${email}%0A*Address:* ${address}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
  window.open(`https://wa.me/${myWhatsApp}?text=${whatsappMessage}`, "_blank");
});

