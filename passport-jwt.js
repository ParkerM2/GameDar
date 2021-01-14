var passport = require('passport');
var loginService = require('../services/login-service');

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret',
}

function initialize() {
    passport.use(new JwtStrategy(options, function(jwt_payload, done) {
        loginService.findUserById(jwt_payload.sub)
            .then((user) => {
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                    // or you could create a new account
                }
            })
            .catch((err) => {
                return done(err, false);
            })
    });
};

module.exports = initialize;