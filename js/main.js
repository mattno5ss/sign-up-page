function toggleTheme() {
    const root = document.documentElement;
    const themeName = document.querySelector(".theme-name");
    if (root.className == "dark") {
        root.className = "light";
        themeName.textContent = "dark";
    } else {
        root.className = "dark";
        themeName.textContent = "light";
    }
}

const toggle = document.querySelector(".toggle-btn");
toggle.addEventListener('click', toggleTheme);

/*

*/