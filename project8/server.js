const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');
const path = require('path');

const myFile = __dirname + '/users.json';
const app = express();


//Set requests:

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



//Use requests:

app.use('/', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



//Get requests:

app.get('/userTable', (req, res) => {
    fs.readFile(myFile, 'utf8', (err, data) => {
        let myData = JSON.parse(data);

        res.render('userTable', {users: myData.users});

        if (err) console.log(err);
    });
});

app.get('/editUser/:userId', (req, res) => {
    let userId = req.params.userId;
    let myCallBack = (index, jsonData) => {
        res.render('editUser', {user: jsonData.users[index]});
    };

    fs.readFile(myFile, 'utf8', (err, data) => {
        let myData = JSON.parse(data);

        myData.users.forEach((user, index) => {
            if (Number(user.userId) === Number(userId)) {
                myCallBack(index, myData);
            }
        });

        if (err) console.log(err);
    });
});

app.get('/deleteUser/:userId', (req, res) => {
    let userId = req.params.userId;

    let myCallBack = (index, jsonData) => {
        jsonData.users.splice(index,1);
        res.redirect('/userTable');
        fs.writeFile(myFile, JSON.stringify(jsonData), (err) => {
            if (err) throw err;
        });
    };

    fs.readFile(myFile, 'utf8', (err, data) => {
        let myData = JSON.parse(data);

        myData.users.forEach((user, index) => {
            if (Number(user.userId) === Number(userId)) {
                myCallBack(index, myData);
            }
        });

        if (err) console.log(err);
    });
});



//Post requests:

app.post('/userTable', (req, res) => {
    fs.readFile(myFile, 'utf8', (err, data) => {
            let index = 0;
            let myData = JSON.parse(data);
            let userObj = {
                userId: 0,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailAddress: req.body.emailAddress,
                address: req.body.address,
                age: req.body.age
            };

            myData.users.forEach(user => {
                if (user.userId === index) index++;
            });

            userObj.userId = Number(index);

            myData.users.push(userObj);

            res.render('userTable', {users: myData.users});

            fs.writeFile(myFile, JSON.stringify(myData), 'utf8', err => {
                console.log(err)
            });

            if (err) console.log(err);
    });
});

app.post('/editUser/:userId', (req, res) => {
    let userId = req.params.userId;
    let userObj = {
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        address: req.body.address,
        age: req.body.age
    };
    let myCallBack = (index, jsonData) => {
        jsonData.users[index] = userObj;
        fs.writeFile(myFile, JSON.stringify(jsonData), (err) => {
            if (err) throw err;
        });
        res.render('userTable', {users: jsonData.users});
    };

    fs.readFile(myFile, 'utf8', (err, data) => {
        let myData = JSON.parse(data);

        myData.users.forEach((user, index) => {
            if (Number(user.userId) === Number(userId)) {
                myCallBack(index, myData);
            }
        });

        if (err) console.log(err);
    });
});

//Listen requests:

app.listen(3000, () => {
    console.log('Listening on port 3000');
});