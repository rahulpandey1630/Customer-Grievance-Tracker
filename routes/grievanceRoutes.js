const express = require('express');
const { getGrievances, createGrievance } = require('../controllers/grievanceController');
const router = express.Router();

router.get('/', getGrievances);
router.post('/', createGrievance);

module.exports = router;
