import { file } from "./lib/file.js";

const person = {
    name: 'Somebody'
};
const status = await file.create('users', 'person.json', person);
console.log(status)
file.read();
