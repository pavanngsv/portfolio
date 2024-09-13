function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// JavaScript to show/hide the scroll-to-top button
const scrollTopButton = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    // Check the scroll position
    if (window.scrollY > 200) { // Adjust the value '200' to set when the button should appear
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Optional: Scroll smoothly to the top when the button is clicked
scrollTopButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
});
