import React, { useState } from 'react';
import { Search, Filter, Book } from 'lucide-react';

const CoursesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const courses = [
    // Computer Science Courses
    {
      id: 1,
      code: 'CS101',
      name: 'Introduction to Programming',
      instructor: 'Dr. Smith',
      credits: 3,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 60,
      subject: 'Computer Science'
    },
    {
      id: 2,
      code: 'CS201',
      name: 'Data Structures',
      instructor: 'Dr. Anderson',
      credits: 4,
      semester: 'Spring 2024',
      status: 'Completed',
      progress: 100,
      subject: 'Computer Science'
    },
    // Mathematics Courses
    {
      id: 3,
      code: 'MATH101',
      name: 'Calculus I',
      instructor: 'Dr. Johnson',
      credits: 4,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 75,
      subject: 'Mathematics'
    },
    {
      id: 4,
      code: 'MATH201',
      name: 'Linear Algebra',
      instructor: 'Prof. Williams',
      credits: 3,
      semester: 'Spring 2024',
      status: 'Completed',
      progress: 100,
      subject: 'Mathematics'
    },
    // Physics Courses
    {
      id: 5,
      code: 'PHY101',
      name: 'Mechanics',
      instructor: 'Dr. Brown',
      credits: 4,
      semester: 'Fall 2024',
      status: 'Enrolled',
      progress: 45,
      subject: 'Physics'
    },
    {
      id: 6,
      code: 'PHY201',
      name: 'Electromagnetism',
      instructor: 'Dr. Davis',
      credits: 4,
      semester: 'Spring 2024',
      status: 'Completed',
      progress: 100,
      subject: 'Physics'
    },
    // English Courses
{
    id: 9,
    code: 'ENG101',
    name: 'Introduction to Literature',
    instructor: 'Dr. Carter',
    credits: 3,
    semester: 'Fall 2024',
    status: 'Enrolled',
    progress: 40,
    subject: 'English'
  },
  {
    id: 10,
    code: 'ENG201',
    name: 'Creative Writing',
    instructor: 'Prof. Thompson',
    credits: 3,
    semester: 'Spring 2024',
    status: 'Planned',
    progress: 0,
    subject: 'English'
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

  return (
    <div className="p-6">
      {/* Header with Search and Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search courses..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-96"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              className="border rounded-lg px-4 py-2"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              <option value="all">All Semesters</option>
              <option value="Fall 2024">Fall 2024</option>
              <option value="Spring 2024">Spring 2024</option>
            </select>
          </div>
          <select
            className="border rounded-lg px-4 py-2"
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-sm text-gray-500">Total Courses</h4>
          <p className="text-2xl font-semibold">{courses.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-sm text-gray-500">Enrolled Courses</h4>
          <p className="text-2xl font-semibold text-blue-600">
            {courses.filter(c => c.status === 'Enrolled').length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-sm text-gray-500">Completed Courses</h4>
          <p className="text-2xl font-semibold text-green-600">
            {courses.filter(c => c.status === 'Completed').length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="text-sm text-gray-500">Total Credits</h4>
          <p className="text-2xl font-semibold text-purple-600">
            {courses.reduce((sum, course) => sum + course.credits, 0)}
          </p>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{course.name}</h3>
                  <p className="text-gray-600 text-sm">{course.code}</p>
                </div>
                <Book className="h-6 w-6 text-blue-600" />
              </div>
              
              <div className="mt-4 space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Subject:</span> {course.subject}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Instructor:</span> {course.instructor}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Credits:</span> {course.credits}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Semester:</span> {course.semester}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  course.status === 'Enrolled' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {course.status}
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
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