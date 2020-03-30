const router = require('express').Router();
const UserModel = require('../models/users')


router.get('/', (req, res) => {
    UserModel.find({}, (err, users) => {
        if (err) return res.send(err);
        res.json(users);
    })

})


router.post('/', (req, res) => {
    console.log("Hitted");
    const { body: { firstName, lastName, email, password, posts } } = req;
    const user = new UserModel({
        firstName,
        lastName,
        email,
        password,
        posts
    })
    user.save((err, user) => {
        if (err) return res.send(err)
        res.json(user)
    })


})

router.get('/:id', (req, res) => {
    UserModel.findOne({ _id: req.params.id }, (err, user) => {
        if (err) return res.send(err);
        res.send(user);

    })

})


router.patch('/:id', (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, { "firstName": "Islam" }, (err, user) => {
        if (err) return res.send(err);
        res.send(user);
        console.log("updated");


    })

})

router.delete('/:id', (req, res) => {
    console.log("delete Hitted");
    UserModel.findByIdAndDelete(req.params.id, (err, user) => {
        if (err) return res.send(err);
        res.send(user);

    })

})



module.exports = router;