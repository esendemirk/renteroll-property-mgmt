// Shared navigation functionality across all dashboard pages

// Submenu Toggle
document.querySelectorAll('[data-submenu]').forEach(navLink => {
    navLink.addEventListener('click', function() {
        const submenuId = this.getAttribute('data-submenu') + '-submenu';
        const submenu = document.getElementById(submenuId);
        const chevron = this.querySelector('.chevron');
        
        // Toggle submenu
        submenu.classList.toggle('open');
        chevron.classList.toggle('open');
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        sidebarOverlay.classList.toggle('show');
    });
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
    });
}

// Logout button
const logoutBtn = document.querySelector('.logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}

// Prevent default for placeholder nav links
document.querySelectorAll('.nav-link, .submenu-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});
