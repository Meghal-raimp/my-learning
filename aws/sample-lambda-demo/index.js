const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const login = (req, res) => {
    console.log('req.body', req.body);
    if(req.body.userName === "admin" && req.body.password === "admin")
    {
        res.send('log in success')
    }
    else
    {
        res.status(401);
        res.send('login failure');
    }

}

app.post('/',  login)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})