function initDarkMode() {
    if (localStorage.getItem("darkMode") === null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem("darkMode", "true");
        }
        else {
            localStorage.setItem("darkMode", "false");
        }
    }
    updateDarkMode();
}
function toggleDarkMode() {
    switch (localStorage.getItem("darkMode")) {
        case "true":
            localStorage.setItem("darkMode", "false");
            break;
        case "false":
            localStorage.setItem("darkMode", "true");
            break;
    }
    updateDarkMode();
}
function updateDarkMode() {
    var button = document.getElementById("button-dark-mode-toggle");
    switch (localStorage.getItem("darkMode")) {
        case "true": {
            var e = document.getElementsByClassName("theme-light");
            for (var i = 0; i < e.length; i++) {
                e[i].classList.replace("theme-light", "theme-dark");
            }
            button.textContent = "dark_mode";
            break;
        }
        case "false": {
            var e = document.getElementsByClassName("theme-dark");
            for (var i = 0; i < e.length; i++) {
                e[i].classList.replace("theme-dark", "theme-light");
            }
            button.textContent = "light_mode";
            break;
        }
        default:
            initDarkMode();
    }
}
