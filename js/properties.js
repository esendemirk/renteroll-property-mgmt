// Properties Page JavaScript

// Search functionality
const searchInput = document.getElementById('searchInput');
const propertyRows = document.querySelectorAll('.properties-table tbody tr:not(.tenant-details-row)');
const tenantDetailsRows = document.querySelectorAll('.tenant-details-row');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();

        propertyRows.forEach((row, index) => {
            const propertyAddress = row.querySelector('.property-address').textContent.toLowerCase();
            const propertyNickname = row.querySelector('.property-nickname').textContent.toLowerCase();
            
            // Get corresponding tenant details row
            const detailsRow = tenantDetailsRows[index];
            const tenantCards = detailsRow.querySelectorAll('.tenant-card');
            
            // Check if property name matches
            const propertyMatches = propertyAddress.includes(searchTerm) || 
                                   propertyNickname.includes(searchTerm);
            
            // Check if any tenant name matches
            let tenantMatches = false;
            tenantCards.forEach(card => {
                const tenantName = card.querySelector('.tenant-info-value').textContent.toLowerCase();
                if (tenantName.includes(searchTerm)) {
                    tenantMatches = true;
                }
            });

            // Show/hide row based on matches
            if (searchTerm === '' || propertyMatches || tenantMatches) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
                // Also hide details row when property is hidden
                detailsRow.classList.remove('show');
                row.querySelector('.manage-btn').classList.remove('expanded');
            }
        });
    });
}

// Manage button - expand/collapse tenant details
document.querySelectorAll('.manage-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const propertyId = this.getAttribute('data-property');
        const detailsRow = document.getElementById(propertyId + '-details');
        
        // Toggle the details row
        detailsRow.classList.toggle('show');
        
        // Rotate the chevron icon
        this.classList.toggle('expanded');
    });
});

// Add tenant buttons
document.querySelectorAll('.add-tenant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const propertyName = this.closest('.tenant-details-container').querySelector('h4').textContent;
        alert(`Adding new tenant to ${propertyName.replace('Tenants - ', '')}...`);
    });
});

// Update tenant buttons
document.querySelectorAll('.update-tenant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tenantName = this.closest('.tenant-card').querySelector('.tenant-info-value').textContent;
        alert(`Updating information for ${tenantName}...`);
    });
});

// Move out tenant buttons
document.querySelectorAll('.moveout-tenant-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tenantName = this.closest('.tenant-card').querySelector('.tenant-info-value').textContent;
        if (confirm(`Are you sure you want to move out ${tenantName}?`)) {
            alert(`Processing move-out for ${tenantName}...`);
        }
    });
});
