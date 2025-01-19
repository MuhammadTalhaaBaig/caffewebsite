function sendEmail() {
    // Collect input values
    let params = {
        name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Debug: Log collected parameters
    console.log("Email parameters:", params);

    // Send email using EmailJS
    emailjs.send("service_6e2uvqk", "template_u01d07c", params)
        .then(function (response) {
            // Show success alert and log response
            alert("Email sent successfully!");
            console.log("SUCCESS!", response.status, response.text);

            // Reset the form after successful email
            document.getElementById("contactForm").reset();
        })
        .catch(function (error) {
            // Show error alert and log error details
            alert("Failed to send email. Please try again.");
            console.error("FAILED...", error);
        });
}
