const User = require("../models/user.model")
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

module.exports = {

    
    registerUser: async (req, res) => {
        try {
            // Check if the email that was entered in reg form is already in DB
            const potentialUser = await User.findOne({email: req.body.email});
            if (potentialUser) {
                res.status(400).json({message: "That email already exists"})
            }
            else {
                // Create the user
                const newUser = await User.create(req.body);

                //jwt.sign creates the token the first thing we pass is what we want to serialize (payload)
                //the second param is a secret key to serialize
                const UserToken = jwt.sign({_id: newUser._id, email: newUser.email}, secret, {expiresIn: '1d'})
                console.log(UserToken);
                //Sending back the logged in user
                res.status(201).cookie('userToken', UserToken, {httpOnly: true}).json({message: 'User logged in', user: newUser})
                //status not necessary
            }
        }
        catch (err) {
            console.log(err)
            res.status(400).json({error: err});
        } 
    },
    
    login: async (req, res) => {
        try {
            const user = await User.findOne({email: req.body.email});
            if (user) {
                // if the user exists we want to check the password with what is stored in the db under that email
                const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
                console.log(passwordsMatch);
                if (passwordsMatch) {
                    console.log("HERE");
                    const userToken = jwt.sign({_id: user._id, email: user.email}, secret, {expiresIn: '1d'})
                    console.log(userToken);
                    //Sending back the logged in user
                    res.cookie("userToken", userToken, {httpOnly: true}).json({message: 'User logged in', user: user})
                }
                else {
                    res.status(400).json({message: 'Invalid Email/Password'});
                }
            }
            else {
                res.status(400).json({message: 'Invalid Email/Password'});
            }
            }
        catch (err) {
            res.status(400).json({error: err})
        }
    },
    
    logout: (req,res) => {
        res.clearCookie('userToken').json({message: 'User is logged out'})
    }


    // findAllUsers: (req, res) => {
    //     User.find()
    //         .then(allUsers => {
    //             res.json(allUsers)
    //             console.log(allUsers)
    //         })
    //         .catch(err => {
    //             res.json({message: "Something went wrong", error: err})
    //         });
    // },
    
    // findOneUser: (req, res) => {
    //     User.findById(req.params.id)
    //         .then(user => res.json(user))
    //         .catch(err => res.status(500).json({message: "Somethihng went wrong", error: err}));
    // },
}
