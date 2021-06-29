const path = require('path');
const express =  require('express');
const Task = require('./task/task');
const port = process.env.PORT || 3000
const app = express();
app.use(express.json())

const publicDirPath=path.join(__dirname, '../public');
app.use(express.static(publicDirPath))
app.get('/hello', (req,res)=>{
    res.send("HI");
})

app.post('/task', async (req,res)=>{
   let data = await Task.addTask(req.body.title, req.body.desc);
   res.status(201).send(data);
})

app.get('/task',async (req, res)=>{
    let data = await Task.getTask();
    res.send(data);
})

app.listen(port,()=>{
    console.log(` Server is up and running on ${port}`);
})