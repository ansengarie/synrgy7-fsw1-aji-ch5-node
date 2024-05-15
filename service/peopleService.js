const data = require("../data/people");
const cloudinary = require("../middleware/cloudinary");

const getPeople = (req, res) => {
  res.status(200).json({ message: "Success", data });
};

const getPeopleById = (req, res) => {
  const { id } = req.params;

  res
    .status(200)
    .json({ message: "success", data: data.find((row) => row.id == id) });
};

const createPeople = (req, res) => {
  const payload = req.body;

  if (payload) {
    data.push(payload);
    res.status(201).json({ message: "Success", data });
  } else {
    res.status(400).json({ message: "Failed" });
  }
};

const deletePeople = (req, res) => {
  let { id } = req.params;

  const peopleIndex = data.findIndex((person) => person.id == id);

  if (peopleIndex !== -1) {
    data.splice(peopleIndex, 1);
    res.status(200).json({ message: `Delete id ${id} Success`, data });
  } else {
    res.status(404).json({ message: `People with id ${id} not found` });
  }
};

const updatePeople = (req, res) => {
  const { id } = req.params;
  const { name, username, email } = req.body;

  const peopleIndex = data.findIndex((people) => people.id === +id);

  if (peopleIndex !== -1) {
    data[peopleIndex] = {
      id: Number(id),
      name,
      username,
      email,
    };
    res.status(200).json({ message: "People Updated", data });
  } else {
    res.status(400).json({ message: `People with id ${id} not found` });
  }
};

uploadImagePeople = (req, res) => {
  const url = "/uploads/${req.file.filename}";

  res.status(200).json({ message: "Uploaded", url });
};
cdnUploadImagePeople = (req, res) => {
  const fileBase64 = req.file.buffer.toString("base64");
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;

  cloudinary.uploader.upload(file, (err, result) => {
    res.status(200).json({ message: "Uploaded", url: result.url });
  });
};

module.exports = {
  getPeople,
  getPeopleById,
  createPeople,
  deletePeople,
  updatePeople,
  uploadImagePeople,
  cdnUploadImagePeople,
};
