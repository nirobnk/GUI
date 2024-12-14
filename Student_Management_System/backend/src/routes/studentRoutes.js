const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const { validateStudent } = require("../utils/validation");


router.post("/", validateStudent, studentController.createStudent);
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.get("/", studentController.createStudent);
router.get("/:id", studentController.updateStudent);
router.get("/:id", studentController.deleteStudent);

module.exports = router;