module.exports = function performLogin(userName, password){
    if (isValidUser(userName, password)) {
        return 'log in success';
    } else {
        return 'login failure';
    }
}

function isValidUser(userName, password){
    return userName === "admin" && password === "admin";
}