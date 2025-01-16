

// import React, { useState } from 'react';
// import { Search, Filter, Book } from 'lucide-react';

// const CoursesSection = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedSemester, setSelectedSemester] = useState('all');
//   const [selectedSubject, setSelectedSubject] = useState('all');

//   const courses = [
//     // Computer Science Courses
//     {
//       id: 1,
//       code: 'CS101',
//       name: 'Introduction to Programming',
//       instructor: 'Dr. Smith',
//       credits: 3,
//       semester: 'Fall 2024',
//       status: 'Enrolled',
//       progress: 60,
//       subject: 'Computer Science'
//     },
    // {
    //   id: 2,
    //   code: 'CS201',
    //   name: 'Data Structures',
    //   instructor: 'Dr. Anderson',
    //   credits: 4,
    //   semester: 'Spring 2024',
    //   status: 'Completed',
    //   progress: 100,
    //   subject: 'Computer Science'
    // },
    // // Mathematics Courses
    // {
    //   id: 3,
    //   code: 'MATH101',
    //   name: 'Calculus I',
    //   instructor: 'Dr. Johnson',
    //   credits: 4,
    //   semester: 'Fall 2024',
    //   status: 'Enrolled',
    //   progress: 75,
    //   subject: 'Mathematics'
    // },
    // {
    //   id: 4,
    //   code: 'MATH201',
    //   name: 'Linear Algebra',
    //   instructor: 'Prof. Williams',
    //   credits: 3,
    //   semester: 'Spring 2024',
    //   status: 'Completed',
    //   progress: 100,
    //   subject: 'Mathematics'
    // },
    // // Physics Courses
    // {
    //   id: 5,
    //   code: 'PHY101',
    //   name: 'Mechanics',
    //   instructor: 'Dr. Brown',
    //   credits: 4,
    //   semester: 'Fall 2024',
    //   status: 'Enrolled',
    //   progress: 45,
    //   subject: 'Physics'
    // },
    // {
    //   id: 6,
    //   code: 'PHY201',
    //   name: 'Electromagnetism',
    //   instructor: 'Dr. Davis',
    //   credits: 4,
    //   semester: 'Spring 2024',
    //   status: 'Completed',
    //   progress: 100,
    //   subject: 'Physics'
    // },
    // // English Courses
    // {
    //   id: 9,
    //   code: 'ENG101',
    //   name: 'Introduction to Literature',
    //   instructor: 'Dr. Carter',
    //   credits: 3,
    //   semester: 'Fall 2024',
    //   status: 'Enrolled',
    //   progress: 40,
    //   subject: 'English'
    // },
    // {
    //   id: 10,
    //   code: 'ENG201',
    //   name: 'Creative Writing',
    //   instructor: 'Prof. Thompson',
    //   credits: 3,
    //   semester: 'Spring 2024',
    //   status: 'Planned',
    //   progress: 0,
    //   subject: 'English'
    // }
//   ];

//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          course.code.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesSemester = selectedSemester === 'all' || course.semester === selectedSemester;
//     const matchesSubject = selectedSubject === 'all' || course.subject === selectedSubject;
//     return matchesSearch && matchesSemester && matchesSubject;
//   });

//   const subjects = ['all', ...new Set(courses.map(course => course.subject))];

//   return (
//     <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
//       {/* Header with Search and Filters */}
//       <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//           <input
//             type="text"
//             placeholder="Search courses..."
//             className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <Filter className="text-gray-400 h-5 w-5" />
//             <select
//               className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               value={selectedSemester}
//               onChange={(e) => setSelectedSemester(e.target.value)}
//             >
//               <option value="all">All Semesters</option>
//               <option value="Fall 2024">Fall 2024</option>
//               <option value="Spring 2024">Spring 2024</option>
//             </select>
//           </div>
//           <select
//             className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//             value={selectedSubject}
//             onChange={(e) => setSelectedSubject(e.target.value)}
//           >
//             {subjects.map(subject => (
//               <option key={subject} value={subject}>
//                 {subject === 'all' ? 'All Subjects' : subject}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Statistics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//         <div className="bg-gradient-to-r from-purple-500 to-purple-400 p-6 rounded-2xl shadow-lg">
//           <h4 className="text-sm text-white/80">Total Courses</h4>
//           <p className="text-2xl font-semibold text-white">{courses.length}</p>
//         </div>
//         <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-2xl shadow-lg">
//           <h4 className="text-sm text-white/80">Enrolled Courses</h4>
//           <p className="text-2xl font-semibold text-white">
//             {courses.filter(c => c.status === 'Enrolled').length}
//           </p>
//         </div>
//         <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-2xl shadow-lg">
//           <h4 className="text-sm text-white/80">Completed Courses</h4>
//           <p className="text-2xl font-semibold text-white">
//             {courses.filter(c => c.status === 'Completed').length}
//           </p>
//         </div>
//         <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-6 rounded-2xl shadow-lg">
//           <h4 className="text-sm text-white/80">Total Credits</h4>
//           <p className="text-2xl font-semibold text-white">
//             {courses.reduce((sum, course) => sum + course.credits, 0)}
//           </p>
//         </div>
//       </div>

//       {/* Course Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCourses.map(course => (
//           <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//             <div className="p-6">
//               <div className="flex items-start justify-between">
//                 <div>
//                   <h3 className="font-semibold text-lg text-gray-800">{course.name}</h3>
//                   <p className="text-gray-600 text-sm">{course.code}</p>
//                 </div>
//                 <Book className="h-6 w-6 text-purple-600" />
//               </div>
              
//               <div className="mt-4 space-y-2">
//                 <p className="text-sm text-gray-700">
//                   <span className="font-medium">Subject:</span> {course.subject}
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <span className="font-medium">Instructor:</span> {course.instructor}
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <span className="font-medium">Credits:</span> {course.credits}
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <span className="font-medium">Semester:</span> {course.semester}
//                 </p>
//               </div>

//               <div className="mt-4">
//                 <div className="flex justify-between items-center mb-1">
//                   <span className="text-sm font-medium text-gray-700">Progress</span>
//                   <span className="text-sm font-medium text-gray-700">{course.progress}%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div
//                     className="bg-purple-600 h-2 rounded-full"
//                     style={{ width: `${course.progress}%` }}
//                   ></div>
//                 </div>
//               </div>

//               <div className="mt-4 flex justify-between items-center">
//                 <span className={`px-2 py-1 rounded-full text-sm ${
//                   course.status === 'Enrolled' ? 'bg-green-100 text-green-800' :
//                   course.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
//                   'bg-gray-100 text-gray-800'
//                 }`}>
//                   {course.status}
//                 </span>
//                 <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CoursesSection;



import React, { useState } from 'react';
import { Search, Filter, Book } from 'lucide-react';
import './CoursesSection.css';

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