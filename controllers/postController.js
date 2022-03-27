"use strict";

var Models = require("../models");

const getPost = (res) => {
    Models.Posts.find({}, {}, {}, (err,data) => {
        if (err) throw err;
        res.send({result: 200 , data: data})
    });
}

const createPost = (data, res) => {
    new Models.Posts(data).save((err,data) => {
        if(err) throw err
        res.send({ result: 200 , data: data})
    });
}

const addLikes = (data, res) => {
    let criteria = {
        _id: data.postId
    }
    let options = {
        lean : true,
        new : true
    }
    let dataToUpdate = {
        $inc: {
            likes: 1
        }
    }
    Models.Posts.findOneAndUpdate(criteria, dataToUpdate, options, (err,data) => {
        if (err) throw err;
        res.send({result: 200 , data: data})
    });
}

module.exports = {
    getPost, createPost, addLikes
}