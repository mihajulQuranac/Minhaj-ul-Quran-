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


// Login form - Student / Teacher Dashboard
const loginForm = document.getElementById("loginForm");
const loginSection = document.getElementById("login");
const studentDashboard = document.getElementById("studentDashboard");
const logoutBtn = document.getElementById("logoutBtn");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const role = document.getElementById("loginRole").value;
    const message = document.getElementById("loginMessage");

    // Student Login
    if (role === "student") {

      if (loginSection) {
        loginSection.style.display = "none";
      }

      if (studentDashboard) {
        studentDashboard.style.display = "block";

        studentDashboard.scrollIntoView({
          behavior: "smooth"
        });
      }

      // Clear login form
      loginForm.reset();

      // Keep Student selected
      const roleInput = document.getElementById("loginRole");

      if (roleInput) {
        roleInput.value = "student";
      }

    }

    // Teacher Login
    else {

      if (message) {
        message.textContent =
          "Teacher Dashboard will be connected in the next step.";

        message.classList.add("show");
      }

    }
  });
}


// Student Dashboard Logout
if (logoutBtn) {

  logoutBtn.addEventListener("click", () => {

    if (studentDashboard) {
      studentDashboard.style.display = "none";
    }

    if (loginSection) {
      loginSection.style.display = "block";

      loginSection.scrollIntoView({
        behavior: "smooth"
      });
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
