// JavaScript to toggle menu (if needed for further interactivity)
document.querySelector('.menu-toggle').addEventListener('change', function() {
    var menu = document.querySelector('.menu');
    if (this.checked) {
        menu.style.display = 'block'; // Show menu when checked
    } else {
        menu.style.display = 'none'; // Hide menu when unchecked
    }
});
