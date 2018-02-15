const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());
let users = [{ user: 'qwe', pass: 'qwe',token:'Ebx8fOqIv8NPKfe6uDL4' },];

App.post('/api/user/register', (req,res) => {
    function makeToken() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let tokenKey = makeToken();
    users.push({user: req.body.username, pass: req.body.pass, token: tokenKey});
    console.log('registed');
    console.log('user - ',req.body.username);
    console.log('token - ',tokenKey);
    return res.json({
        token: tokenKey,
    });
});

App.post('/api/user/login', (req,res) => {

   let user = users.filter((item)=> {
        return (item.user === req.body.username && item.pass === req.body.pass)
    });

   if (user[0] !== undefined) {
       console.log('true');
       return res.json({
           check: true,
           username: user[0].user,
           password: user[0].pass,
           token: user[0].token
       })
   } else {
       console.log('false');
       return res.json({
           check: false
       })
   }
});
App.post('/api/user/check',(req,res) => {
    let tokenKey = users.filter((item)=> {
        return (item.token === req.body.token)
    });

    if (tokenKey[0] !== undefined) {
        console.log('Token found');
        return res.json({
            check: true
        })
    } else {
        console.log('token not found');
        return res.json({
            check: false
        })
    }
});

App.listen(4000, () => {
    console.log('server is started');
});

