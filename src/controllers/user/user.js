const {  mongoose } = require("mongoose")
const User = require("../../models/user")



const getUser = async (req, res) => {
    try {
        const allUsers = await User.find()
        console.log("tesr",allUsers)
        res.status(200).json({
            flag:true,
            outdata: allUsers
        })
    } catch (error) {
        res.status(500).json({flag:false, message: error.message });
    }
}
const addUser = async (req,res) => {
        try {
            // const user =  User(req.body);
            // const savedUser = await user.save();
            const savedUser =await User.create(req.body)
            res.status(200).json({
                flag: true,
                message: "User created successfully.",
                outdata: savedUser
            });
        } catch (error) {
            res.status(500).json({flage:false, message: error.message });
        }
}

module.exports = {
    getUser, addUser
}