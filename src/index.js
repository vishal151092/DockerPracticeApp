const path = require('path');
const express =  require('express');
const port = process.env.PORT || 3000
const app = express();

const publicDirPath=path.join(__dirname, '../public');
app.use(express.static(publicDirPath))
app.get('/hello', (req,res)=>{
    res.send("HI");
})

app.listen(port,()=>{
    console.log(` Server is up and running on ${port}`);
})