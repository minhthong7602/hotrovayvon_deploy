const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/auth/login');
    };
    next();
});

router.get('/', (req, res) => {
    res.end('Hello Admin Page');
});


module.exports = router;
