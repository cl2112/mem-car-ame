import Chapter1Btn from './Chapter1/Chapter1Btn.js';
import MainBtn from '../MainBtn.js';

import createButtons from '../../Utils/CreateBtns.js';
import ChangeImg from '../../Utils/ChangeImg.js';

function StoryBtn() {
    console.log("story btn clicked", this);

    const storyMenuButtons = [
        {
            text: "Chapter 1",
            function: Chapter1Btn
        },
        {
            text: "Chapter 2",
            function: chapter2Btn
        },
        {
            text: "Chapter 3",
            function: chapter3Btn
        },
        {
            text: "Main Menu",
            function: MainBtn
        }
    ];

    const mainImage = 'AA1_Phoenix.png'

    createButtons(storyMenuButtons);
    ChangeImg(mainImage)
    

    function chapter2Btn() {
        console.log("chapter 2 btn clicked", this);
    }

    function chapter3Btn() {
        console.log("chapter 3 btn clicked", this);
    }
}

export default StoryBtn;