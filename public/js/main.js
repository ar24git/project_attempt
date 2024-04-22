const toggle = document.querySelector('#dark-mode-toggle');

console.log(localStorage);

//an yparxei to toggle
if(toggle){
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
          // Enable dark mode
          document.documentElement.setAttribute('data-bs-theme', 'dark');
          localStorage.setItem('dark-mode', 'true');
        } else {
          // Disable dark mode
          document.documentElement.setAttribute('data-bs-theme', 'light');
          localStorage.removeItem('dark-mode');
        }
      });
}


// Check local storage for dark mode preference
let isDarkModeEnabled = localStorage.getItem('dark-mode') === 'true';
console.log(isDarkModeEnabled);
console.log("hiiiiiiiiiiiiiiiii");
if (isDarkModeEnabled) {
  // Enable dark mode if preference is stored
  if(toggle){
    toggle.checked = true;
  }
  
  document.documentElement.setAttribute('data-bs-theme', 'dark');
} else {
  // Otherwise, ensure light mode is set
  if(toggle){
    toggle.checked = false;
  }
  
  document.documentElement.setAttribute('data-bs-theme', 'light');
}
