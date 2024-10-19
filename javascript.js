  // Function to fade out the body, navigate to a new page, and fade in the new page
  function fadeOutAndRedirect(link) {
    document.body.style.transition = 'opacity 0.5s ease'; // Set the transition for opacity
    document.body.style.opacity = '0'; // Start the fade-out effect

    // Wait for the fade-out duration before redirecting
    setTimeout(() => {
        window.location.href = link.href; // Redirect to the new page
    }, 500); // Duration must match the CSS transition time
}

// Attach event listeners to all project links
document.querySelectorAll('.project-box.img').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        fadeOutAndRedirect(this); // Call the fade-out function
    });
});

// Function to fade in the body when the page loads
window.onload = () => {
    document.body.style.opacity = '1'; // Set the initial opacity to 1
};