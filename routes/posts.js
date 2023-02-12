const express = require('express');
const postsContoller = require('../controllers/posts_controller');
const router = express.Router();

router.get('/create', postsContoller.create);

module.exports = router;