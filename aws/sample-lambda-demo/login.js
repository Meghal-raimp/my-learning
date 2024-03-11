const performLogin = (userName, password) => {
    if (isValidUser(userName, password)) {
        return 'log in success';
    } else {
        return 'login failure';
    }
}

const login = (req, res) => {
    console.log('req.body', req.body);
    const result= performLogin(req.body.userName , req.body.password);
    res.send(result);
}

function isValidUser(userName, password){
    return userName === "admin" && password === "admin";
}

module.exports = {
    login,
    performLogin,
}