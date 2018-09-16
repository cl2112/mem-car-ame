function createButtons(buttons) {
    const wrapper = document.querySelector('.menu-wrapper');

    // remove any previous buttons
    wrapper.querySelectorAll("div").forEach(v => wrapper.removeChild(v));

    // create the buttons for the menu options
    buttons.forEach(v => {
        const btn = document.createElement("div");
        btn.innerText = v.text;
        btn.classList.add("menu-btn");

        btn.addEventListener("click", v.function);

        wrapper.appendChild(btn);
    });
}

export default createButtons;