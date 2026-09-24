// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Close mobile menu after clicking a link
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const symbol = button.querySelector("span");

    answer.classList.toggle("open");
    symbol.textContent = answer.classList.contains("open") ? "−" : "+";
  });
});

// Contact form -> WhatsApp
const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const course = document.getElementById("course").value;
  const time = document.getElementById("time").value.trim();

  const message =
    `Assalam o Alaikum, I want to join Minhaj ul Quran Online Quran Academy.%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Course: ${encodeURIComponent(course)}%0A` +
    `Preferred Time: ${encodeURIComponent(time)}`;

  window.open(`https://wa.me/923027445729?text=${message}`, "_blank");
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
