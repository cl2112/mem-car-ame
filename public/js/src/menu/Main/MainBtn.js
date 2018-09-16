import StoryBtn from './Story/StoryBtn.js';
import ArcadeBtn from './Arcade/ArcadeBtn.js';
import OptionsBtn from './Options/OptionsBtn.js';
import CreditsBtn from './Credits/CreditsBtn.js';

import createButtons from '../Utils/CreateBtns.js';
import ChangeImg from '../Utils/ChangeImg.js';

import mainMenuImageRefs from "../../data/main-menu-img-refs.js";

function mainBtn() {
    const mainMenuButtons = [
        {
            text: "Story",
            function: StoryBtn
        },
        {
            text: "Arcade",
            function: ArcadeBtn
        },
        {
            text: "Options",
            function: OptionsBtn
        },
        {
            text: "Credits",
            function: CreditsBtn
        }
    ];

    const mainImage = 'Trilogy_Phoenix_Point.png';

    createButtons(mainMenuButtons);
    ChangeImg(mainMenuImageRefs[Math.floor(Math.random() * mainMenuImageRefs.length)]);
}

export default mainBtn;