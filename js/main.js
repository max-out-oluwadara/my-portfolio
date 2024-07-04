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




// Display time in utc

function updateUTCTime() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} UTC`;

    document.getElementById('time-utc').textContent = timeString;
  }

  function updateUTCDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[new Date().getUTCDay()];

    document.getElementById('day-utc').textContent = dayOfWeek;
  }

  updateUTCTime();
  updateUTCDay();
  setInterval(updateUTCTime, 1000); // Update time every second
  setInterval(updateUTCDay, 60000); // Update day every minute
