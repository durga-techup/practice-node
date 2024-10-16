const express = require('express');
const User = require('./../../models/user');
const { getUser, addUser } = require('../../controllers/user/user');
const { speedLimiter, limiter } = require('../../middleware/apiLimit');
const router = express.Router();




/**




@swagger
/api/user:
  get:
    summary: Retrieve a list of users
    responses:
      200:
        description: A list of users
        content:
          application/json:
            schema:
              type: array
              items:
                type: object
                properties:
                  email:
                    type: integer
                    example: 1
                  name:
                    type: string
                    example: John Doe
*/



// Get all users
router.get('/get-all-users', getUser);

// Create a new user
router.post('/add-user', addUser);

module.exports = router;
