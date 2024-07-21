// This script handles interactions and can be expanded for more functionality

// Example: handling the "Join our mailing list" button
document.addEventListener('DOMContentLoaded', () => {
    // Handling subscription button
    document.querySelector('.subscribe button').addEventListener('click', function() {
        const isLoggedIn = !!localStorage.getItem('authToken');
        if (isLoggedIn) {
            alert('Thank you for subscribing to our newsletter!');
        } else {
            alert('Please log in to subscribe to our newsletter.');
        }
    });

    // Handling Solar Energy page specific interactions
    if (document.querySelector('#solar')) {
        document.querySelector('.solar-info-button').addEventListener('click', function() {
            alert('Learn more about our Solar Energy initiatives!');
        });
    }

    // Handling Wind Energy page specific interactions
    if (document.querySelector('#wind')) {
        document.querySelector('.wind-info-button').addEventListener('click', function() {
            alert('Learn more about our Wind Energy initiatives!');
        });
    }
});
