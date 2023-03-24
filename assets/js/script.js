const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});
const darkModeSwitch = document.getElementById("dark-mode-switch");
const body = document.querySelector("body");
let themePreference = localStorage.getItem("themePreference");
if (!themePreference) {
  themePreference = "auto";
  localStorage.setItem("themePreference", themePreference);
}
if (themePreference === "dark") {
  enableDarkMode();
  darkModeSwitch.checked = !0;
} else if (themePreference === "light") {
  disableDarkMode();
  darkModeSwitch.checked = !1;
} else {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    enableDarkMode();
    darkModeSwitch.checked = !0;
  }
}
darkModeSwitch.addEventListener("change", function () {
  if (this.checked) {
    enableDarkMode();
    localStorage.setItem("themePreference", "dark");
  } else {
    disableDarkMode();
    localStorage.setItem("themePreference", "light");
  }
});
function enableDarkMode() {
  body.classList.add("dark-mode");
}
function disableDarkMode() {
  body.classList.remove("dark-mode");
}
const clearLocalStorageBtn = document.getElementById("clear");
clearLocalStorageBtn.addEventListener("click", () => {
  localStorage.clear();
});
