const router = require("express").Router();
const { getJobs } = require("../service/jobService");

router.get("/people", getJobs);

module.exports = router;
