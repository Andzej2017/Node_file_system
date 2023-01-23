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

const users = [
    { name: 'Test1', age: 99, isStudent: true },
    { name: 'Test2', age: 1, isStudent: false },
    { name: 'Test3', age: 6, isStudent: false },
];

for(const user of users){
    const fileName = user.name.toLowerCase() + '.json';
    const status = await file.create('users', fileName, user);
    console.log(fileName, status);
}

const status2 = await file.create('users', 'allusers.json', users);
console.log(status2, users);

const deleteFileStatus2 = await file.delete('users','test1.json');
console.log(deleteFileStatus2);

const [fileStatus, fileInfo] = await file.read('users','test2.json');
if(!fileStatus){
    const fileInfoObject = JSON.parse(fileInfo);
    const userName = fileInfoObject.name ? fileInfoObject.name : 'Test10';
    if(userName === 'Test10'){
        await file.delete('users','test2.json');   
    }
}

