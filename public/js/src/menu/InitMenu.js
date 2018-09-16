import MainBtn from './Main/MainBtn.js';

// Set up the start screen functionality
function initMenu() {
    // variables for the menu options.
    const container = document.querySelector(".container");
    const menuWrapper = document.createElement("div");
    const imageWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");
    imageWrapper.classList.add("image-wrapper");
    container.appendChild(menuWrapper);
    container.appendChild(imageWrapper);

    
    MainBtn();
}

export default initMenu;