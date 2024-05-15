// const router = require("express").Router();
// const { getViewsPeople } = require("../service/viewsPeopleService");

// router.get("/job", getViewsPeople);

// module.exports = router;

const router = require("express").Router();
const { idChecker } = require("../middleware");
const upload = require("../middleware/uploadHandler");
const cdnUpload = require("../middleware/cdnUploadHandler");
const {
  getPeople,
  getPeopleById,
  createPeople,
  deletePeople,
  updatePeople,
  uploadImagePeople,
  cdnUploadImagePeople,
} = require("../service/peopleService");

router.get("/", getPeople);
router.get("/:id", idChecker, getPeopleById);
router.post("/", createPeople);
router.delete("/:id", idChecker, deletePeople);
router.put("/:id", idChecker, updatePeople);

router.post("/:id", upload.single("image"), uploadImagePeople);
router.post("/upload/cdn", cdnUpload.single("image"), cdnUploadImagePeople);
module.exports = router;
