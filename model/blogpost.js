const mongoose = require('mongoose')

//schema
const schema = mongoose.Schema;
const BlogPostSchema = new schema({
    fooditem:"",
    foodprice:[],
    total:""
});

//Model
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

module.exports = BlogPost;