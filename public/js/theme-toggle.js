document.addEventListener("DOMContentLoaded", function () {
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

  function adjustLayout() {
    const layout = document.getElementById("layout-container");
    if (!layout) return;

    const isIndex = document.body.dataset.page === "index";

    if (isIndex) {
      layout.classList.remove("xl:flex-row");
      layout.classList.add("items-center", "justify-center");
    } else {
      layout.classList.add("xl:flex-row");
      layout.classList.remove("items-center", "justify-center");
    }
  }

  adjustLayout();
});
