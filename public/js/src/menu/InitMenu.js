import MainBtn from './Main/MainBtn.js';

// Set up the start screen functionality
function initMenu() {
    // variables for the menu options.
    const container = document.querySelector(".container");
    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-wrapper");
    container.appendChild(wrapper);

    MainBtn();
}

export default initMenu;