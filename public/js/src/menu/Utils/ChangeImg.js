function ChangeImg(image) {
    const wrapper = document.querySelector('.image-wrapper');

    // remove any previous images
    wrapper.querySelectorAll("div").forEach(v => wrapper.removeChild(v));

    // Create the image elements.
    const mainImage = document.createElement('div');
    mainImage.style.backgroundImage = `url(./images/menu-images/${image})`;
    mainImage.classList.add('main-image');

    const mainImageBackground1 = document.createElement('div');
    mainImageBackground1.classList.add('main-image-background-1');
    const mainImageBackground2 = document.createElement('div');
    mainImageBackground2.classList.add('main-image-background-2');
    const mainImageBackground3 = document.createElement('div');
    mainImageBackground3.classList.add('main-image-background-3');

    const imageTop = document.createElement('div');
    imageTop.classList.add('image-top');

    const imageBottom = document.createElement('div');
    imageBottom.classList.add('image-bottom');

    wrapper.appendChild(mainImage);
    wrapper.appendChild(mainImageBackground1);
    wrapper.appendChild(mainImageBackground2);
    wrapper.appendChild(mainImageBackground3);
    wrapper.appendChild(imageTop);
    wrapper.appendChild(imageBottom);
}

export default ChangeImg;