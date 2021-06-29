const fs = require('fs');
const path = require('path');


// Add, remove, update and List
const fileBase = path.join(__dirname, '../../fileBase/data.txt');
const addTask = async (title, desc)=>{
    let obj = {
        title,
        desc
    };
    
    let result = await fs.writeFileSync(fileBase, JSON.stringify(obj));
    return result;
} 

const getTask = async ()=>{
    let result = await fs.readFileSync(fileBase);
    return result; 
}

module.exports = {
    addTask,
    getTask
}