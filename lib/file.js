import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const file = {};

file.fullPath = (dir, fileName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname,'../.data', dir, fileName);
}

file.create = async (dir, fileName, content) => {
    let fileDescriptor = null;
    try {
        const filePath = file.fullPath(dir,fileName);
        fileDescriptor = await fs.open(filePath, 'wx');
        await fs.writeFile(fileDescriptor, JSON.stringify(content));
        return true;
    } catch (error) {
        return false;   
    } finally {
        if(fileDescriptor) {
            await fileDescriptor.close();
        }
        
    }
}

file.read = (dir, fileName) => {
    
}

file.update = (dir, fileName, content) => {
    
}

file.delete = (dir, fileName) => {
    
}


export { file }