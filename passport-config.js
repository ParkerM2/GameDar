const passport = require('passport');
const loginService = require('./services/login-service');

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;

// function to authenticate the USER
passport.use("login",
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        try {
            const user = await loginService.findUserByEmail(email)

            if (user == null) {
                return done(null, false, { message: "No user with that email"})
            }

            if ( await bcrypt.compare(password, user.password) ) {
                return done(null, user);
            } else {
                return done(null, false, {message : 'Password Wrong'})
            }
        } catch (e) {
            return done(e)
        }
    }) 
)

passport.use("signup",
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        try {
            const user = await loginService.findUserByEmail(email)

            if (user == null) {
                return done(null, false, { message: "No user with that email"})
            }

            if ( await bcrypt.compare(password, user.password) ) {
                return done(null, user);
            } else {
                return done(null, false, {message : 'Password Wrong'})
            }
        } catch (e) {
            return done(e)
        }
    }) 
)

passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'secret'
    }, async (token, done) => {
        try {
            const user = await loginService.findUserById(token.userId)
            
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        } catch (err) {
            return done(err, false);
        }
    }))