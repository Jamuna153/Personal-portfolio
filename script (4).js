// thank you message for the contact form
let form = document.querySelector("#contactForm");

// this form is only on contact.html, so check first
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop the page from reloading
        let name = document.querySelector("#name").value;
        form.textContent = "Thanks, " + name + "! I will reply soon.";
        form.classList.add("thanks");
    });
}
