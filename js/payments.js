// Payments Page JavaScript

// Pay Now button
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('Pay Now')) {
            alert('Processing payment...');
        }
    });
});

// Schedule Payment button
document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('Schedule')) {
            alert('Opening payment scheduler...');
        }
    });
});
