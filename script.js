document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Function to handle "Join our mailing list" button click
    const handleSubscriptionClick = () => {
        const isLoggedIn = !!localStorage.getItem('authToken');
        if (isLoggedIn) {
            alert('You have successfully subscribed to our newsletter! We will keep you updated on the latest news and offers.');
        } else {
            const email = prompt('Please enter your email address to subscribe:');
            if (email) {
                // Add logic to handle the captured email (e.g., store or send for subscription)
                alert(`Thank you for subscribing with ${email}! We will keep you updated.`);
            } else {
                alert('Subscription cancelled.');
            }
        }
    };

    // Check if subscribe button exists before adding event listener
    const subscribeButton = document.querySelector('.subscribe button');
    if (subscribeButton) {
        subscribeButton.addEventListener('click', handleSubscriptionClick);
    }

    // Function to handle solar info button click (if it exists)
    const handleSolarInfoClick = () => {
        alert('Learn more about our Solar Energy initiatives! Visit our dedicated page for details.');
    };

    const solarInfoButton = document.querySelector('.solar-info-button');
    if (solarInfoButton) {
        solarInfoButton.addEventListener('click', handleSolarInfoClick);
    }

    // Function to handle wind info button click (if it exists)
    const handleWindInfoClick = () => {
        alert('Learn more about our Wind Energy initiatives! Visit our dedicated page for details.');
    };

    const windInfoButton = document.querySelector('.wind-info-button');
    if (windInfoButton) {
        windInfoButton.addEventListener('click', handleWindInfoClick);
    }

    // Energy Efficiency Page Script

    // Function to handle "Learn More" button click
    const handleLearnMoreClick = () => {
        alert('Explore our comprehensive guide to energy efficiency. Learn how small changes can lead to significant savings and environmental benefits.');
    };

    const learnMoreButton = document.querySelector('.btn.learn-more');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', handleLearnMoreClick);
    }

    // Function to handle "Get a Free Energy Audit" button click
    const handleAuditClick = () => {
        alert('Sign up for a free energy audit to get personalized recommendations for improving your energy efficiency. Visit our signup page for more details.');
    };

    const auditButton = document.querySelector('.btn.get-audit');
    if (auditButton) {
        auditButton.addEventListener('click', handleAuditClick);
    }

    // Function to handle "Additional Resources" links
    const handleResourceClick = (event) => {
        event.preventDefault(); // Prevent the default link action
        alert('Visit the selected resource page for more information.');
    };

    const resourceLinks = document.querySelectorAll('.resources a');
    resourceLinks.forEach(link => {
        link.addEventListener('click', handleResourceClick);
    });

    // Login Page Script

    // Function to handle login form submission
    const handleLoginFormSubmit = (event) => {
        event.preventDefault();
        const email = document.querySelector('#login-email').value;
        const password = document.querySelector('#login-password').value;

        // Add logic to validate credentials and authenticate user
        if (email && password) {
            // Simulating successful login by storing a token in localStorage
            localStorage.setItem('authToken', 'dummy-token');
            alert('Login successful! Welcome back.');
            window.location.href = 'index.html'; // Redirect to homepage or dashboard
        } else {
            alert('Please enter both email and password.');
        }
    };

    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginFormSubmit);
    }

    // Carbon Emission Page Script

    // Function to handle "Learn More About Carbon Emissions" button click
    const handleCarbonInfoClick = () => {
        alert('Learn more about how carbon emissions impact the environment and what steps you can take to reduce your carbon footprint. Visit our dedicated page for details.');
    };

    const carbonInfoButton = document.querySelector('.carbon-info-button');
    if (carbonInfoButton) {
        carbonInfoButton.addEventListener('click', handleCarbonInfoClick);
    }

    // Function to handle "Calculate Your Carbon Footprint" button click
    const handleCarbonCalcClick = () => {
        alert('Use our carbon footprint calculator to estimate your personal carbon emissions. Visit our calculator page for more details.');
    };

    const carbonCalcButton = document.querySelector('.carbon-calc-button');
    if (carbonCalcButton) {
        carbonCalcButton.addEventListener('click', handleCarbonCalcClick);
    }

    // Contact Us Page Script

    // Function to handle contact form submission
    const handleContactFormSubmit = (event) => {
        event.preventDefault();
        alert('Thank you for connecting to us.');
    };

    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});
