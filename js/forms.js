// Forms Page JavaScript

// Download form buttons
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const formTitle = this.closest('.form-card').querySelector('.form-title').textContent;
        alert(`Downloading ${formTitle} form...`);
    });
});
