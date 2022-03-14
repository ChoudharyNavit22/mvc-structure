"use strict";

var Models = require("../models");

const getUsers = (res) => {
    Models.Users.find({}, {}, {}, (err,data) => {
        if (err) throw err;
        res.send({result: 200 , data: data})
    });
}

const createUsers = (data, res) => {
    new Models.Users(data).save((err,data) => {
        if(err) throw err
        res.send({ result: 200 , data: data})
    });
}

module.exports = {
    getUsers, createUsers
}