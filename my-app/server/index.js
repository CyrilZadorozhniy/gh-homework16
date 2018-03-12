const express = require('express');
const bodyParser = require('body-parser');
const App = express();

App.use(bodyParser.json());
let users = [{ user: 'qwe', pass: 'qwe',token:'Ebx8fOqIv8NPKfe6uDL4' },];

let customers =[{id: '0',name:'John Doe', url: 'http://drive.google.com/uc?export=view&id=10brDxrX4M0kbMSLZwahHsaaJ4ETkk1k8', active: true, lastActivity: 'Online now!', position: 'CEO', mail:'johndoe@design.com', phone:'(000) 111 222 333'},
    {id: '1', name:'Nina Jones', url: 'http://drive.google.com/uc?export=view&id=1JQoXjH2JS-nRdLUM1JopjuhbymSsZfoC', active: true, lastActivity: 'Online now!',  position: 'UX Designer', mail:'ninajones@design.com', phone:'(000) 111 222 333'},
    {id: '2', name:'Alex Smith', url: 'http://drive.google.com/uc?export=view&id=1uRGmRV6-yJhq_JHUdh18sxFQ9BJ1YZcb', active: true, lastActivity: 'Online now!', position: 'Web Designer', mail:'alexsmith@design.com', phone:'(000) 111 222 333'},
    {id: '3', name:'Ann Clooney', url: 'http://drive.google.com/uc?export=view&id=1899jApzt0Jck3LXhqGwNPGCEjF48x3Oz', active: false, lastActivity: '20 minutes ago', position: 'Account Manager', mail:'annclooney@design.com', phone:'(000) 111 222 333'},
    {id: '4', name:'Patric Smith', url: 'http://drive.google.com/uc?export=view&id=1HOtvVKc3juNZ10qHYZli1wQWtTlInlfP', active: false, lastActivity: '40 minutes ago', position: 'Project Manager', mail:'patricksmith@design.com', phone:'(000) 111 222 333'},
    {id: '5', name:'Nicky Hunt', url: 'http://drive.google.com/uc?export=view&id=1_IDtG8jD0MbuCt3M6n9QVfjwawPGe4tM', active: false, lastActivity: '1 hour ago', position: 'Product Designer', mail:'nickyhunt@design.com', phone:'(000) 111 222 333'},
    {id: '6', name:'Jane Doe', url: 'http://drive.google.com/uc?export=view&id=1GBslPnxPQERxGwsjR_M_5QUGDMPQ_6EK', active: false, lastActivity: '2 days ago', position: 'Graphic Designer', mail:'janedoe@design.com', phone:'(000) 111 222 333'},{id: '7', name:'Ann Clooney', url: 'http://drive.google.com/uc?export=view&id=1899jApzt0Jck3LXhqGwNPGCEjF48x3Oz', active: false, lastActivity: '20 minutes ago', position: 'Account Manager', mail:'annclooney@design.com', phone:'(000) 111 222 333'},
    {id: '8', name:'Nicky Hunt', url: 'http://drive.google.com/uc?export=view&id=1_IDtG8jD0MbuCt3M6n9QVfjwawPGe4tM', active: false, lastActivity: '1 hour ago', position: 'Product Designer', mail:'nickyhunt@design.com', phone:'(000) 111 222 333'},{id: '9',name:'John Doe', url: 'http://drive.google.com/uc?export=view&id=10brDxrX4M0kbMSLZwahHsaaJ4ETkk1k8', active: true, lastActivity: 'Online now!', position: 'CEO', mail:'johndoe@design.com', phone:'(000) 111 222 333'},
    {id: '10', name:'Nina Jones', url: 'http://drive.google.com/uc?export=view&id=1JQoXjH2JS-nRdLUM1JopjuhbymSsZfoC', active: true, lastActivity: 'Online now!',  position: 'UX Designer', mail:'ninajones@design.com', phone:'(000) 111 222 333'}, {id: '11', name:'Nicky Hunt', url: 'http://drive.google.com/uc?export=view&id=1_IDtG8jD0MbuCt3M6n9QVfjwawPGe4tM', active: false, lastActivity: '1 hour ago', position: 'Product Designer', mail:'nickyhunt@design.com', phone:'(000) 111 222 333'},
    {id: '12', name:'Patric Smith', url: 'http://drive.google.com/uc?export=view&id=1HOtvVKc3juNZ10qHYZli1wQWtTlInlfP', active: false, lastActivity: '40 minutes ago', position: 'Project Manager', mail:'patricksmith@design.com', phone:'(000) 111 222 333'}, {id: '13', name:'Ann Clooney', url: 'http://drive.google.com/uc?export=view&id=1899jApzt0Jck3LXhqGwNPGCEjF48x3Oz', active: false, lastActivity: '20 minutes ago', position: 'Account Manager', mail:'annclooney@design.com', phone:'(000) 111 222 333'},
    {id: '14', name:'Patric Smith', url: 'http://drive.google.com/uc?export=view&id=1HOtvVKc3juNZ10qHYZli1wQWtTlInlfP', active: false, lastActivity: '40 minutes ago', position: 'Project Manager', mail:'patricksmith@design.com', phone:'(000) 111 222 333'},
    {id: '15', name:'Nicky Hunt', url: 'http://drive.google.com/uc?export=view&id=1_IDtG8jD0MbuCt3M6n9QVfjwawPGe4tM', active: false, lastActivity: '1 hour ago', position: 'Product Designer', mail:'nickyhunt@design.com', phone:'(000) 111 222 333'},
    {id: '16', name:'Nicky Hunt', url: 'http://drive.google.com/uc?export=view&id=1_IDtG8jD0MbuCt3M6n9QVfjwawPGe4tM', active: false, lastActivity: '1 hour ago', position: 'Product Designer', mail:'nickyhunt@design.com', phone:'(000) 111 222 333'},];

