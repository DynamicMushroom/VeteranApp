// userRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

//Add knex
router.post('/signup', async (req, res) => {
    const db = req.db;
    const { email, password } = req.body;
    
    console.log("Received email:", email);  // Log the received email
    
    // Check for allowed domains
    const allowedDomains = ['students.pensacolastate.edu', 'students.uwf.edu'];
    const domain = email.split("@")[1];

    console.log("Extracted domain:", domain);  // Log the extracted domain

    if (!allowedDomains.includes(domain)) {
        console.log("Domain not allowed");  // Log if domain is not allowed
        return res.status(400).json({ error: 'Email domain is not allowed' });
    }
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db('users').insert({ username: email, password: hashedPassword });
        res.status(201).json({ message: 'User created' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { return res.status(401).json({ error: info.message }); }

        req.logIn(user, async (err) => {
            if (err) { return next(err); }
            
            try {
                // After logging in, update the session in the database to associate it with the user
                await req.db('sessions').where('sid', req.sessionID).update({ user_id: user.id });

                req.session.save(err => {
                    if (err) { return next(err); }
                    
                    return res.json({ user, redirect: '/dashboard' });
                });
            } catch (dbErr) {
                console.error('Failed to update user_id in sessions:', dbErr);
                return next(dbErr);
            }
        });
    })(req, res, next);
});





router.get('/dashboard', ensureAuthenticated, async (req, res) => {
    const db = req.db;
    const userId = req.user.id;

    try {
        // Example: Fetching some user-related data from the database
        const [rows] = await db.select('*').from('users').where('id', userId);
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

router.get('/profile', ensureAuthenticated, async (req, res) => {
    const db = req.db;
    const userId = req.user.id;

    try {
        const [rows] = await db.select('*').from('users').where('id', userId);
        res.status(200).json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

router.post('/profile/:userId', ensureAuthenticated, upload.single('profile_picture'), async (req, res) => {
    const db = req.db;
    const userId = req.params.userId;
    const { first_name, last_name, email, branch_of_service, years_of_service, date_of_birth, bio } = req.body;
    const profile_picture = req.file ? req.file.path : null;

    if (userId !== req.user.id.toString()) {
        return res.status(403).json({ error: 'Forbidden' });
    }

    try {
        await db('profiles').insert({
            user_id: userId,
            first_name: first_name,
            last_name: last_name,
            email: email,
            branch_of_service: branch_of_service,
            years_of_service: years_of_service,
            date_of_birth: date_of_birth,
            bio: bio,
            profile_picture: profile_picture
        })
        .onConflict('user_id')
        .merge();

        res.status(200).json({ message: 'Profile updated' });
    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('http://localhost:3000/login');
}

module.exports = router;
