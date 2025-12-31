// Payments Page JavaScript
// Handles payment button interactions for the payment processing page

/**
 * Initialize payment button handlers
 */
function initializePaymentButtons() {
    // Handle "Pay Now" primary button clicks
    const payNowButtons = document.querySelectorAll('.payment-btn.primary');
    payNowButtons.forEach(function(button) {
        button.addEventListener('click', handlePayNowClick);
    });

    // Handle "Schedule Payment" secondary button clicks  
    const scheduleButtons = document.querySelectorAll('.payment-btn.secondary');
    scheduleButtons.forEach(function(button) {
        button.addEventListener('click', handleScheduleClick);
    });
}

/**
 * Handle pay now button click
 */
function handlePayNowClick() {
    alert('Processing payment...');
}

/**
 * Handle schedule payment button click
 */
function handleScheduleClick() {
    alert('Opening payment scheduler...');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePaymentButtons);
} else {
    initializePaymentButtons();
}
