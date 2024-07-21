//This script handles interactions and can be expanded for more functionality

// Example: handling the "Join our mailing list" button
document.querySelector('.subscribe button').addEventListener('click', function() {
    const isLoggedIn = !!localStorage.getItem('authToken');
    alert('Thank you for subscribing to our newsletter!');
});
