const express = require("express")
const router = express.Router()

//user routes
router.get('/user', (req, res) => {
    res.json({
        flag: true,
        user: {
            name: "Dugresh",
            Address:"M.P."
        }
    })
})
module.exports = router