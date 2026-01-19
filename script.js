document.addEventListener('DOMContentLoaded', function() {
    // Find the contact form on the page
    const contactForm = document.getElementById('contact-form');

    // Add an event listener for the form's submit event
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting the default way
            event.preventDefault(); 

            // Get the values from the form fields
            const visitorName = document.getElementById('visitor-name').value.trim();
            const visitorEmail = document.getElementById('visitor-email').value.trim();
            const visitorMessage = document.getElementById('visitor-message').value.trim();

            // 1. Validation Check
            // Check if any of the fields are empty
            if (visitorName === '' || visitorEmail === '' || visitorMessage === '') {
                // If a field is empty, show a validation error dialog
                alert('Please fill in all fields before submitting.');
                return; // Stop the function here
            }

            // 2. Acknowledgment
            // If all fields are filled, show a success dialog with the visitor's name
            alert(`Thank you for your message, ${visitorName}! I'll get back to you shortly.`);
            
            // Optional: Clear the form fields after successful submission
            contactForm.reset();
        });
    }
});
