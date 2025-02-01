const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu")

function toggleMenu() {
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const innerWidth = window.innerWidth;

    if (innerWidth > 1000) {
        menu.classList.remove("hide");
    }

    else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(imgAddress, altText) {
    return `
    <div class="modal">
        <div class="modal-content">
            <button class="viewer">X</button>
            <img src="${imgAddress}" alt="${altText}">
        </div>
    </div>`;
}

function viewHandler(event) {
    const img = event.target;
    const filename = img.getAttribute("src");
    const parts = filename.split("-");
    const imgName = parts[0] + "-full.jpeg";

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgName, img.alt));

    const closeButton = document.querySelector(".viewer");
    closeButton.addEventListener("click", closeViewer);
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

function closeViewer() {
    const viewer = document.querySelector(".modal");
    viewer.remove();
}
