//Constants:

const express = require('express');
const mongoose = require('mongoose');

const path = require('path');

const app = express();
const db = mongoose.connection;

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    address: String,
    age: Number
});

const myUser = mongoose.model('userCollection', userSchema);


//Mongoose setup:

mongoose.connect('mongodb://localhost/userManager', {useNewUrlParser: true});

db.once('open', () => console.log('Database connected!'));
db.on('error', console.error.bind(console, 'There was an error with the connection: '));



//Set requests:

app.set('view engine', 'pug');



//Use requests:

app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname,'public')));



//Get requests

app.get('/', (req, res) => {
    myUser.find({}, (err, docs) => {
        if (err) console.log(err);
        res.render('userTable', {myUser: docs});
    });
});

app.get('/editUser/:userId', (req, res) => {
    const userId = req.params.userId;

    myUser.findOne({_id:userId}, (err, doc) => {
        if (err) console.log(err);
        res.render('editUser', {user:doc});
    });
});

app.get('/addUser', (req, res) => {
    res.render('addUser');
});


app.get('/deleteUser/:userId', (req, res) => {
    const userId = req.params.userId;

    myUser.findOneAndDelete({'_id': userId}, (err, data) => {
        if (err) return console.log(`There was an error with trying to delete the user: ${err}`);
        res.redirect('/');
    });
});

app.get('/alphabetizeAscending', (req, res) => {
    myUser.find({}).sort({firstName: 1}).exec((err, data) => {
        if (err) return console.log(`There was an error with trying to alphabetize the users: ${err}`);
        res.render('userTable', {myUser: data});
    });
});

app.get('/alphabetizeDescending', (req, res) => {
    myUser.find({}).sort({firstName: -1}).exec((err, data) => {
        if (err) return console.log(`There was an error with trying to alphabetize the users: ${err}`);
        res.render('userTable', {myUser: data});
    });
});




//Post requests:

app.post('/editUser/:userId', (req, res) => {
    const userId = req.params.userId;
    const body = req.body;
    const updatedUser = {
        firstName: body.firstName,
        lastName: body.lastName,
        emailAddress: body.emailAddress,
        address: body.address,
        age: body.age
    };

    myUser.findOneAndUpdate({_id:userId}, updatedUser, {new: true}, (err, data) => {
        if (err) console.log(err);
        res.redirect('/');
    });
});

app.post('/addUser', (req, res) => {
    const addUser = new myUser();

    addUser.firstName = req.body.firstName;
    addUser.lastName = req.body.lastName;
    addUser.emailAddress = req.body.emailAddress;
    addUser.address = req.body.address;
    addUser.age = req.body.age;

    addUser.save((err, data) => {
        if (err) console.error(err);
        res.redirect('/');
    });
});

app.post('/search', (req, res) => {
    const body = req.body;

    myUser.find({$text:{$search: body.search}}, (err, data) => {
        if (err) return console.log(`An error occurred while searching: ${err}`);
        res.render('search', {myUser: data});
    });
});



//Listen requests

app.listen(3000, () => {
    console.log('Listening on port 3000');
});