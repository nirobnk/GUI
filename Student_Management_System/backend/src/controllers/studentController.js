const Student = require("../models/Student");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student nof found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const [updated] = await Student.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedStudent = await Student.findByPk(req.params.id);
      return res.json(updatedStudent);
    }
    throw new Error("Student not found");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const deleted = await Student.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.status(204).json({ message: "Student deleted" });
    }
    throw new Error("Student not found");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
