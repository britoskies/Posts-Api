const express = require("express");
const router = express.Router();

// Controllers
const { getPing } = require('../controllers/getPing');
const { getPosts } = require('../controllers/getPosts');

router.get('/api/ping', getPing);
router.get('/api/posts', getPosts);

module.exports = router;
