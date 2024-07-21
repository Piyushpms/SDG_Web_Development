//This script handles interactions and can be expanded for more functionality

// Example: handling the "Join our mailing list" button

document.querySelector('.subscribe button').addEventListener('click', function() {
    prompt("Enter your Email");
    alert('Thank you for subscribing to our newsletter!');
});
