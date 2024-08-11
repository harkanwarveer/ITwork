// Function to handle search form submission
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const query = document.getElementById('search-input').value;
    alert('Search for: ' + query);
});
  
// Function to log messages when a link is clicked
document.querySelectorAll('.nav-link, .aside-link').forEach(link => {
    link.addEventListener('click', function(event) {
        console.log('Link clicked: ' + this.textContent);
    });
});

// Function to handle link clicks in the aside section with an alert
document.querySelectorAll('.aside-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        alert('You clicked on: ' + this.textContent);
    });
});



// Function to change the background color of an element
function changeBackgroundColor(selector, color) {
    document.querySelector(selector).style.backgroundColor = color;
}

// Function to display the current date in a specific element
function displayCurrentDate(selector) {
    const dateElement = document.querySelector(selector);
    if (dateElement) {
        const now = new Date();
        dateElement.textContent = `Today's date is: ${now.toDateString()}`;
    }
}

// Initialize the functions
toggleClassOnClick('.toggle-class', 'active');
changeBackgroundColor('header', '#f0f0f0'); // Change header background color
displayCurrentDate('#current-date'); // Display the current date in an element with id "current-date"


// Image section
function showImage(animal) {
    let imagePath = '';

    switch (animal) {
        case 'duck':
            imagePath = 'images/duck.jpg';
            break;
        case 'kangaroo':
            imagePath = 'images/kangaroo.jpg';
            break;
        case 'lion':
            imagePath = 'images/lion.jpg';
            break;
        case 'panda':
            imagePath = 'images/panda.jpg';
            break;
        default:
            imagePath = '';
    }

    document.getElementById('displayImage').src = imagePath;
}