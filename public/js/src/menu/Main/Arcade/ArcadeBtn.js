import StartBtn from './Start/StartBtn.js';

import createMenuButtons from '../../Utils/CreateBtns.js';

function ArcadeBtn() {
    console.log("arcade btn clicked", this);

    const arcadeMenuButtons = [
        {
            text: 'Start',
            function: StartBtn
        }
    ];

    createMenuButtons(arcadeMenuButtons);
}

export default ArcadeBtn;