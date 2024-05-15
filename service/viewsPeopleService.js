const data = require("../data/people");

const getViewsPeople = (req, res) => {
  res.render("index", {
    people: data,
  });
};

module.exports = {
  getViewsPeople,
};
