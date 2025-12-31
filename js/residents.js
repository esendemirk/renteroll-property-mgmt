// Residents Page JavaScript

// Search functionality
const searchInput = document.getElementById('searchInput');
const tableRows = document.querySelectorAll('.residents-table tbody tr');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();

        tableRows.forEach(row => {
            const name = row.cells[0].textContent.toLowerCase();
            const phone = row.cells[1].textContent.toLowerCase();
            const email = row.cells[2].textContent.toLowerCase();
            const address = row.cells[5].textContent.toLowerCase();

            if (searchTerm === '' || 
                name.includes(searchTerm) || 
                phone.includes(searchTerm) || 
                email.includes(searchTerm) || 
                address.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}
