const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

router.get('/dashboard', siteController.dashboard);

router.get('/user', siteController.user);

router.get('/location', siteController.location);

router.get('/food', siteController.food);

router.get('/medicine', siteController.medicine);

router.get('/', siteController.indexGET);


router.post('/', siteController.indexPOST);


module.exports = router;