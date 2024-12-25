const User = require("../models/User");

const userController = {
    //GET ALL USERS
    getAllUsers: async (req, res) => {
        try {
             const user = await User.find();
             res.status(200).json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    }

}