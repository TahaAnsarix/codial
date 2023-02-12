const express = require('express');
const homeController = require('../controllers/home_controller');

const router = express.Router();

router.get('/', homeController.home);

//for routes other than the home controller 
// use router.use('routerName', require(routerFileName))

router.use('/users', require('./users'));
router.use('/posts', require('./posts'));

module.exports = router;