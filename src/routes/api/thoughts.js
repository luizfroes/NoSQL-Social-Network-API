const { Router } = require("express");

const {
  getThoughts,
  getThoughtById,
  createThoughts,
  updateThoughtById,
  deleteThoughtById,
} = require("../../controllers/api/thoughts");

const reactions = require("./reactions");

const router = Router();

router.get("/", getThoughts);
router.get("/:thoughtId", getThoughtById);
router.post("/", createThoughts);
router.put("/:thoughtId", updateThoughtById);
router.delete("/:thoughtId", deleteThoughtById);
router.use("/:thoughtId", reactions);

module.exports = router;
