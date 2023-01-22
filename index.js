import { file } from "./lib/file.js";

const person = {
    name: 'Somebody'
};
const createFileStatus = await file.create('users', 'person.json', person);
console.log(createFileStatus);

const readFileStatus1 = await file.read('users','person.json');
console.log(readFileStatus1);


const person2 = {
    name: 'Somebody2',
    age: 7
};
const updateFileStatus1 = await file.update('users','person.json', person2);
console.log(updateFileStatus1);

const readFileStatus2 = await file.read('users','person.json');
console.log(readFileStatus2);

const deleteFileStatus1 = await file.delete('users','person.json');
console.log(deleteFileStatus1);

const readFileStatus3 = await file.read('users','person.json');
console.log(readFileStatus3);

