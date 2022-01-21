const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register 
router.post("/register", async (req, res) => {
    try {
        // Generate new password
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        // Create new user
        const user = new User({
            username: req.body.username,
            fullname: req.body.fullname,
            email: req.body.email,
            password: hashedPassword,
        });

        // Save user and send respond
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// Login    
router.post('/login', async (req, res) =>{
    try {
        const user = await User.findOne({ email: req.body.email });
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword || !user && res.status(400).json("Wrong password");
        
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;