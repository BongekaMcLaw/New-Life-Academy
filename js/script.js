// Handle contact form submission
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents the page from reloading
    alert(
      "Thank you for your message! (This is a placeholder. The school will receive real emails once the backend is connected.)",
    );
    contactForm.reset(); // Clears the form
  });
}
