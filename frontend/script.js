const messageEl = document.getElementById('message');

fetch('/message') // Fetch the message from the back-end API
  .then(response => response.json())
  .then(data => {
    messageEl.textContent = data.message; // Update the paragraph content
  })
  .catch(error => console.error(error)); // Handle errors
