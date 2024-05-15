const router = require("express").Router();
const peopleRouter = require("./peopleRouter");
const viewsRouter = require("./viewsRouter");
const jobRouter = require("./jobRouter");

router.use("/people", peopleRouter);
router.use("/views", viewsRouter);
router.use("/jobs", jobRouter);

module.exports = router;
