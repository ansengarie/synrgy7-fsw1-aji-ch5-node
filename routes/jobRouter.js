const router = require("express").Router();
const { getJobs } = require("../service/jobService");

router.get("/", getJobs);

module.exports = router;
