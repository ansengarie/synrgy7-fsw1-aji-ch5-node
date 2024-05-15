const idChecker = (req, res, next) => {
  const { id } = req.params;
  const newId = +id;

  if (newId > 0) next();

  res.status(400).json({ message: "Id tidak valid" });
};

module.exports = {
  idChecker,
};
