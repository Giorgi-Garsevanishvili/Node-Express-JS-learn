const express = require('express');
const { getAllJobt, getJob, updateJob, createJob, deleteJob } = require('../controllers/jobs');
const router = express.Router();

router.route('/').get(getAllJobt).post(createJob)
router.route('/:id').patch(updateJob).delete(deleteJob).get(getJob)

module.exports = router
