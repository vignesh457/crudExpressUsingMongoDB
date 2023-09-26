const express = require("express");
const userController = require("./../Controllers/userController");

const router = express.Router();

router
.route("/")
.get(userController.getUsers)
.post(userController.postUser);

router
  .route("/:id")
  .get(userController.getUserById)
  .patch(userController.updateUserById)
  .delete(userController.deleteUserById);

module.exports = router;
