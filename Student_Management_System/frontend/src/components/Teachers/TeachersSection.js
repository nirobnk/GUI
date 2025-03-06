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
    // Electrical and Information Engineering
    {
      id: 1,
      name: 'Dr. Nimal Perera',
      department: 'Electrical and Information Engineering',
      email: 'nimal.p@eng.ruh.ac.lk',
      phone: '+94 77 123 4567',
      courses: ['Power Systems', 'Electrical Machines'],
      status: 'Active'
    },
    {
      id: 2,
      name: 'Prof. Kamal Wijesinghe',
      department: 'Electrical and Information Engineering',
      email: 'kamal.w@eng.ruh.ac.lk',
      phone: '+94 71 987 6543',
      courses: ['Control Systems', 'Digital Signal Processing'],
      status: 'Active'
    },
    {
      id: 3,
      name: 'Dr. Saman Jayawardena',
      department: 'Electrical and Information Engineering',
      email: 'saman.j@eng.ruh.ac.lk',
      phone: '+94 76 234 5678',
      courses: ['Electronic Circuits', 'Microprocessor Systems'],
      status: 'On Leave'
    },
    {
      id: 4,
      name: 'Dr. Thilini Fernando',
      department: 'Electrical and Information Engineering',
      email: 'thilini.f@eng.ruh.ac.lk',
      phone: '+94 70 345 6789',
      courses: ['Renewable Energy', 'Power Electronics'],
      status: 'Active'
    },
    {
      id: 5,
      name: 'Prof. Anura Karunaratne',
      department: 'Electrical and Information Engineering',
      email: 'anura.k@eng.ruh.ac.lk',
      phone: '+94 75 456 7890',
      courses: ['Embedded Systems', 'Communication Systems'],
      status: 'Active'
    },

    // Civil Engineering
    {
      id: 6,
      name: 'Dr. Ruwan Perera',
      department: 'Civil Engineering',
      email: 'ruwan.p@eng.ruh.ac.lk',
      phone: '+94 77 654 3210',
      courses: ['Structural Analysis', 'Concrete Technology'],
      status: 'Active'
    },
    {
      id: 7,
      name: 'Prof. Chamika Gunawardena',
      department: 'Civil Engineering',
      email: 'chamika.g@eng.ruh.ac.lk',
      phone: '+94 71 123 4567',
      courses: ['Geotechnical Engineering', 'Transportation Engineering'],
      status: 'Active'
    },

    // Mechanical Engineering
    {
      id: 8,
      name: 'Dr. Lakshman Perera',
      department: 'Mechanical Engineering',
      email: 'lakshman.p@eng.ruh.ac.lk',
      phone: '+94 70 765 4321',
      courses: ['Fluid Mechanics', 'Thermodynamics'],
      status: 'Active'
    },
    {
      id: 9,
      name: 'Prof. Sandeep Jayawardena',
      department: 'Mechanical Engineering',
      email: 'sandeep.j@eng.ruh.ac.lk',
      phone: '+94 75 987 6543',
      courses: ['Manufacturing Processes', 'Machine Design'],
      status: 'Active'
    },

    // Marine Engineering
    {
      id: 10,
      name: 'Dr. Dinesh Perera',
      department: 'Marine Engineering',
      email: 'dinesh.p@eng.ruh.ac.lk',
      phone: '+94 76 123 8901',
      courses: ['Ship Design', 'Marine Power Systems'],
      status: 'Active'
    },
    {
      id: 11,
      name: 'Prof. Ranjith Wijesinghe',
      department: 'Marine Engineering',
      email: 'ranjith.w@eng.ruh.ac.lk',
      phone: '+94 71 345 6789',
      courses: ['Marine Propulsion', 'Offshore Structures'],
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