import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import screenshot from 'screenshot-desktop';


// TO DO: Handle error case
/**
 * 
 * @param {*} now 
 * @returns the path tothe image that was just saved
 */
async function saveScreenCapture(now) {
  const screenCapture = await screenshot({ format: 'png' });

  /**
   * By using __dirname in a Node script, you can get the path of the directory housing the current JavaScript file,
   * many Node.js applications use this global variable.
   * When used in a CommonJS module (when "type": "module" is not defined in your application’s package.json file),
   * __dirname works without hassles, but, when used in an ES module, the error “__dirname is not defined in ES module scope” shows up.
   * Since what we need is the name of the directory the current script/module is contained in,
   * we can leverage Node.js’s path module. There is also a function in the url module: fileURLToPath,
   * that returns a fully-resolved path to the file.
   */
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory

  const directory = path.join(__dirname, '/images');
  const imagePath = directory + `\\screenshot-${now}.png`;

  fs.writeFileSync(imagePath, screenCapture);

  return imagePath;
}

export { saveScreenCapture };
