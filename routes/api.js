const express = require('express');
let userList = require('../config/userlist');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();


router.get('/', (req, res) => {
    //console.log(users[1]);
    res.render('user', { users: userList })
});

router.get('/addUser', (req, res) => {
    res.render('addUser')
});

router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const foundUser = userList.filter((user) => user.id == id);

    res.render('userdetailpage', { user: foundUser[0] });
});

router.post('/addUser', (req, res) => {
    const { name, age, city } = req.body;
    const newUser = {
        id: uuidv4(),
        name: name,
        age: age,
        city: city,
    }
    userList.push(newUser);
    res.redirect('/');
});

router.put('/user/:id', (req, res) => {
    const data = req.body;
    newUser = data;
    const id = req.params.id;
    const newUsers = userList.filter((user) => user.id != id);
    userList = newUsers;
    userList.push(newUser);
    res.redirect('/');
});

router.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    const newUserList = userList.filter((user) => user.id != id);
    userList = newUserList;
    res.redirect('/');
});


module.exports = router;