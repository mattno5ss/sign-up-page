function toggleTheme() {
    const root = document.documentElement;
    const modeImage = document.querySelector(".mode");

    if (root.className == "dark") {
        root.className = "light";
        modeImage.src = "img/dark_mode_moon.svg";
    } else {
        root.className = "dark";
        modeImage.src = "img/light_mode_sun.svg";
    }
}

function validate() {
    const password = document.querySelector("#pass");
    const confirm = document.querySelector("#confirm");
    const message = document.querySelector(".validation_msg");

    if (password.value == confirm.value) {
        return true;
    } else {
        password.style.border = "2px solid red";
        confirm.style.border = "2px solid red";
        message.textContent = "*Passwords do not match!";
        return false;
    }
}

/*
LISTENERS
*/

const toggle = document.querySelector(".toggle-btn");
toggle.addEventListener('click', toggleTheme);