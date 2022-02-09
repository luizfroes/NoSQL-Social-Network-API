const getThoughts = (req, res) => {
  res.send("getThoughts");
};

const getThoughtById = (req, res) => {
  res.send("getThoughtById");
};

const createThoughts = (req, res) => {
  res.send("createThoughts");
};

const updateThoughtById = (req, res) => {
  res.send("updateThoughtById");
};

const deleteThoughtById = (req, res) => {
  res.send("deleteThoughtById");
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThoughts,
  updateThoughtById,
  deleteThoughtById,
};
