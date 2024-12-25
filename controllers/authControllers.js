const User = require('../models/User');
const bcrypt = require('bcrypt');

const  authController = {
    //REGISTER
    registerUser: async(req,res) => {
        try{

            // check lại cf password
           if (req.body.password != req.body.confirmPassword) {
            return res.status(400).json({ message: "Password kh match ròi" })
           }

          const salt = await bcrypt.genSalt(10);
          const hashed = await bcrypt.hash(req.body.password, salt);

          //Create new user
          const newUser  = await new User({
            username: req.body.username,
            password: hashed,
          });

          //Save to database
          const user = await newUser.save();
          res.redirect('/')
          } catch(err){
          res.status(500).json(err);
          }
    },
    //LOGIN
    loginUser: async(req, res)=>{
        try{


            const user = await User.findOne({username:req.body.username});
            if(!user){
                res.status(404).json("wrong username!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if(!validPassword) {
                res.status(404).json('wrong password!');
            }
            // if (user && validPassword){
            //     res.status(200).json(user);
            // }
            res.redirect('/')
        } catch(err){
            res.status(500).json(err);
        }
    }
};


module.exports = authController;
