// import robot from 'robotjs';
import tesseract from 'tesseract.js';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import screenshot from 'screenshot-desktop';
import { saveScreenCapture } from './utils.js';

// robot.setMouseDelay(100);
// const height = screenSize.height / 2 - 10;
// const width = screenSize.width;
// robot.moveMouse(5, height * 2 +5);
// robot.mouseClick("left");
// setTimeout(() => robot.mouseClick("left"), [500]);


// Screenshot the window
// Look for the required text
// If it's not there, look for the button to refresh
// Move mouse to the button and click refresh
// If it has the desired text on the screen
// Move the mouse to the buy button and click it
const now = Date.now();
const imagePath = await saveScreenCapture(now);
if (imagePath) {
    console.log(imagePath);

    const res = await tesseract.recognize(imagePath);
    const imageText = res?.data;

    console.log(222222, imageText);
}



