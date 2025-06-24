// theme-init.js
(function() {
  try {
    var themes = ["variant-1", "variant-2", "variant-3"];
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme && themes.includes(savedTheme)) {
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add("variant-1");
    }
  } catch(e){}
})(); 