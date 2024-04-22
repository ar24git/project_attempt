const toggle = document.querySelector('#dark-mode-toggle');

// Check local storage for dark mode preference
let isDarkModeEnabled = localStorage.getItem('dark-mode') === 'true';
if (isDarkModeEnabled) {
  // Enable dark mode if preference is stored
  setDarkMode(true);
} else {
  // Otherwise, ensure light mode is set
  setDarkMode(false);
}

// Function to set dark mode
function setDarkMode(enabled) {
  if (enabled) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
  }
  if (toggle) {
    toggle.checked = enabled;
  }
}

// Event listener for toggle change
if (toggle) {
  toggle.addEventListener('change', function() {
    setDarkMode(this.checked);
    localStorage.setItem('dark-mode', this.checked ? 'true' : 'false');
  });
}
