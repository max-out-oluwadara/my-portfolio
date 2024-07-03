// Open Nave bar toogle  Button on Medium Screen
document.addEventListener('DOMContentLoaded', function() {
    const toggleNavButton = document.querySelector('.toggle-nav');
    const container = document.querySelector('.container');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');

    function toggleNav() {
        const isExpanded = toggleNavButton.getAttribute('aria-expanded') === 'true';
        toggleNavButton.setAttribute('aria-expanded', !isExpanded);
        container.classList.toggle('active');

        // Change button text and header height
        if (isExpanded) {
            toggleNavButton.textContent = '☰';
            header.classList.add('closed');
        } else {
            toggleNavButton.textContent = 'X';
            header.classList.remove('closed');
        }
    }

    //Fuction to close navbar when click anywhere on the webpage and x button
    function closeNav() {
        if (toggleNavButton.getAttribute('aria-expanded') === 'true') {
            toggleNavButton.setAttribute('aria-expanded', 'false');
            container.classList.remove('active');
            toggleNavButton.textContent = '☰';
            header.classList.add('closed');
        }
    }

    toggleNavButton.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleNav();
    });

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !toggleNavButton.contains(event.target)) {
            closeNav();
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            closeNav();
        }
    });

    // Initialize the header as closed
    header.classList.add('closed');
});

