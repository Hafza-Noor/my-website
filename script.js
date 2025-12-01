// =====================
// Typewriter Effect
// =====================
const textList = [
  "Data Analyst",
  "Mathematician",
  "Aspiring Data Scientist",
  "Researcher"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = textList[index];

  if (!isDeleting) {
    document.getElementById("typed").innerHTML = currentText.slice(0, charIndex++);
  } else {
    document.getElementById("typed").innerHTML = currentText.slice(0, charIndex--);
  }

  if (charIndex === currentText.length + 1) isDeleting = true;

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % textList.length;
  }

  setTimeout(typeEffect, isDeleting ? 100 : 150);
}

// =====================
// Skill Bar Animation
// =====================
function showSkills() {
  const skillBars = document.querySelectorAll(".skill-bar span");
  const trigger = window.innerHeight;

  skillBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    const width = bar.getAttribute("style").match(/\d+/)[0];
    if (top < trigger) bar.style.width = width + "%";
  });
}

// =====================
// Smooth Scroll + Navbar Highlight
// =====================
function smoothScroll() {
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function navHighlight() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });
  });
}

// =====================
// Project Card Hover Effect
// =====================
function projectHover() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("mouseover", () => card.style.transform = "scale(1.03)");
    card.addEventListener("mouseout", () => card.style.transform = "scale(1)");
  });
}

// =====================
// Section Scroll Animation
// =====================
function revealSections() {
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) section.classList.add("visible");
  });
}

// =====================
// Back to Top Button
// =====================
function backToTop() {
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) btn.style.display = "flex";
    else btn.style.display = "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// =====================
// DOMContentLoaded
// =====================

document.addEventListener("DOMContentLoaded", () => {
  // Typewriter effect
  typeEffect();

  // Skill bar animation
  showSkills();

  // Smooth scrolling for nav links
  smoothScroll();

  // Highlight active nav link on scroll
  navHighlight();

  // Project hover animation
  projectHover();

  // Reveal sections on scroll
  revealSections();

  // Back to top button
  backToTop();

  // Scroll listener to animate skills and reveal sections
  window.addEventListener("scroll", () => {
    showSkills();
    revealSections();
  });
});

// Example function definitions:

function typeEffect() {
  // Your typewriter code here
}

function showSkills() {
  const skillBars = document.querySelectorAll(".skill-bar span");
  const trigger = window.innerHeight;
  skillBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    const width = bar.getAttribute("style").match(/\d+/)[0];
    if (top < trigger) bar.style.width = width + "%";
  });
}

function smoothScroll() {
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function navHighlight() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });
  });
}

function projectHover() {
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseover", () => card.style.transform = "scale(1.03)");
    card.addEventListener("mouseout", () => card.style.transform = "scale(1)");
  });
}

function revealSections() {
  const triggerBottom = window.innerHeight - 100;
  const allSections = document.querySelectorAll("section");
  allSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) section.classList.add("visible");
  });
}

function backToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) btn.style.display = "flex";
    else btn.style.display = "none";
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}
function revealSections() {
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) section.classList.add("visible");
  });
}

// =====================
// Back to Top Button
// =====================
function backToTop() {
  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) btn.style.display = "flex";
    else btn.style.display = "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
// Contact Form Submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Send form to Formspree
  fetch(contactForm.action, {
    method: "POST",
    body: new FormData(contactForm),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      alert("Message sent successfully!");
      contactForm.reset();
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  }).catch(error => {
    alert("Error submitting the form: " + error);
  });
});
function typeWriterHero(texts, elementId, speed = 100, pause = 1500) {
  let i = 0;
  let j = 0;
  let forward = true;
  const el = document.getElementById(elementId);

  function type() {
    if (forward) {
      el.textContent = texts[i].substring(0, j + 1);
      j++;
      if (j === texts[i].length) {
        forward = false;
        setTimeout(type, pause);
        return;
      }
    } else {
      j--;
      el.textContent = texts[i].substring(0, j);
      if (j === 0) {
        forward = true;
        i = (i + 1) % texts.length;
      }
    }
    setTimeout(type, speed);
  }

  type();
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriterHero(["Hafza Noor", "a Freelancer"], "typed", 100, 1500);
});
const typed = new Typed('#typed', {
  strings: ['Hafza Noor', 'a Freelancer'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1500,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});
