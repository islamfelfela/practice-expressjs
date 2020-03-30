const router = require('express').Router();
const PostModel = require('../models/posts')


router.get('/', (req, res) => {
    PostModel.find({}, (err, posts) => {
        if (err) return res.send(err);
        res.json(posts);
    })

})


router.post('/', (req, res) => {
    console.log("Hitted");
    const { body: { title, content, user } } = req;
    const post = new PostModel({
        title,
        content,
        user
    })
    post.save((err, post) => {
        if (err) return res.send(err)
        res.json(post)
    })


})

router.get('/:id', (req, res) => {
    PostModel.findOne({ _id: req.params.id }, (err, post) => {
        if (err) return res.send(err);
        res.send(post);

    })

})


router.patch('/:id', (req, res) => {
    PostModel.findByIdAndUpdate(req.params.id, { "title": "Islam" }, (err, post) => {
        if (err) return res.send(err);
        res.send(post);
        console.log("updated");


    })

})

router.delete('/:id', (req, res) => {
    console.log("delete Hitted");
    PostModel.findByIdAndDelete(req.params.id, (err, post) => {
        if (err) return res.send(err);
        res.send(post);

    })

})



module.exports = router;