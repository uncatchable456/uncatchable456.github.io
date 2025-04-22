document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission to the server
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (name && email) {
      alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
    } else {
      alert('Please fill out both fields.');
    }
  
    // Clear the form after submission
    document.getElementById('contactForm').reset();
  });
  