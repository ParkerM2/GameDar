//dependencies
var DBConnection = require('../config/DBConnection');
var bcrypt = require('bcrypt');

// function to handle the login info and parse to other functions to
// pull from the msql db to compare emails, then to compare the given password
// through passport and express-validator to decide if the given pass is = to the hashed
// password in the msql db
let handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        //check email is exist or not
        let user = await findUserByEmail(email);
         console.log(user)
        if (user) {
            //compare password
            try{
                const isMatch = await comparePassword(password, user);
                if (isMatch) {
                            resolve(true);
                        } else {
                            reject(`The password that you've entered is incorrect`);
                        }
            }catch(e){
                reject(e);
            }
            

            // await comparePassword(password, user).then((isMatch) => {
            //     if (isMatch) {
            //         resolve(true);
            //     } else {
            //         reject(`The password that you've entered is incorrect`);
            //     }
            // }).catch(reject);
        } else {
            reject(`This user email "${email}" doesn't exist`);
        }
    });
};


let findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        try {
            DBConnection.query(
                ' SELECT * FROM `users` WHERE `email` = ?  ', [email],
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    let user = rows[0];
                    resolve(user);
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

let findUserById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            DBConnection.query(
                ' SELECT * FROM `users` WHERE `id` = ?  ', id,
                function(err, rows) {
                    if (err) {
                        reject(err)
                    }
                    let user = rows[0];
                    resolve(user);
                }
            );
        } catch (err) {
            reject(err);
        }
    });
};

let comparePassword = (password, userObject) => {
    return new Promise(async (resolve, reject) => {
        // console.log(userObject.user_password, " hashed password in 'comparepassword login-service.js'")
        // console.log("compare to the inputed password on website", password)
        try {
            console.log('pass is', password, userObject.user_password)
            await bcrypt.compare(password, userObject.user_password).then((isMatch) => {
                if (isMatch) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    handleLogin: handleLogin,
    findUserByEmail: findUserByEmail,
    findUserById: findUserById,
    comparePassword: comparePassword
};