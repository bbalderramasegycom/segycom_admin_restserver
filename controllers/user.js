const { response, request } = require('express');

const userGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get Api controller',
        query
    });
}

const userPost = (req, res = response) => {

    const body = req.body;

    res.status(201).json({
        msg: 'post Api controller',
        body
    });
}

const userPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put Api controller',
        id
    });
}
    
const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete Api controller'
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
}