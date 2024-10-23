// Select the canvas element using its ID
const ctx = document.getElementById('salesChart').getContext('2d');

// Create the chart using Chart.js
const salesChart = new Chart(ctx, {
    type: 'bar', // The type of chart (bar chart in this case)
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
        datasets: [{
            label: 'Sales in USD ($)',
            data: [12000, 15000, 17500, 22000, 18000, 25000], // Dummy sales data for each month
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar background color
            borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
            borderWidth: 1 // Bar border width
        }]
    },
    options: {
        responsive: true, // Makes the chart responsive
        scales: {
            y: {
                beginAtZero: true // Ensures the Y-axis starts from zero
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Sales Performance Over the Last Six Months',
                font: {
                    size: 18
                }
            }
        }
    }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
// Dropdown toggle functionality
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Close dropdown if clicked outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-toggle')) {
        dropdownMenu.classList.remove('show');
    }
});


