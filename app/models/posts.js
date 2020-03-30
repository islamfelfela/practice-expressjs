const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;
