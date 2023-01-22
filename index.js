import { file } from "./lib/file.js";

const person = {
    name: 'Somebody'
};
const createFileStatus = await file.create('users', 'person.json', person);
console.log(createFileStatus);

const readFileStatus1 = await file.read('users','person.json');
console.log(readFileStatus1);

/*file.update();

const readFileStatus2 = await file.read('users','person.json');
console.log(readFileStatus2);

file.delete();

const readFileStatus3 = await file.read('users','person.json');
console.log(readFileStatus3);

*/

