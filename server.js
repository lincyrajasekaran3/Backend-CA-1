const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/',(req,res) => {
    res.send('server is running');
})
app.post('/signup',(req,res) => {
    const {username, email, password}= req.body;
    if(!username) return res.status(400).json({error:'Username cannot be empty'});
    if(!email) return res.status(400).json({error:'Email cannot be empty'});
    if(!password) return res.status(400).json({error:'Password cannot be empty'});
    else if (length(password)<8) return res.status(400).json({error:'Password length should be greater than 8'});
    else if (length(password)>16) return res.status(400).json({error:'Password length should be less than or equal to 16'});
    
    res.json({message:'Signup successful', data:{username, email}});
    
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