App.post('/api/user/register', (req,res) => {
    function randomValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function makeToken() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let tokenKey = makeToken();
    users.push({
        user: req.body.username,
        pass: req.body.pass,
        token: tokenKey,
        charts: {
            salesChart:{
                lastYear:[ ["Websites",randomValue(800,1000)],["Logo", randomValue(250,1000)],["Social Media",randomValue(800,1000)],["Adwords", randomValue(800,1000)], ["E-Commerce", randomValue(800,1000)]],
                lastMonth:[ ["Websites",randomValue(300,800)],["Logo", randomValue(50,250)],["Social Media",randomValue(300,800)],["Adwords", randomValue(300,800)], ["E-Commerce", randomValue(300,800)]],
                lastWeek:[ ["Websites",randomValue(1,300)],["Logo", randomValue(1,50)],["Social Media",randomValue(1,300)],["Adwords", randomValue(1,300)], ["E-Commerce", randomValue(1,300)]]
            },
            reportsChart:{
                lastYear:[randomValue(700,1000),randomValue(700,1000),randomValue(700,1000),randomValue(700,1000),randomValue(700,1000),randomValue(700,1000),randomValue(700,1000),randomValue(700,1000),randomValue(700,1000),randomValue(700,1000),randomValue(700,1000),randomValue(700,1000)],
                lastMonth:[randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250)],
                lastWeek:[randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250),randomValue(1,250)]
            }
        }
    });
    console.log('registed');
    console.log('user - ',req.body.username);
    console.log('token - ',tokenKey);
    return res.json({
        token: tokenKey,
        username: req.body.username
    });
});

App.post('/api/user/login', (req,res) => {

    let user = users.filter((item)=> {
        return (item.user === req.body.username && item.pass === req.body.pass)
    });

    if (user[0]) {
        console.log('true');
        return res.json({
            check: true,
            username: user[0].user,
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
    let validUser = users.filter((item)=> {
        return (item.token === req.body.token)
    });

    if (validUser[0]) {
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
App.post('/api/user/charts',(req,res) => {
    let validUser = users.filter((item)=> {
        return (item.token === req.body.token)
    });
    console.log('Charts sent');
    return res.json({
        charts: validUser[0].charts
    })
});
App.get('/api/user/customers',(req,res) => {
    return res.json({
        customers: customers
    })
});

App.listen(4000, () => {
    console.log('server is started');
});