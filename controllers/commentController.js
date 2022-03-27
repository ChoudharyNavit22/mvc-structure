"use strict";

var Models = require("../models");

const getComment = (res) => {
    Models.Comments.find({}, {}, {}, (err,data) => {
        if (err) throw err;
        res.send({result: 200 , data: data})
    });
}

const createComment = (data, res) => {
    new Models.Comments(data).save((err,data) => {
        if(err) throw err
        res.send({ result: 200 , data: data})
    });
}

module.exports = {
    getComment, createComment
}