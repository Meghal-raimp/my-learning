const handler = require('./index.js').handler;

const localRun = async () => {
    const loginSucessResponce = handler({userName : 'admin', password: 'admin'});
    const loginFailResponce = handler({userName : 'admin', password: '111'});
    console.log('loginSucessResponce', loginSucessResponce);
    console.log('loginFailResponce', loginFailResponce);
}

localRun();

