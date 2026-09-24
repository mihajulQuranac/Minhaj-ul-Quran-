// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

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

    if (symbol) {
      symbol.textContent = answer.classList.contains("open") ? "−" : "+";
    }
  });
});

// Student / Teacher role selection
function selectRole(role, button) {
  const roleInput = document.getElementById("loginRole");
  const roleButtons = document.querySelectorAll(".role-btn");

  if (roleInput) {
    roleInput.value = role;
  }

  roleButtons.forEach(btn => {
    btn.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }
}

// Login form - Portal preview
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const role = document.getElementById("loginRole").value;
    const message = document.getElementById("loginMessage");

    if (message) {
      message.textContent =
        `You selected ${role === "student" ? "Student" : "Teacher"} Login. ` +
        "Real account login will be connected in the next step.";
      message.classList.add("show");
    }
  });
}

// Contact form -> WhatsApp
const form = document.getElementById("contactForm");

if (form) {
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

    window.open(
      `https://wa.me/923027445729?text=${message}`,
      "_blank"
    );
  });
}

// Current year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
