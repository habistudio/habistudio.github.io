// Habi Studio - small helper script

// 1. Mobile menu button: shows and hides the navigation on small screens
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
}

// 2. Contact form: checks the fields and shows a confirmation message
//    (this is a front-end demo only; no data is sent anywhere)
const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = document.querySelector(".form-note");
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const message = form.elements["message"].value.trim();
    if (!name || !email || !message) {
      note.style.color = "#C9406A";
      note.textContent = "Please fill in your name, email, and message.";
      return;
    }
    note.style.color = "#12857A";
    note.textContent = "Thanks, " + name + ". Your message is ready. We will reply within 2 working days.";
    form.reset();
  });
}

// 3. Footer year updates automatically
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
