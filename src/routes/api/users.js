const { Router } = require("express");

const friends = require("./friends");

const router = Router();

router.get("/", getUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.put("/:userId", updateUserById);
router.delete("/:userId", deleteUserById);
router.use("/:userId", friends);

module.exports = router;
