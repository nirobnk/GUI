
import React, { useState } from 'react';
import { Search, Filter, Book } from 'lucide-react';
import './CoursesSection.css';

const CoursesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const courses = [
    // Electrical and Information Engineering Courses
    {
      id: 1,
      code: 'EE101',
      name: 'Power Systems',
      instructor: 'Dr. Nimal Perera',
      credits: 3,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 60,
      subject: 'Electrical Engineering'
    },
    {
      id: 2,
      code: 'EE102',
      name: 'Electrical Machines',
      instructor: 'Dr. Nimal Perera',
      credits: 3,
      semester: 'Spring 2024',
      status: 'Completed',
      progress: 100,
      subject: 'Electrical Engineering'
    },
    {
      id: 3,
      code: 'EE201',
      name: 'Control Systems',
      instructor: 'Prof. Kamal Wijesinghe',
      credits: 4,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 75,
      subject: 'Electrical Engineering'
    },
    {
      id: 4,
      code: 'EE202',
      name: 'Digital Signal Processing',
      instructor: 'Prof. Kamal Wijesinghe',
      credits: 4,
      semester: 'Spring 2024',
      status: 'Completed',
      progress: 100,
      subject: 'Electrical Engineering'
    },
    {
      id: 5,
      code: 'EE301',
      name: 'Electronic Circuits',
      instructor: 'Dr. Saman Jayawardena',
      credits: 3,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 45,
      subject: 'Electrical Engineering'
    },
    {
      id: 6,
      code: 'EE302',
      name: 'Microprocessor Systems',
      instructor: 'Dr. Saman Jayawardena',
      credits: 3,
      semester: 'Spring 2024',
      status: 'Planned',
      progress: 0,
      subject: 'Electrical Engineering'
    },
    {
      id: 7,
      code: 'EE401',
      name: 'Renewable Energy',
      instructor: 'Dr. Thilini Fernando',
      credits: 3,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 40,
      subject: 'Electrical Engineering'
    },
    {
      id: 8,
      code: 'EE402',
      name: 'Power Electronics',
      instructor: 'Dr. Thilini Fernando',
      credits: 3,
      semester: 'Spring 2024',
      status: 'Planned',
      progress: 0,
      subject: 'Electrical Engineering'
    },
    {
      id: 9,
      code: 'EE501',
      name: 'Embedded Systems',
      instructor: 'Prof. Anura Karunaratne',
      credits: 3,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 60,
      subject: 'Electrical Engineering'
    },
    {
      id: 10,
      code: 'EE502',
      name: 'Communication Systems',
      instructor: 'Prof. Anura Karunaratne',
      credits: 3,
      semester: 'Spring 2024',
      status: 'Completed',
      progress: 100,
      subject: 'Electrical Engineering'
    },

    // Civil Engineering Courses
    {
      id: 11,
      code: 'CE101',
      name: 'Structural Analysis',
      instructor: 'Dr. Ruwan Perera',
      credits: 3,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 50,
      subject: 'Civil Engineering'
    },
    {
      id: 12,
      code: 'CE102',
      name: 'Concrete Technology',
      instructor: 'Dr. Ruwan Perera',
      credits: 3,
      semester: 'Spring 2024',
      status: 'Completed',
      progress: 100,
      subject: 'Civil Engineering'
    },
    {
      id: 13,
      code: 'CE201',
      name: 'Geotechnical Engineering',
      instructor: 'Prof. Chamika Gunawardena',
      credits: 4,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 70,
      subject: 'Civil Engineering'
    },
    {
      id: 14,
      code: 'CE202',
      name: 'Transportation Engineering',
      instructor: 'Prof. Chamika Gunawardena',
      credits: 3,
      semester: 'Spring 2024',
      status: 'Completed',
      progress: 100,
      subject: 'Civil Engineering'
    },

    // Mechanical Engineering Courses
    {
      id: 15,
      code: 'ME101',
      name: 'Fluid Mechanics',
      instructor: 'Dr. Lakshman Perera',
      credits: 4,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 60,
      subject: 'Mechanical Engineering'
    },
    {
      id: 16,
      code: 'ME102',
      name: 'Thermodynamics',
      instructor: 'Dr. Lakshman Perera',
      credits: 4,
      semester: 'Spring 2024',
      status: 'Completed',
      progress: 100,
      subject: 'Mechanical Engineering'
    },
    {
      id: 17,
      code: 'ME201',
      name: 'Manufacturing Processes',
      instructor: 'Prof. Sandeep Jayawardena',
      credits: 3,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 75,
      subject: 'Mechanical Engineering'
    },
    {
      id: 18,
      code: 'ME202',
      name: 'Machine Design',
      instructor: 'Prof. Sandeep Jayawardena',
      credits: 3,
      semester: 'Spring 2024',
      status: 'Completed',
      progress: 100,
      subject: 'Mechanical Engineering'
    },

    // Marine Engineering Courses
    {
      id: 19,
      code: 'ME101',
      name: 'Ship Design',
      instructor: 'Dr. Dinesh Perera',
      credits: 3,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 50,
      subject: 'Marine Engineering'
    },
    {
      id: 20,
      code: 'ME102',
      name: 'Marine Power Systems',
      instructor: 'Dr. Dinesh Perera',
      credits: 3,
      semester: 'Spring 2024',
      status: 'Completed',
      progress: 100,
      subject: 'Marine Engineering'
    },
    {
      id: 21,
      code: 'ME201',
      name: 'Marine Propulsion',
      instructor: 'Prof. Ranjith Wijesinghe',
      credits: 4,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 60,
      subject: 'Marine Engineering'
    },
    {
      id: 22,
      code: 'ME202',
      name: 'Offshore Structures',
      instructor: 'Prof. Ranjith Wijesinghe',
      credits: 3,
      semester: 'Spring 2024',
      status: 'Planned',
      progress: 0,
      subject: 'Marine Engineering'
    }
];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSemester = selectedSemester === 'all' || course.semester === selectedSemester;
    const matchesSubject = selectedSubject === 'all' || course.subject === selectedSubject;
    return matchesSearch && matchesSemester && matchesSubject;
  });

  const subjects = ['all', ...new Set(courses.map(course => course.subject))];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Enrolled':
        return 'status-enrolled';
      case 'Completed':
        return 'status-completed';
      default:
        return 'status-planned';
    }
  };

  return (
    <div className="courses-container">
      {/* Header with Search and Filters */}
      <div className="header-section">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search courses..."
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
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              <option value="all">All Semesters</option>
              <option value="Fall 2024">Fall 2024</option>
              <option value="Spring 2024">Spring 2024</option>
            </select>
          </div>
          <select
            className="filter-select"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>
                {subject === 'all' ? 'All Subjects' : subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="stat-card stat-card-purple">
          <h4>Total Courses</h4>
          <p>{courses.length}</p>
        </div>
        <div className="stat-card stat-card-blue">
          <h4>Enrolled Courses</h4>
          <p>{courses.filter(c => c.status === 'Enrolled').length}</p>
        </div>
        <div className="stat-card stat-card-green">
          <h4>Completed Courses</h4>
          <p>{courses.filter(c => c.status === 'Completed').length}</p>
        </div>
        <div className="stat-card stat-card-pink">
          <h4>Total Credits</h4>
          <p>{courses.reduce((sum, course) => sum + course.credits, 0)}</p>
        </div>
      </div>

      {/* Course Grid */}
      <div className="course-grid">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-content">
              <div className="course-header">
                <div>
                  <h3 className="course-title">{course.name}</h3>
                  <p className="course-code">{course.code}</p>
                </div>
                <Book className="course-icon" />
              </div>
              
              <div className="course-details">
                <p className="course-detail">
                  <span className="detail-label">Subject:</span> {course.subject}
                </p>
                <p className="course-detail">
                  <span className="detail-label">Instructor:</span> {course.instructor}
                </p>
                <p className="course-detail">
                  <span className="detail-label">Credits:</span> {course.credits}
                </p>
                <p className="course-detail">
                  <span className="detail-label">Semester:</span> {course.semester}
                </p>
              </div>

              <div className="progress-container">
                <div className="progress-header">
                  <span className="progress-text">Progress</span>
                  <span className="progress-text">{course.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="course-footer">
                <span className={`status-badge ${getStatusClass(course.status)}`}>
                  {course.status}
                </span>
                <button className="view-details-btn">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;