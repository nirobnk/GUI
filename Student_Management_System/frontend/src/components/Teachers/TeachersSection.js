import React, { useState } from 'react';
import { Search, Filter, User, ChevronDown, Mail, Phone } from 'lucide-react';
import './TeachersSection.css';

const TeachersSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'asc'
  });

  const teachers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      department: 'Computer Science',
      email: 'sarah.j@university.edu',
      phone: '+1 (555) 123-4567',
      courses: ['Data Structures', 'Algorithms'],
      status: 'Active'
    },
    {
      id: 2,
      name: 'Prof. Michael Smith',
      department: 'Mathematics',
      email: 'michael.s@university.edu',
      phone: '+1 (555) 234-5678',
      courses: ['Calculus I', 'Linear Algebra'],
      status: 'Active'
    },
    {
      id: 3,
      name: 'Dr. Emily Brown',
      department: 'Physics',
      email: 'emily.b@university.edu',
      phone: '+1 (555) 345-6789',
      courses: ['Mechanics', 'Electromagnetism'],
      status: 'On Leave'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      department: 'English',
      email: 'james.w@university.edu',
      phone: '+1 (555) 456-7890',
      courses: ['Introduction to Literature', 'Creative Writing'],
      status: 'Active'
    },
    {
      id: 5,
      name: 'Prof. Lisa Thompson',
      department: 'Computer Science',
      email: 'lisa.t@university.edu',
      phone: '+1 (555) 567-8901',
      courses: ['Database Management', 'Web Development'],
      status: 'Active'
    }
  ];

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredTeachers = teachers
    .filter((teacher) => {
      const matchesSearch =
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment =
        selectedDepartment === 'all' || teacher.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    })
    .sort((a, b) => {
      if (sortConfig.direction === 'asc') {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      }
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    });

  const departments = ['all', ...new Set(teachers.map((teacher) => teacher.department))];

  const SortableHeader = ({ label, field }) => (
    <th
      className="sortable-header"
      onClick={() => handleSort(field)}
    >
      <div className="header-content">
        {label}
        <ChevronDown
          className={`chevron ${
            sortConfig.key === field && sortConfig.direction === 'desc' ? 'rotate' : ''
          }`}
        />
      </div>
    </th>
  );

  return (
    <div className="teachers-section">
      <div className="header-controls">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search teachers..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-container">
          <Filter className="filter-icon" />
          <select
            className="department-select"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map((department) => (
              <option key={department} value={department}>
                {department === 'all' ? 'All Departments' : department}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card purple">
          <h4>Total Teachers</h4>
          <p>{teachers.length}</p>
        </div>
        <div className="stat-card blue">
          <h4>Active Teachers</h4>
          <p>{teachers.filter((t) => t.status === 'Active').length}</p>
        </div>
        <div className="stat-card green">
          <h4>Departments</h4>
          <p>{departments.length - 1}</p>
        </div>
        <div className="stat-card pink">
          <h4>On Leave</h4>
          <p>{teachers.filter((t) => t.status === 'On Leave').length}</p>
        </div>
      </div>

      <div className="teachers-table-container">
        <table className="teachers-table">
          <thead>
            <tr>
              <SortableHeader label="Name" field="name" />
              <SortableHeader label="Department" field="department" />
              <th>Contact</th>
              <th>Courses</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>
                  <div className="teacher-name">
                    <User className="user-icon" />
                    <div>
                      <div className="name">{teacher.name}</div>
                      <div className="email-small">{teacher.email}</div>
                    </div>
                  </div>
                </td>
                <td>{teacher.department}</td>
                <td>
                  <div className="contact-info">
                    <div className="contact-item">
                      <Mail className="contact-icon" />
                      <span>{teacher.email}</span>
                    </div>
                    <div className="contact-item">
                      <Phone className="contact-icon" />
                      <span>{teacher.phone}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="courses-list">
                    {teacher.courses.map((course, index) => (
                      <span key={index} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <span className={`status-tag ${teacher.status.toLowerCase()}`}>
                    {teacher.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeachersSection;