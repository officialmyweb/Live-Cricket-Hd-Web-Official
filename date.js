// date.js - External script to dynamically add today's date and year
window.onload = function() {
    const dateElement = document.getElementById('date-display');
    const today = new Date();
    
    // Format today's date as "Month Day, Year"
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long', // e.g. "Monday"
        month: 'long', // e.g. "December"
        day: 'numeric',
        year: 'numeric',
    });

    // Set the formatted date to the white box
    dateElement.innerHTML = `${formattedDate}`;
}
