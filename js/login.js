// Login Page JavaScript

const loginForm = document.getElementById('loginForm');
const loginButton = document.querySelector('.btn-login');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Add loading state to button
    loginButton.style.opacity = '0.7';
    loginButton.style.cursor = 'not-allowed';
    
    // Simulate login delay
    setTimeout(function() {
        window.location.href = 'dashboard.html';
    }, 600);
});
