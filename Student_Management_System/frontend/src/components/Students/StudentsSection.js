import React, { useState, useEffect } from "react";
import { Search, Filter, User, Edit, Trash2, ChevronDown } from "lucide-react";
import "./StudentsSection.css";
import "./AddStudentsSection.css";

const StudentsSection = ({ userType }) => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const [editingStudent, setEditingStudent] = useState({
    id: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    birthday: "",
    address: "",
    phone_num: "",
    department: "",
    enroll_date: "",
    year: "",
    gpa: "",
    attendence: "",
    advisor: "",
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Fetch students data
  useEffect(() => {
    fetch("http://localhost:5108/students")
      .then((response) => response.json())
      .then((data) => {
        const updatedStudents = data.map((student) => ({
          ...student,
          status: "Active",
        }));
        setStudents(updatedStudents);
      })
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  // Handle sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Handle deleting a student
  const handleDeleteUser = async (studentId) => {
    try {
      const response = await fetch(
        `http://localhost:5108/students/${studentId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setStudents(students.filter((student) => student.id !== studentId));
      } else {
        console.error("Failed to delete student");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Handle opening the edit modal
  const handleEditUser = (student) => {
    setEditingStudent(student);
    setIsEditModalOpen(true);
  };

  // Handle closing the edit modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingStudent({
      id: "",
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
      age: "",
      birthday: "",
      address: "",
      phone_num: "",
      department: "",
      enroll_date: "",
      year: "",
      gpa: "",
      attendence: "",
      advisor: "",
    });
  };

  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    const sanitizedStudent = {
      ...editingStudent,
      age: editingStudent.age === "" ? null : Number(editingStudent.age),
      gpa: editingStudent.gpa === "" ? null : editingStudent.gpa,
      attendence:
        editingStudent.attendence === "" ? null : editingStudent.attendence,
    };

    try {
      console.log("Sending update for student ID:", sanitizedStudent.id);
      console.log("Data being sent:", sanitizedStudent);

      const response = await fetch(
        `http://localhost:5108/api/users/${sanitizedStudent.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sanitizedStudent),
        }
      );

      if (response.ok) {
        // Get the response data
        const result = await response.json();
        console.log("Update successful:", result);

        // Update the local state with the new data
        setStudents((prevStudents) =>
          prevStudents.map((student) =>
            student.id === sanitizedStudent.id ? sanitizedStudent : student
          )
        );

        // Close the modal
        closeEditModal();
      } else {
        // Parse and log the error
        const errorData = await response.json();
        console.error("Failed to update student:", errorData);
        alert(
          `Failed to update student: ${errorData.error || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error updating student:", error);
      alert(`Error updating student: ${error.message}`);
    }
  };

  // Filter and sort students
  const filteredStudents = students
    .filter((student) => {
      const matchesSearch =
        student.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.username?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear =
        selectedYear === "all" || student.year === selectedYear;
      const matchesDepartment =
        selectedDepartment === "all" ||
        student.department === selectedDepartment;
      return matchesSearch && matchesYear && matchesDepartment;
    })
    .sort((a, b) => {
      if (sortConfig.direction === "asc") {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      }
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    });

  // Unique departments and years for filters
  const departments = [
    "all",
    ...new Set(students.map((student) => student.department)),
  ];
  const years = ["all", "1st Year", "2nd Year", "3rd Year", "4th Year"];

  // Sortable header component
  const SortableHeader = ({ label, field }) => (
    <th className="sortable-header" onClick={() => handleSort(field)}>
      <div className="header-content">
        {label}
        <ChevronDown
          className={`sort-icon ${
            sortConfig.key === field && sortConfig.direction === "desc"
              ? "rotated"
              : ""
          }`}
        />
      </div>
    </th>
  );

  // Calculate average attendance
  const totalAttendance = students.reduce(
    (sum, student) => sum + Number(student.attendence || 0),
    0
  );
  const averageAttendance =
    students.length > 0 ? Math.round(totalAttendance / students.length) : "N/A";

  // Calculate average GPA
  const totalGPA = students.reduce(
    (sum, student) => sum + Number(student.gpa || 0),
    0
  );
  const averageGPA =
    students.length > 0 ? (totalGPA / students.length).toFixed(2) : "N/A";

  return (
    <div className="students-section">
      {/* Header with Search and Filters */}
      <div className="header-controls">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search students..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filters-container">
          <div className="filter-group">
            <Filter className="filter-icon" />
            <select
              className="filter-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year === "all" ? "All Years" : year}
                </option>
              ))}
            </select>
          </div>
          <select
            className="filter-select"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map((department) => (
              <option key={department} value={department}>
                {department === "all" ? "All Departments" : department}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="stats-card purple-gradient">
          <h4 className="stats-label">Total Students</h4>
          <p className="stats-value">{students.length}</p>
        </div>
        <div className="stats-card blue-gradient">
          <h4 className="stats-label">Active Students</h4>
          <p className="stats-value">
            {students.filter((s) => s.status === "Active").length}
          </p>
        </div>
        <div className="stats-card green-gradient">
          <h4 className="stats-label">Average GPA</h4>
          <p className="stats-value">{averageGPA}</p>
        </div>
        <div className="stats-card pink-gradient">
          <h4 className="stats-label">Average Attendance</h4>
          <p className="stats-value">{averageAttendance}%</p>
        </div>
      </div>

      {/* Students List View */}
      <div className="table-container">
        <div className="table-wrapper">
          <table className="students-table">
            <thead>
              <tr>
                <SortableHeader label="Name" field="name" />
                <SortableHeader label="Reg No" field="rollNo" />
                <SortableHeader label="Department" field="department" />
                <SortableHeader label="Year" field="year" />
                <SortableHeader label="GPA" field="gpa" />
                <th>Attendance</th>
                <th>Status</th>
                {userType === "admin" && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>
                    <div className="student-info">
                      <User className="student-icon" />
                      <div>
                        <div className="student-name">
                          {student.first_name} {student.last_name}
                        </div>
                        <div className="student-email">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="student-roll">{student.username}</td>
                  <td>{student.department}</td>
                  <td>{student.year}</td>
                  <td className="student-gpa">{student.gpa}</td>
                  <td>
                    <div className="attendance-container">
                      <div className="attendance-bar">
                        <div
                          className="attendance-progress"
                          style={{ width: `${student.attendence}%` }}
                        ></div>
                      </div>
                      <span>{student.attendence}%</span>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`status-badge ${
                        student.status === "Active" ? "active" : "on-leave"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  {userType === "admin" && (
                    <td>
                      <button
                        className="action-button"
                        onClick={() => handleEditUser(student)}
                      >
                        <Edit className="action-icon" />
                      </button>
                      <button
                        className="action-button"
                        onClick={() => handleDeleteUser(student.id)}
                      >
                        <Trash2 className="action-icon" />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && editingStudent && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Student</h2>
            <form onSubmit={handleUpdateStudent} className="student-form">
              <div className="form-grid">
                {/* Basic Information */}
                <div className="form-section">
                  <div className="form-group">
                    <label>Username*</label>
                    <input
                      type="text"
                      value={editingStudent.username}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          username: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Password*</label>
                    <input
                      type="password"
                      value={editingStudent.password}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>First Name*</label>
                    <input
                      type="text"
                      value={editingStudent.first_name}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          first_name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name*</label>
                    <input
                      type="text"
                      value={editingStudent.last_name}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          last_name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email*</label>
                    <input
                      type="email"
                      value={editingStudent.email}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="text"
                      value={editingStudent.age}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          age: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Birthday</label>
                    <input
                      type="date"
                      value={editingStudent.birthday}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          birthday: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="form-section">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      value={editingStudent.address}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          address: e.target.value,
                        })
                      }
                      rows="2"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      value={editingStudent.phone_num}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          phone_num: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Department</label>
                    <select
                      value={editingStudent.department}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          department: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Department</option>
                      <option value="Electrical Engineering">
                        Electrical Engineering
                      </option>
                      <option value="Civil Engineering">
                        Civil Engineering
                      </option>
                      <option value="Mechanical Engineering">
                        Mechanical Engineering
                      </option>
                      <option value="Marine Engineering">
                        Marine Engineering
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Enrollment Date</label>
                    <input
                      type="date"
                      value={editingStudent.enroll_date}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          enroll_date: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Year</label>
                    <select
                      value={editingStudent.year}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          year: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Year</option>
                      <option value="First Year">First Year</option>
                      <option value="Second Year">Second Year</option>
                      <option value="Third Year">Third Year</option>
                      <option value="Fourth Year">Fourth Year</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>GPA</label>
                    <input
                      type="text"
                      value={editingStudent.gpa}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          gpa: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Attendance</label>
                    <input
                      type="text"
                      value={editingStudent.attendence}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          attendence: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Advisor</label>
                    <input
                      type="text"
                      value={editingStudent.advisor}
                      onChange={(e) =>
                        setEditingStudent({
                          ...editingStudent,
                          advisor: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <div>
                  <button
                    type="button"
                    onClick={closeEditModal}
                    className="cancel-button"
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <button type="submit" className="submit-button">
                    Update Student
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsSection;
