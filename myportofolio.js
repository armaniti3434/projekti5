document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "!");
        // Here you can add logic to actually send the form data to a server
        document.getElementById("contact-form").reset(); // Reset the form
    } else {
        alert("Please fill out all fields!");
    }
});
