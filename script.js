// This script handles interactions on multiple pages and can be expanded for more functionality
document.addEventListener('DOMContentLoaded', () => {

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

});
