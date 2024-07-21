document.addEventListener('DOMContentLoaded', () => {

  // Function to handle subscription button click
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
});

