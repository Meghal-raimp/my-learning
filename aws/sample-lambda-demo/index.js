const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
const login = require('./login.js');
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/',  login)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})