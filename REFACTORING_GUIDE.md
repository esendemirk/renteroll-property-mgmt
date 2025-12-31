# Renteroll - Code Refactoring Guide

## Overview
All CSS and JavaScript has been separated from HTML files into external files for better maintainability and code organization.

## File Structure

```
renteroll/
├── index.html
├── dashboard.html
├── properties.html
├── residents.html
├── payments.html
├── forms.html
├── README.md
├── css/
│   ├── styles.css          # Shared global styles
│   ├── dashboard.css       # Dashboard-specific styles
│   ├── properties.css      # Properties page styles
│   ├── residents.css       # Residents page styles
│   ├── payments.css        # Payments page styles
│   └── forms.css           # Forms page styles
└── js/
    ├── app.js              # Shared navigation & sidebar logic
    ├── login.js            # Login page functionality
    ├── properties.js       # Properties search & tenant management
    ├── residents.js        # Residents search functionality
    ├── payments.js         # Payment button handlers
    └── forms.js            # Form download handlers
```

## CSS Files

### css/styles.css (Shared)
Contains:
- CSS variables (color palette)
- Reset styles
- Login page styles
- Sidebar navigation
- Main content layout
- Mobile responsive styles
- Search bar styles

### Page-Specific CSS Files
- `css/dashboard.css` - Dashboard stat cards and info sections
- `css/properties.css` - Properties table, tenant cards, manage buttons
- `css/residents.css` - Residents table styling
- `css/payments.css` - Payment card and action buttons
- `css/forms.css` - Form cards and download buttons

## JavaScript Files

### js/app.js (Shared - All Dashboard Pages)
- Submenu toggle functionality
- Mobile menu toggle
- Sidebar overlay
- Logout button
- Prevent default for placeholder links

### Page-Specific JS Files
- `js/login.js` - Login form submission with redirect
- `js/properties.js` - Property search, tenant expansion, add/update/move-out
- `js/residents.js` - Resident search filtering
- `js/payments.js` - Payment button click handlers
- `js/forms.js` - Form download button handlers

## HTML File Updates Required

### All HTML Files Need:
1. Remove all `<style>` tags
2. Add appropriate CSS links in `<head>`
3. Remove all inline `<script>` tags
4. Add appropriate JS links before closing `</body>`

### Example Head Section:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Renteroll</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Shared Styles -->
    <link rel="stylesheet" href="css/styles.css">
    
    <!-- Page-Specific Styles -->
    <link rel="stylesheet" href="css/PAGE_NAME.css">
</head>
```

### Example Script Section (Before </body>):
```html
    <!-- Shared JavaScript -->
    <script src="js/app.js"></script>
    
    <!-- Page-Specific JavaScript -->
    <script src="js/PAGE_NAME.js"></script>
</body>
```

## Specific HTML Updates

### index.html
```html
<head>
    ...
    <link rel="stylesheet" href="css/styles.css">
</head>
<body class="login-page">
    ...
    <script src="js/login.js"></script>
</body>
```

### dashboard.html
```html
<head>
    ...
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/dashboard.css">
</head>
<body class="dashboard-page">
    ...
    <script src="js/app.js"></script>
</body>
```

### properties.html
```html
<head>
    ...
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/properties.css">
</head>
<body class="dashboard-page">
    ...
    <script src="js/app.js"></script>
    <script src="js/properties.js"></script>
</body>
```

### residents.html
```html
<head>
    ...
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/residents.css">
</head>
<body class="dashboard-page">
    ...
    <script src="js/app.js"></script>
    <script src="js/residents.js"></script>
</body>
```

### payments.html
```html
<head>
    ...
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/payments.css">
</head>
<body class="dashboard-page">
    ...
    <script src="js/app.js"></script>
    <script src="js/payments.js"></script>
</body>
```

### forms.html
```html
<head>
    ...
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/forms.css">
</head>
<body class="dashboard-page">
    ...
    <script src="js/app.js"></script>
    <script src="js/forms.js"></script>
</body>
```

## Body Class Names
Important: Add correct body class for proper styling:
- Login page: `<body class="login-page">`
- All dashboard pages: `<body class="dashboard-page">`

## Benefits of This Structure

1. **Maintainability**: CSS and JS are now in single files that can be edited once
2. **Performance**: Browsers can cache CSS and JS files
3. **Collaboration**: Developers can work on different files without conflicts
4. **Organization**: Clear separation of concerns
5. **Scalability**: Easy to add new pages or features

## Next Steps for Developer

1. Update each HTML file to remove inline styles and scripts
2. Add appropriate CSS and JS file references
3. Test all pages to ensure functionality is preserved
4. Consider adding build tools (optional):
   - CSS minification
   - JS bundling
   - Asset optimization

## Testing Checklist

- [ ] Login page works and redirects to dashboard
- [ ] Dashboard displays correctly
- [ ] Properties page:
  - [ ] Search filters properties and tenants
  - [ ] Manage button expands/collapses tenant details
  - [ ] Add/Update/Move Out buttons work
- [ ] Residents page search works
- [ ] Payments page buttons trigger alerts
- [ ] Forms page download buttons work
- [ ] Mobile menu works on all pages
- [ ] Sidebar navigation works
- [ ] Logout returns to login page
