const selectElem = document.querySelector("select");
let logo = document.querySelector("img");

function changeTheme() {
    let current = selectElem.value;
    console.log(current);

    if (current == "dark") {
        document.body.className = "dark";
        logo.setAttribute("src", "byui-logo_white.png");
    }

    else {
        document.body.classList.remove("dark");
        logo.setAttribute("src", "byui-logo_blue.webp");
    }
}

selectElem.addEventListener("change", changeTheme);

