//dependencies
const express = require('express')
const passport = require("passport");
const jwt = require('jsonwebtoken');
const axios = require('axios');
const { check, validationResult } = require('express-validator');

var DBConnection = require('../../config/DBConnection');

var registerService = require('../../services/register-service');
var loginService = require('../../services/login-service');
var userService = require('../../services/user-service');


const router = express.Router();

// 1) USER ROUTES

router.post("/api/login", [
    check("email").notEmpty(),
    check("user_password").notEmpty()
], async (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() })
    }

    try {
        let userId = await loginService.handleLogin(req.body.email, req.body.user_password)
        let token = jwt.sign({ userId }, "secret")
        return res.json({ token })
    } catch (err) {
        return res.status(400).json({ errors: err });
    }
});

router.post("/api/register", [
    check("email").notEmpty(),
    check("user_password", "Invalid password. Password must be at least 2 chars long").isLength({ min: 2 }),
    check("passwordConfirmation", "Password confirmation does not match password").custom((value, { req }) => {
        return value === req.body.user_password
    })
], async (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() })
    }

    //create a new user
    let newUser = {
        email: req.body.email,
        user_name: req.body.user_name,
        user_password: req.body.user_password,
        user_pokemon: null,
    };

    try {
        let userId = await registerService.createNewUser(newUser);
        let token = jwt.sign({ userId }, "secret")
        return res.json({ token })
    } catch (err) {
        return res.status(400).json({ errors: err });
    }
});


router.get("/api/user", passport.authenticate('jwt', { session: false }), function (req,res ) {
    DBConnection.query('SELECT * FROM `users`', function (err, rows) {
        if (err) {throw err}
        res.json(rows)
    })
});

// 2) SEARCH ROUTE
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

// 3) GAME ROUTES
router.get("/api/gameDetails", passport.authenticate('jwt', {session: false}), function(req, res) {
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
router.post('/api/addGame',  passport.authenticate('jwt', {session: false}), function(req, res) { 
    try{
        userService.addGame(req.user, req.body.id, req.body.title, req.body.game_img, function (err, results) {
            if (err) {throw err}
            res.status(201).json({status: 'success', message: 'Created'});
        }); 
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
}
  });
  
  router.delete('/api/removeGame/:id',  passport.authenticate('jwt', {session: false}), function(req, res) {
      try{
        userService.removeGame(req.user, req.params.id, function (err, results) {
            if (err) {throw err}
            res.status(204).json({
                status: 'success',
                deleted: true
            });
        });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
  })


module.exports = router