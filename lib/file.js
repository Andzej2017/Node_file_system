import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const file = {};
/**
 * 
 * @param {*} dir 
 * @param {*} fileName 
 * @returns 
 */
file.fullPath = (dir, fileName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname,'../.data', dir, fileName);
}
/**
 * Async function that creates file in specific folder ant writes initial content.

 * @param {Object} content Content of the file(JS object)
 * @param {string} content.name User name
 * @param {number} content.age User age
 * @returns {Promise<[boolean, string|object]>} Status(true/false), whether the file was successfully created
 */
file.create = async (dir, fileName, content) => {
    let fileDescriptor = null;
    try {
        const filePath = file.fullPath(dir,fileName);
        fileDescriptor = await fs.open(filePath, 'wx');
        await fs.writeFile(fileDescriptor, JSON.stringify(content));
        return [false, 'Success'];
    } catch (error) {
        return [true, error];   
    } finally {
        if(fileDescriptor) {
            await fileDescriptor.close();
        }
        
    }
}
/**
 * Function reads file and returns file content
 * @param {string} dir Folder of file destination.
 * @param {string} fileName Name of the file with extension.
 * @returns {Promise<[boolean, string|object]>} Status(true/false), whether the file was read successfully;
 *  Result: file content or error object.
 */
file.read = async (dir, fileName) => {
    const filePath = file.fullPath(dir, fileName);
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return [false, fileContent];
    } catch (error) {
        return [true, error];
    }  
}

file.update = (dir, fileName, content) => {
    
}

file.delete = (dir, fileName) => {
    
}


export { file }