const passport = require('passport');
const jwt = require('../middlewares/jwt');

class AccountController {

    signupGET(req,res) {

    }

    signinGET(req, res) {
        res.render('login');
    }

    signoutGET(req, res) {
        
    }

    signinPOST(req, res, next) {
        passport.authenticate('local', (err, user, info) => {
            if (err) { 
                return res.render('login', {
                message: err,
                msgcolor: 'danger'
                });
            }
                
            if (!user) { 
                return res.render('login', {
                    message: info.message,
                    msgcolor: 'warning'
                });
            }
                
            req.logIn(user, (err) => {
                if (err) { 
                    return res.render('login', {
                        message: err,
                        msgcolor: 'danger'
                    }); 
                }

                const accessToken = jwt.generateAccessToken(user);
                // const refreshToken = jwt.generateRefreshToken(user);

                res.cookie('token', accessToken);
                
                return res.redirect('user/dashboard', '301', {
                    layout: 'dashboard',
                    loggedIn: 'true'
                });
            }) 
        })(req, res, next);
    }

    signupPOST(req, res) {
        
    }

}

module.exports = new AccountController;