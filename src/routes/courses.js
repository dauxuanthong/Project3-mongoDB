const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CoursesController');

router.use("/", courseController.index);

module.exports = router;