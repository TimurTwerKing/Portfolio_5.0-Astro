window.addEventListener("load", function () {
  const themeButton = document.getElementById("theme-toggle");
  const root = document.documentElement;

  const themes = ["variant-1", "variant-2", "variant-3"];
  let currentThemeIndex = 0;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && themes.includes(savedTheme)) {
    root.classList.add(savedTheme);
    currentThemeIndex = themes.indexOf(savedTheme);
  }

  themeButton.addEventListener("click", function () {
    root.classList.remove(themes[currentThemeIndex]);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    root.classList.add(themes[currentThemeIndex]);
    localStorage.setItem("theme", themes[currentThemeIndex]);
  });
});
