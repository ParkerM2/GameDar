//dependencies
const express = require('express')
const passport = require("passport");
const axios = require("axios");
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

var DBConnection = require('../../config/DBConnection');


const router = express.Router();


router.get("/api/search", passport.authenticate('jwt', {session: false}), async function (req, res) {
    axios({
        "method":"GET",
        "url":"https://api.rawg.io/api/games",
        "headers":{
            "User-Agent": "GamesList/0.1",
            "useQueryString":true
        },"params":{
            "search": req.query.q,
            "ordering": "-rating",
            "key": process.env.API_KEY
        }
    }).then((response)=>{
        let apiData = {
            results: response.data.results,
            query: req.query.q,
            user : req.user
        }
        
        res.status(200).json({
            status: 'success',
            data: apiData
        })
    })
        .catch((error)=>{
            res.status(404).json({
                status: 'fail',
                message: error
            })
        console.log(error)
    })
});

router.get("/api/gameDetails", function(req, res) {
    axios({
        "method":"GET",
        "url":"https://api.rawg.io/api/games/" + req.query.id,
        "headers":{
            "User-Agent": "GamesList/0.1",
            "useQueryString":true
        },"params":{
            "key": process.env.API_KEY
        }
    })
    .then((response)=>{
        let gameDetails = response.data;
        userService.hasGame(req.user, req.query.id, function(err, result) {
            gameDetails.hasGame = result;
            gameDetails.layout = false;
            res.status(200).json({
                status: 'success',
                data: gameDetails
            })
        });    
    })
    .catch((error)=>{
        console.log(error)
        res.status(500).json({
            status: 'fail',
            message: error
        })
    })
});



module.exports = router