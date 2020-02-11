const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        "API": "API designed to manage all data operations related to the example app developed."
    })
});


module.exports = router;