module.exports = function login (req, res) {
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