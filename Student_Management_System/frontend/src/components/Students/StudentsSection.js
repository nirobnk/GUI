// // import React, { useState } from 'react';
// // import { Search, Filter, User, MoreVertical, ChevronDown } from 'lucide-react';

// // const StudentsSection = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedYear, setSelectedYear] = useState('all');
// //   const [selectedDepartment, setSelectedDepartment] = useState('all');
// //   const [sortConfig, setSortConfig] = useState({
// //     key: 'name',
// //     direction: 'asc'
// //   });

// //   const students = [
// //     {
// //       id: 1,
// //       name: 'John Smith',
// //       rollNo: 'CS2024001',
// //       department: 'Computer Science',
// //       year: '2nd Year',
// //       gpa: 3.8,
// //       attendance: 92,
// //       status: 'Active',
// //       email: 'john.smith@university.edu',
// //       advisor: 'Dr. Anderson'
// //     },
// //     {
// //       id: 2,
// //       name: 'Emily Johnson',
// //       rollNo: 'MT2024002',
// //       department: 'Mathematics',
// //       year: '3rd Year',
// //       gpa: 3.9,
// //       attendance: 95,
// //       status: 'Active',
// //       email: 'emily.j@university.edu',
// //       advisor: 'Dr. Williams'
// //     },
// //     {
// //       id: 3,
// //       name: 'Michael Chen',
// //       rollNo: 'PH2024003',
// //       department: 'Physics',
// //       year: '1st Year',
// //       gpa: 3.7,
// //       attendance: 88,
// //       status: 'Active',
// //       email: 'michael.c@university.edu',
// //       advisor: 'Dr. Brown'
// //     },
// //     {
// //       id: 4,
// //       name: 'Sarah Davis',
// //       rollNo: 'EN2024004',
// //       department: 'English',
// //       year: '4th Year',
// //       gpa: 3.95,
// //       attendance: 96,
// //       status: 'Active',
// //       email: 'sarah.d@university.edu',
// //       advisor: 'Dr. Carter'
// //     },
// //     {
// //       id: 5,
// //       name: 'James Wilson',
// //       rollNo: 'CS2024005',
// //       department: 'Computer Science',
// //       year: '2nd Year',
// //       gpa: 3.6,
// //       attendance: 90,
// //       status: 'On Leave',
// //       email: 'james.w@university.edu',
// //       advisor: 'Dr. Smith'
// //     },
// //     {
// //       id: 6,
// //       name: 'Lisa Thompson',
// //       rollNo: 'MT2024006',
// //       department: 'Mathematics',
// //       year: '3rd Year',
// //       gpa: 3.85,
// //       attendance: 93,
// //       status: 'Active',
// //       email: 'lisa.t@university.edu',
// //       advisor: 'Dr. Johnson'
// //     }
// //   ];

// //   const handleSort = (key) => {
// //     let direction = 'asc';
// //     if (sortConfig.key === key && sortConfig.direction === 'asc') {
// //       direction = 'desc';
// //     }
// //     setSortConfig({ key, direction });
// //   };

// //   const filteredStudents = students.filter(student => {
// //     const matchesSearch =
// //       student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
// //     const matchesYear = selectedYear === 'all' || student.year === selectedYear;
// //     const matchesDepartment = selectedDepartment === 'all' || student.department === selectedDepartment;
// //     return matchesSearch && matchesYear && matchesDepartment;
// //   }).sort((a, b) => {
// //     if (sortConfig.direction === 'asc') {
// //       return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
// //     }
// //     return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
// //   });

// //   const departments = ['all', ...new Set(students.map(student => student.department))];
// //   const years = ['all', '1st Year', '2nd Year', '3rd Year', '4th Year'];

// //   const SortableHeader = ({ label, field }) => (
// //     <th
// //       className="px-4 py-3 cursor-pointer hover:bg-gray-50"
// //       onClick={() => handleSort(field)}
// //     >
// //       <div className="flex items-center gap-1">
// //         {label}
// //         <ChevronDown className={`h-4 w-4 transition-transform ${
// //           sortConfig.key === field && sortConfig.direction === 'desc' ? 'rotate-180' : ''
// //         }`} />
// //       </div>
// //     </th>
// //   );

// //   return (
// //     <div className="p-6">
// //       {/* Header with Search and Filters */}
// //       <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
// //         <div className="relative">
// //           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
// //           <input
// //             type="text"
// //             placeholder="Search students..."
// //             className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-96"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //         </div>
// //         <div className="flex items-center gap-4">
// //           <div className="flex items-center gap-2">
// //             <Filter className="text-gray-400 h-5 w-5" />
// //             <select
// //               className="border rounded-lg px-4 py-2"
// //               value={selectedYear}
// //               onChange={(e) => setSelectedYear(e.target.value)}
// //             >
// //               {years.map(year => (
// //                 <option key={year} value={year}>
// //                   {year === 'all' ? 'All Years' : year}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //           <select
// //             className="border rounded-lg px-4 py-2"
// //             value={selectedDepartment}
// //             onChange={(e) => setSelectedDepartment(e.target.value)}
// //           >
// //             {departments.map(department => (
// //               <option key={department} value={department}>
// //                 {department === 'all' ? 'All Departments' : department}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //       </div>

// //       {/* Statistics Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
// //         <div className="bg-white p-4 rounded-lg shadow-md">
// //           <h4 className="text-sm text-gray-500">Total Students</h4>
// //           <p className="text-2xl font-semibold">{students.length}</p>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow-md">
// //           <h4 className="text-sm text-gray-500">Active Students</h4>
// //           <p className="text-2xl font-semibold text-green-600">
// //             {students.filter(s => s.status === 'Active').length}
// //           </p>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow-md">
// //           <h4 className="text-sm text-gray-500">Average GPA</h4>
// //           <p className="text-2xl font-semibold text-blue-600">
// //             {(students.reduce((sum, student) => sum + student.gpa, 0) / students.length).toFixed(2)}
// //           </p>
// //         </div>
// //         <div className="bg-white p-4 rounded-lg shadow-md">
// //           <h4 className="text-sm text-gray-500">Average Attendance</h4>
// //           <p className="text-2xl font-semibold text-purple-600">
// //             {Math.round(students.reduce((sum, student) => sum + student.attendance, 0) / students.length)}%
// //           </p>
// //         </div>
// //       </div>

// //       {/* Students List View */}
// //       <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //         <div className="overflow-x-auto">
// //           <table className="w-full text-sm">
// //             <thead className="bg-gray-50 text-gray-600">
// //               <tr>
// //                 <SortableHeader label="Name" field="name" />
// //                 <SortableHeader label="Roll No" field="rollNo" />
// //                 <SortableHeader label="Department" field="department" />
// //                 <SortableHeader label="Year" field="year" />
// //                 <SortableHeader label="GPA" field="gpa" />
// //                 <th className="px-4 py-3">Attendance</th>
// //                 <th className="px-4 py-3">Status</th>
// //                 <th className="px-4 py-3">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-gray-200">
// //               {filteredStudents.map(student => (
// //                 <tr key={student.id} className="hover:bg-gray-50">
// //                   <td className="px-4 py-3">
// //                     <div className="flex items-center gap-3">
// //                       <User className="h-5 w-5 text-gray-400" />
// //                       <div>
// //                         <div className="font-medium">{student.name}</div>
// //                         <div className="text-gray-500 text-xs">{student.email}</div>
// //                       </div>
// //                     </div>
// //                   </td>
// //                   <td className="px-4 py-3 font-medium">{student.rollNo}</td>
// //                   <td className="px-4 py-3">{student.department}</td>
// //                   <td className="px-4 py-3">{student.year}</td>
// //                   <td className="px-4 py-3 font-medium">{student.gpa}</td>
// //                   <td className="px-4 py-3">
// //                     <div className="flex items-center gap-2">
// //                       <div className="w-24 bg-gray-200 rounded-full h-2">
// //                         <div
// //                           className="bg-blue-600 h-2 rounded-full"
// //                           style={{ width: `${student.attendance}%` }}
// //                         ></div>
// //                       </div>
// //                       <span>{student.attendance}%</span>
// //                     </div>
// //                   </td>
// //                   <td className="px-4 py-3">
// //                     <span className={`px-2 py-1 rounded-full text-xs ${
// //                       student.status === 'Active'
// //                         ? 'bg-green-100 text-green-800'
// //                         : 'bg-yellow-100 text-yellow-800'
// //                     }`}>
// //                       {student.status}
// //                     </span>
// //                   </td>
// //                   <td className="px-4 py-3">
// //                     <button className="p-1 hover:bg-gray-100 rounded">
// //                       <MoreVertical className="h-5 w-5 text-gray-400" />
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StudentsSection;

import React, { useState } from "react";
import { Search, Filter, User, MoreVertical, ChevronDown } from "lucide-react";

const StudentsSection = ({ userType }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });

  const students = [
    {
      id: 1,
      name: "John Smith",
      rollNo: "CS2024001",
      department: "Computer Science",
      year: "2nd Year",
      gpa: 3.8,
      attendance: 92,
      status: "Active",
      email: "john.smith@university.edu",
      advisor: "Dr. Anderson",
    },
    {
      id: 2,
      name: "Emily Johnson",
      rollNo: "MT2024002",
      department: "Mathematics",
      year: "3rd Year",
      gpa: 3.9,
      attendance: 95,
      status: "Active",
      email: "emily.j@university.edu",
      advisor: "Dr. Williams",
    },
    {
      id: 3,
      name: "Michael Chen",
      rollNo: "PH2024003",
      department: "Physics",
      year: "1st Year",
      gpa: 3.7,
      attendance: 88,
      status: "Active",
      email: "michael.c@university.edu",
      advisor: "Dr. Brown",
    },
    {
      id: 4,
      name: "Sarah Davis",
      rollNo: "EN2024004",
      department: "English",
      year: "4th Year",
      gpa: 3.95,
      attendance: 96,
      status: "Active",
      email: "sarah.d@university.edu",
      advisor: "Dr. Carter",
    },
    {
      id: 5,
      name: "James Wilson",
      rollNo: "CS2024005",
      department: "Computer Science",
      year: "2nd Year",
      gpa: 3.6,
      attendance: 90,
      status: "On Leave",
      email: "james.w@university.edu",
      advisor: "Dr. Smith",
    },
    {
      id: 6,
      name: "Lisa Thompson",
      rollNo: "MT2024006",
      department: "Mathematics",
      year: "3rd Year",
      gpa: 3.85,
      attendance: 93,
      status: "Active",
      email: "lisa.t@university.edu",
      advisor: "Dr. Johnson",
    },
  ];

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredStudents = students
    .filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
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

  const departments = [
    "all",
    ...new Set(students.map((student) => student.department)),
  ];
  const years = ["all", "1st Year", "2nd Year", "3rd Year", "4th Year"];

  const SortableHeader = ({ label, field }) => (
    <th
      className="px-4 py-3 cursor-pointer hover:bg-gray-50"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-1">
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            sortConfig.key === field && sortConfig.direction === "desc"
              ? "rotate-180"
              : ""
          }`}
        />
      </div>
    </th>
  );

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Header with Search and Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map((department) => (
              <option key={department} value={department}>
                {department === "all" ? "All Departments" : department}
              </option>
            ))}
          </select>
          {/* {userType === 'admin' && (
            <button
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              
            >
              <Plus className="h-5 w-5" />
              Add Student
            </button>
          )} */}
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-purple-400 p-6 rounded-2xl shadow-lg">
          <h4 className="text-sm text-white/80">Total Students</h4>
          <p className="text-2xl font-semibold text-white">{students.length}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-2xl shadow-lg">
          <h4 className="text-sm text-white/80">Active Students</h4>
          <p className="text-2xl font-semibold text-white">
            {students.filter((s) => s.status === "Active").length}
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-2xl shadow-lg">
          <h4 className="text-sm text-white/80">Average GPA</h4>
          <p className="text-2xl font-semibold text-white">
            {(
              students.reduce((sum, student) => sum + student.gpa, 0) /
              students.length
            ).toFixed(2)}
          </p>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-6 rounded-2xl shadow-lg">
          <h4 className="text-sm text-white/80">Average Attendance</h4>
          <p className="text-2xl font-semibold text-white">
            {Math.round(
              students.reduce((sum, student) => sum + student.attendance, 0) /
                students.length
            )}
            %
          </p>
        </div>
      </div>

      {/* Students List View */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <SortableHeader label="Name" field="name" />
                <SortableHeader label="Roll No" field="rollNo" />
                <SortableHeader label="Department" field="department" />
                <SortableHeader label="Year" field="year" />
                <SortableHeader label="GPA" field="gpa" />
                <th className="px-4 py-3">Attendance</th>
                <th className="px-4 py-3">Status</th>
                {userType === "admin" && <th className="px-4 py-3">Actions</th>}
                {/* <th className="px-4 py-3">Actions</th> */}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-medium text-gray-800">
                          {student.name}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {student.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {student.rollNo}
                  </td>
                  <td className="px-4 py-3 text-gray-800">
                    {student.department}
                  </td>
                  <td className="px-4 py-3 text-gray-800">{student.year}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {student.gpa}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${student.attendance}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-800">
                        {student.attendance}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  {userType === "admin" && (
                    <td className="px-4 py-3">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="h-5 w-5 text-purple-600" />
                      </button>
                    </td>
                  )}
                  {/* <td className="px-4 py-3">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="h-5 w-5 text-purple-600" />
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentsSection;

// import React, { useState } from 'react';
// import { Search, Filter, User, MoreVertical, ChevronDown, Plus,X } from 'lucide-react';

// const StudentsSection = ({ userType }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedYear, setSelectedYear] = useState('all');
//   const [selectedDepartment, setSelectedDepartment] = useState('all');
//   const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
//   const [showAddForm, setShowAddForm] = useState(false); // State to control form visibility
//   const [students, setStudents] = useState([
//     // Sample student data
//     {
//       id: 1,
//       name: 'John Smith',
//       rollNo: 'CS2024001',
//       department: 'Computer Science',
//       year: '2nd Year',
//       gpa: 3.8,
//       attendance: 92,
//       status: 'Active',
//       email: 'john.smith@university.edu',
//       advisor: 'Dr. Anderson'
//     },
//     {
//       id: 2,
//       name: 'Emily Johnson',
//       rollNo: 'MT2024002',
//       department: 'Mathematics',
//       year: '3rd Year',
//       gpa: 3.9,
//       attendance: 95,
//       status: 'Active',
//       email: 'emily.j@university.edu',
//       advisor: 'Dr. Williams'
//     },
//   ]);

//   // Departments and years for filters
//   const departments = ['all', 'Computer Science', 'Mathematics', 'Physics', 'English'];
//   const years = ['all', '1st Year', '2nd Year', '3rd Year', '4th Year'];

//   // Function to handle adding a new student
//   const handleAddStudent = (newStudent) => {
//     setStudents([...students, { ...newStudent, id: Date.now() }]); // Add new student with a unique ID
//     setShowAddForm(false); // Close the form after adding
//   };

//   // Function to handle sorting
//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   // Function to filter and sort students
//   const filteredStudents = students
//     .filter((student) => {
//       const matchesSearch =
//         student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesYear = selectedYear === 'all' || student.year === selectedYear;
//       const matchesDepartment =
//         selectedDepartment === 'all' || student.department === selectedDepartment;
//       return matchesSearch && matchesYear && matchesDepartment;
//     })
//     .sort((a, b) => {
//       if (sortConfig.direction === 'asc') {
//         return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
//       }
//       return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
//     });

//   // Sortable header component
//   const SortableHeader = ({ label, field }) => (
//     <th
//       className="px-4 py-3 cursor-pointer hover:bg-gray-50"
//       onClick={() => handleSort(field)}
//     >
//       <div className="flex items-center gap-1">
//         {label}
//         <ChevronDown
//           className={`h-4 w-4 transition-transform ${
//             sortConfig.key === field && sortConfig.direction === 'desc' ? 'rotate-180' : ''
//           }`}
//         />
//       </div>
//     </th>
//   );

//   return (
//     <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
//       {/* Header with Search and Filters */}
//       <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//           <input
//             type="text"
//             placeholder="Search students..."
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
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(e.target.value)}
//             >
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year === 'all' ? 'All Years' : year}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <select
//             className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//             value={selectedDepartment}
//             onChange={(e) => setSelectedDepartment(e.target.value)}
//           >
//             {departments.map((department) => (
//               <option key={department} value={department}>
//                 {department === 'all' ? 'All Departments' : department}
//               </option>
//             ))}
//           </select>
//           {userType === 'admin' && (
//             <button
//               className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
//               onClick={() => setShowAddForm(true)}
//             >
//               <Plus className="h-5 w-5" />
//               Add Student
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Pop-up Form for Adding Students */}
//       {showAddForm && (
//         <AddStudentForm
//           onSave={handleAddStudent}
//           onCancel={() => setShowAddForm(false)}
//         />
//       )}

//       {/* Statistics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//         <div className="bg-gradient-to-r from-purple-500 to-purple-400 p-6 rounded-2xl shadow-lg">
//           <h4 className="text-sm text-white/80">Total Students</h4>
//           <p className="text-2xl font-semibold text-white">{students.length}</p>
//         </div>
//         <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-2xl shadow-lg">
//           <h4 className="text-sm text-white/80">Active Students</h4>
//           <p className="text-2xl font-semibold text-white">
//             {students.filter((s) => s.status === 'Active').length}
//           </p>
//         </div>
//         <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-2xl shadow-lg">
//           <h4 className="text-sm text-white/80">Average GPA</h4>
//           <p className="text-2xl font-semibold text-white">
//             {(students.reduce((sum, student) => sum + student.gpa, 0) / students.length).toFixed(2)}
//           </p>
//         </div>
//         <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-6 rounded-2xl shadow-lg">
//           <h4 className="text-sm text-white/80">Average Attendance</h4>
//           <p className="text-2xl font-semibold text-white">
//             {Math.round(students.reduce((sum, student) => sum + student.attendance, 0) / students.length)}%
//           </p>
//         </div>
//       </div>

//       {/* Students List View */}
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead className="bg-gray-50 text-gray-600">
//               <tr>
//                 <SortableHeader label="Name" field="name" />
//                 <SortableHeader label="Roll No" field="rollNo" />
//                 <SortableHeader label="Department" field="department" />
//                 <SortableHeader label="Year" field="year" />
//                 <SortableHeader label="GPA" field="gpa" />
//                 <th className="px-4 py-3">Attendance</th>
//                 <th className="px-4 py-3">Status</th>
//                 {userType === 'admin' && <th className="px-4 py-3">Actions</th>}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredStudents.map((student) => (
//                 <tr key={student.id} className="hover:bg-gray-50">
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <User className="h-5 w-5 text-purple-600" />
//                       <div>
//                         <div className="font-medium text-gray-800">{student.name}</div>
//                         <div className="text-gray-500 text-xs">{student.email}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3 font-medium text-gray-800">{student.rollNo}</td>
//                   <td className="px-4 py-3 text-gray-800">{student.department}</td>
//                   <td className="px-4 py-3 text-gray-800">{student.year}</td>
//                   <td className="px-4 py-3 font-medium text-gray-800">{student.gpa}</td>
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-2">
//                       <div className="w-24 bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-purple-600 h-2 rounded-full"
//                           style={{ width: `${student.attendance}%` }}
//                         ></div>
//                       </div>
//                       <span className="text-gray-800">{student.attendance}%</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${
//                         student.status === 'Active'
//                           ? 'bg-green-100 text-green-800'
//                           : 'bg-yellow-100 text-yellow-800'
//                       }`}
//                     >
//                       {student.status}
//                     </span>
//                   </td>
//                   {userType === 'admin' && (
//                     <td className="px-4 py-3">
//                       <button className="p-1 hover:bg-gray-100 rounded">
//                         <MoreVertical className="h-5 w-5 text-purple-600" />
//                       </button>
//                     </td>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentsSection;

// const AddStudentForm = ({ onSave, onCancel }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     rollNo: '',
//     department: '',
//     year: '',
//     gpa: '',
//     attendance: '',
//     status: 'Active',
//     email: '',
//     advisor: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl relative">
//         <button
//           onClick={onCancel}
//           className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//         >
//           <X size={20} />
//         </button>

//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Student</h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-2 gap-x-6 gap-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Roll No</label>
//                 <input
//                   type="text"
//                   name="rollNo"
//                   value={formData.rollNo}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//                 <select
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   <option value="Computer Science">Computer Science</option>
//                   <option value="Mathematics">Mathematics</option>
//                   <option value="Physics">Physics</option>
//                   <option value="English">English</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
//                 <select
//                   name="year"
//                   value={formData.year}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 >
//                   <option value="">Select Year</option>
//                   <option value="1st Year">First Year</option>
//                   <option value="2nd Year">Second Year</option>
//                   <option value="3rd Year">Third Year</option>
//                   <option value="4th Year">Fourth Year</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
//                 <input
//                   type="number"
//                   name="gpa"
//                   value={formData.gpa}
//                   onChange={handleChange}
//                   min="0"
//                   max="4"
//                   step="0.01"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Attendance (%)</label>
//                 <input
//                   type="number"
//                   name="attendance"
//                   value={formData.attendance}
//                   onChange={handleChange}
//                   min="0"
//                   max="100"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Advisor</label>
//                 <input
//                   type="text"
//                   name="advisor"
//                   value={formData.advisor}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 pt-4 border-t">
//               <button
//                 type="button"
//                 className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//                 onClick={onCancel}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//               >
//                 Save Student
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { Search, Filter, User, MoreVertical, ChevronDown, Plus, X } from 'lucide-react';

// const StudentsSection = ({ userType }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedYear, setSelectedYear] = useState('all');
//   const [selectedDepartment, setSelectedDepartment] = useState('all');
//   const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
//   const [showAddForm, setShowAddForm] = useState(false); // State to control form visibility
//   const [students, setStudents] = useState([
//     // Sample student data
//     {
//       id: 1,
//       name: 'John Smith',
//       rollNo: 'CS2024001',
//       department: 'Computer Science',
//       year: '2nd Year',
//       gpa: 3.8,
//       attendance: 92,
//       status: 'Active',
//       email: 'john.smith@university.edu',
//       advisor: 'Dr. Anderson'
//     },
//     {
//       id: 2,
//       name: 'Emily Johnson',
//       rollNo: 'MT2024002',
//       department: 'Mathematics',
//       year: '3rd Year',
//       gpa: 3.9,
//       attendance: 95,
//       status: 'Active',
//       email: 'emily.j@university.edu',
//       advisor: 'Dr. Williams'
//     },
//   ]);

//   // Departments and years for filters
//   const departments = ['all', 'Computer Science', 'Mathematics', 'Physics', 'English'];
//   const years = ['all', '1st Year', '2nd Year', '3rd Year', '4th Year'];

//   // Function to handle adding a new student
//   const handleAddStudent = (newStudent) => {
//     setStudents([...students, { ...newStudent, id: Date.now() }]); // Add new student with a unique ID
//     setShowAddForm(false); // Close the form after adding
//   };

//   // Function to handle sorting
//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   // Function to filter and sort students
//   const filteredStudents = students
//     .filter((student) => {
//       const matchesSearch =
//         student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesYear = selectedYear === 'all' || student.year === selectedYear;
//       const matchesDepartment =
//         selectedDepartment === 'all' || student.department === selectedDepartment;
//       return matchesSearch && matchesYear && matchesDepartment;
//     })
//     .sort((a, b) => {
//       if (sortConfig.direction === 'asc') {
//         return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
//       }
//       return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
//     });

//   // Sortable header component
//   const SortableHeader = ({ label, field }) => (
//     <th
//       className="px-4 py-3 cursor-pointer hover:bg-gray-50"
//       onClick={() => handleSort(field)}
//     >
//       <div className="flex items-center gap-1">
//         {label}
//         <ChevronDown
//           className={`h-4 w-4 transition-transform ${
//             sortConfig.key === field && sortConfig.direction === 'desc' ? 'rotate-180' : ''
//           }`}
//         />
//       </div>
//     </th>
//   );

//   return (
//     <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
//       {/* Header with Search and Filters */}
//       <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//           <input
//             type="text"
//             placeholder="Search students..."
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
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(e.target.value)}
//             >
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year === 'all' ? 'All Years' : year}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <select
//             className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//             value={selectedDepartment}
//             onChange={(e) => setSelectedDepartment(e.target.value)}
//           >
//             {departments.map((department) => (
//               <option key={department} value={department}>
//                 {department === 'all' ? 'All Departments' : department}
//               </option>
//             ))}
//           </select>
//           {userType === 'admin' && (
//             <button
//               className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
//               onClick={() => setShowAddForm(true)}
//             >
//               <Plus className="h-5 w-5" />
//               Add Student
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Pop-up Form for Adding Students */}
//       {showAddForm && userType === 'admin' && (
//         <AddStudentForm
//           onSave={handleAddStudent}
//           onCancel={() => setShowAddForm(false)}
//         />
//       )}

//       {/* Students List View */}
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead className="bg-gray-50 text-gray-600">
//               <tr>
//                 <SortableHeader label="Name" field="name" />
//                 <SortableHeader label="Roll No" field="rollNo" />
//                 <SortableHeader label="Department" field="department" />
//                 <SortableHeader label="Year" field="year" />
//                 <SortableHeader label="GPA" field="gpa" />
//                 <th className="px-4 py-3">Attendance</th>
//                 <th className="px-4 py-3">Status</th>
//                 {userType === 'admin' && <th className="px-4 py-3">Actions</th>}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredStudents.map((student) => (
//                 <tr key={student.id} className="hover:bg-gray-50">
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <User className="h-5 w-5 text-purple-600" />
//                       <div>
//                         <div className="font-medium text-gray-800">{student.name}</div>
//                         <div className="text-gray-500 text-xs">{student.email}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3 font-medium text-gray-800">{student.rollNo}</td>
//                   <td className="px-4 py-3 text-gray-800">{student.department}</td>
//                   <td className="px-4 py-3 text-gray-800">{student.year}</td>
//                   <td className="px-4 py-3 font-medium text-gray-800">{student.gpa}</td>
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-2">
//                       <div className="w-24 bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-purple-600 h-2 rounded-full"
//                           style={{ width: `${student.attendance}%` }}
//                         ></div>
//                       </div>
//                       <span className="text-gray-800">{student.attendance}%</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${
//                         student.status === 'Active'
//                           ? 'bg-green-100 text-green-800'
//                           : 'bg-yellow-100 text-yellow-800'
//                       }`}
//                     >
//                       {student.status}
//                     </span>
//                   </td>
//                   {userType === 'admin' && (
//                     <td className="px-4 py-3">
//                       <button className="p-1 hover:bg-gray-100 rounded">
//                         <MoreVertical className="h-5 w-5 text-purple-600" />
//                       </button>
//                     </td>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentsSection;

// const AddStudentForm = ({ onSave, onCancel }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     rollNo: '',
//     department: '',
//     year: '',
//     gpa: '',
//     attendance: '',
//     status: 'Active',
//     email: '',
//     advisor: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl relative">
//         <button
//           onClick={onCancel}
//           className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//         >
//           <X size={20} />
//         </button>

//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Student</h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-2 gap-x-6 gap-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Roll No</label>
//                 <input
//                   type="text"
//                   name="rollNo"
//                   value={formData.rollNo}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//                 <select
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   <option value="Computer Science">Computer Science</option>
//                   <option value="Mathematics">Mathematics</option>
//                   <option value="Physics">Physics</option>
//                   <option value="English">English</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
//                 <select
//                   name="year"
//                   value={formData.year}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 >
//                   <option value="">Select Year</option>
//                   <option value="1st Year">First Year</option>
//                   <option value="2nd Year">Second Year</option>
//                   <option value="3rd Year">Third Year</option>
//                   <option value="4th Year">Fourth Year</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
//                 <input
//                   type="number"
//                   name="gpa"
//                   value={formData.gpa}
//                   onChange={handleChange}
//                   min="0"
//                   max="4"
//                   step="0.01"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Attendance (%)</label>
//                 <input
//                   type="number"
//                   name="attendance"
//                   value={formData.attendance}
//                   onChange={handleChange}
//                   min="0"
//                   max="100"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Advisor</label>
//                 <input
//                   type="text"
//                   name="advisor"
//                   value={formData.advisor}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 pt-4 border-t">
//               <button
//                 type="button"
//                 className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//                 onClick={onCancel}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//               >
//                 Save Student
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import { Search, Filter, User, MoreVertical, ChevronDown, Plus, X } from 'lucide-react';

// const StudentsSection = ({ userType }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedYear, setSelectedYear] = useState('all');
//   const [selectedDepartment, setSelectedDepartment] = useState('all');
//   const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [students, setStudents] = useState([]);

//   // Fetch students from the backend
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Get the token from localStorage
//         const response = await fetch('http://localhost:5008/api/students', {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include the token in the headers
//           },
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch students');
//         }
//         const data = await response.json();
//         setStudents(data);
//       } catch (error) {
//         console.error('Error fetching students:', error);
//       }
//     };

//     fetchStudents();
//   }, []);

//   // Function to handle adding a new student
//   const handleAddStudent = async (newStudent) => {
//     try {
//       const token = localStorage.getItem('token'); // Get the token from localStorage
//       const response = await fetch('http://localhost:5008/api/students', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`, // Include the token in the headers
//         },
//         body: JSON.stringify(newStudent),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to add student');
//       }
//       const data = await response.json();
//       setStudents([...students, data]); // Update the UI with the new student
//       setShowAddForm(false); // Close the form
//     } catch (error) {
//       console.error('Error adding student:', error);
//     }
//   };

//   // Function to handle sorting
//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   // Function to filter and sort students
//   const filteredStudents = students
//     .filter((student) => {
//       const matchesSearch =
//         student.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         student.student_id.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesYear = selectedYear === 'all' || student.year === selectedYear;
//       const matchesDepartment =
//         selectedDepartment === 'all' || student.department === selectedDepartment;
//       return matchesSearch && matchesYear && matchesDepartment;
//     })
//     .sort((a, b) => {
//       if (sortConfig.direction === 'asc') {
//         return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
//       }
//       return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
//     });

//   // Departments and years for filters
//   const departments = ['all', ...new Set(students.map((student) => student.department))];
//   const years = ['all', '1st Year', '2nd Year', '3rd Year', '4th Year'];

//   // Sortable header component
//   const SortableHeader = ({ label, field }) => (
//     <th
//       className="px-4 py-3 cursor-pointer hover:bg-gray-50"
//       onClick={() => handleSort(field)}
//     >
//       <div className="flex items-center gap-1">
//         {label}
//         <ChevronDown
//           className={`h-4 w-4 transition-transform ${
//             sortConfig.key === field && sortConfig.direction === 'desc' ? 'rotate-180' : ''
//           }`}
//         />
//       </div>
//     </th>
//   );

//   return (
//     <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
//       {/* Header with Search and Filters */}
//       <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//           <input
//             type="text"
//             placeholder="Search students..."
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
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(e.target.value)}
//             >
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year === 'all' ? 'All Years' : year}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <select
//             className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//             value={selectedDepartment}
//             onChange={(e) => setSelectedDepartment(e.target.value)}
//           >
//             {departments.map((department) => (
//               <option key={department} value={department}>
//                 {department === 'all' ? 'All Departments' : department}
//               </option>
//             ))}
//           </select>
//           {userType === 'admin' && (
//             <button
//               className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
//               onClick={() => setShowAddForm(true)}
//             >
//               <Plus className="h-5 w-5" />
//               Add Student
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Pop-up Form for Adding Students */}
//       {showAddForm && userType === 'admin' && (
//         <AddStudentForm
//           onSave={handleAddStudent}
//           onCancel={() => setShowAddForm(false)}
//         />
//       )}

//       {/* Students List View */}
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead className="bg-gray-50 text-gray-600">
//               <tr>
//                 <SortableHeader label="Name" field="first_name" />
//                 <SortableHeader label="Roll No" field="student_id" />
//                 <SortableHeader label="Department" field="department" />
//                 <SortableHeader label="Year" field="year" />
//                 <SortableHeader label="GPA" field="gpa" />
//                 <th className="px-4 py-3">Attendance</th>
//                 <th className="px-4 py-3">Status</th>
//                 {userType === 'admin' && <th className="px-4 py-3">Actions</th>}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredStudents.map((student) => (
//                 <tr key={student.student_id} className="hover:bg-gray-50">
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <User className="h-5 w-5 text-purple-600" />
//                       <div>
//                         <div className="font-medium text-gray-800">
//                           {student.first_name} {student.last_name}
//                         </div>
//                         <div className="text-gray-500 text-xs">{student.email}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3 font-medium text-gray-800">{student.student_id}</td>
//                   <td className="px-4 py-3 text-gray-800">{student.department}</td>
//                   <td className="px-4 py-3 text-gray-800">{student.year}</td>
//                   <td className="px-4 py-3 font-medium text-gray-800">{student.gpa}</td>
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-2">
//                       <div className="w-24 bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-purple-600 h-2 rounded-full"
//                           style={{ width: `${student.attendence}%` }}
//                         ></div>
//                       </div>
//                       <span className="text-gray-800">{student.attendence}%</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${
//                         student.status === 'Active'
//                           ? 'bg-green-100 text-green-800'
//                           : 'bg-yellow-100 text-yellow-800'
//                       }`}
//                     >
//                       {student.status || 'Active'}
//                     </span>
//                   </td>
//                   {userType === 'admin' && (
//                     <td className="px-4 py-3">
//                       <button className="p-1 hover:bg-gray-100 rounded">
//                         <MoreVertical className="h-5 w-5 text-purple-600" />
//                       </button>
//                     </td>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentsSection;

// const AddStudentForm = ({ onSave, onCancel }) => {
//   const [formData, setFormData] = useState({
//     student_id: '',
//     first_name: '',
//     last_name: '',
//     email: '',
//     birthday: '',
//     address: '',
//     phone_num: '',
//     department: '',
//     enroll_date: '',
//     year: '',
//     gpa: '',
//     attendence: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl relative">
//         <button
//           onClick={onCancel}
//           className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//         >
//           <X size={20} />
//         </button>

//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Student</h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-2 gap-x-6 gap-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
//                 <input
//                   type="text"
//                   name="student_id"
//                   value={formData.student_id}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
//                 <input
//                   type="date"
//                   name="birthday"
//                   value={formData.birthday}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                 <input
//                   type="text"
//                   name="phone_num"
//                   value={formData.phone_num}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//                 <select
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   <option value="Computer Science">Computer Science</option>
//                   <option value="Mathematics">Mathematics</option>
//                   <option value="Physics">Physics</option>
//                   <option value="English">English</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Enroll Date</label>
//                 <input
//                   type="date"
//                   name="enroll_date"
//                   value={formData.enroll_date}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
//                 <select
//                   name="year"
//                   value={formData.year}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 >
//                   <option value="">Select Year</option>
//                   <option value="1st Year">1st Year</option>
//                   <option value="2nd Year">2nd Year</option>
//                   <option value="3rd Year">3rd Year</option>
//                   <option value="4th Year">4th Year</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
//                 <input
//                   type="number"
//                   name="gpa"
//                   value={formData.gpa}
//                   onChange={handleChange}
//                   min="0"
//                   max="4"
//                   step="0.01"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Attendance (%)</label>
//                 <input
//                   type="number"
//                   name="attendence"
//                   value={formData.attendence}
//                   onChange={handleChange}
//                   min="0"
//                   max="100"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 pt-4 border-t">
//               <button
//                 type="button"
//                 className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//                 onClick={onCancel}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//               >
//                 Save Student
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AddStudentForm = ({ onSave, onCancel }) => {
//   const [formData, setFormData] = useState({
//     student_id: '',
//     first_name: '',
//     last_name: '',
//     email: '',
//     birthday: '',
//     address: '',
//     phone_num: '',
//     department: '',
//     enroll_date: '',
//     year: '',
//     gpa: '',
//     attendence: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl relative max-h-[90vh] overflow-y-auto">
//         <button
//           onClick={onCancel}
//           className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//         >
//           <X size={20} />
//         </button>

//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Student</h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
//                 <input
//                   type="text"
//                   name="student_id"
//                   value={formData.student_id}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
//                 <input
//                   type="date"
//                   name="birthday"
//                   value={formData.birthday}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                 <input
//                   type="text"
//                   name="phone_num"
//                   value={formData.phone_num}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//                 <select
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   <option value="Computer Science">Computer Science</option>
//                   <option value="Mathematics">Mathematics</option>
//                   <option value="Physics">Physics</option>
//                   <option value="English">English</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Enroll Date</label>
//                 <input
//                   type="date"
//                   name="enroll_date"
//                   value={formData.enroll_date}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
//                 <select
//                   name="year"
//                   value={formData.year}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 >
//                   <option value="">Select Year</option>
//                   <option value="1st Year">1st Year</option>
//                   <option value="2nd Year">2nd Year</option>
//                   <option value="3rd Year">3rd Year</option>
//                   <option value="4th Year">4th Year</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
//                 <input
//                   type="number"
//                   name="gpa"
//                   value={formData.gpa}
//                   onChange={handleChange}
//                   min="0"
//                   max="4"
//                   step="0.01"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Attendance (%)</label>
//                 <input
//                   type="number"
//                   name="attendence"
//                   value={formData.attendence}
//                   onChange={handleChange}
//                   min="0"
//                   max="100"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 pt-4 border-t">
//               <button
//                 type="button"
//                 className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//                 onClick={onCancel}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//               >
//                 Save Student
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import { Search, Filter, User, MoreVertical, ChevronDown, Plus, X } from 'lucide-react';

// const StudentsSection = ({ userType }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedYear, setSelectedYear] = useState('all');
//   const [selectedDepartment, setSelectedDepartment] = useState('all');
//   const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [students, setStudents] = useState([]);
//   const [error, setError] = useState('');

//   // Fetch students from the backend
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Get the token from localStorage
//         const response = await fetch('http://localhost:5008/api/students', {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include the token in the headers
//           },
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch students');
//         }
//         const data = await response.json();
//         setStudents(data);
//       } catch (error) {
//         console.error('Error fetching students:', error);
//         setError('Failed to fetch students. Please try again later.');
//       }
//     };

//     fetchStudents();
//   }, []);

//   // Function to handle adding a new student
//   const handleAddStudent = async (newStudent) => {
//     try {
//       const token = localStorage.getItem('token'); // Get the token from localStorage
//       const response = await fetch('http://localhost:5008/api/students', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`, // Include the token in the headers
//         },
//         body: JSON.stringify(newStudent),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to add student');
//       }
//       const data = await response.json();
//       setStudents([...students, data]); // Update the UI with the new student
//       setShowAddForm(false); // Close the form
//     } catch (error) {
//       console.error('Error adding student:', error);
//       setError('Failed to add student. Please try again.');
//     }
//   };

//   // Function to handle sorting
//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   // Function to filter and sort students
//   const filteredStudents = students
//     .filter((student) => {
//       const matchesSearch =
//         student.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         student.student_id.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesYear = selectedYear === 'all' || student.year === selectedYear;
//       const matchesDepartment =
//         selectedDepartment === 'all' || student.department === selectedDepartment;
//       return matchesSearch && matchesYear && matchesDepartment;
//     })
//     .sort((a, b) => {
//       if (sortConfig.direction === 'asc') {
//         return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
//       }
//       return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
//     });

//   // Departments and years for filters
//   const departments = ['all', ...new Set(students.map((student) => student.department))];
//   const years = ['all', '1st Year', '2nd Year', '3rd Year', '4th Year'];

//   // Sortable header component
//   const SortableHeader = ({ label, field }) => (
//     <th
//       className="px-4 py-3 cursor-pointer hover:bg-gray-50"
//       onClick={() => handleSort(field)}
//     >
//       <div className="flex items-center gap-1">
//         {label}
//         <ChevronDown
//           className={`h-4 w-4 transition-transform ${
//             sortConfig.key === field && sortConfig.direction === 'desc' ? 'rotate-180' : ''
//           }`}
//         />
//       </div>
//     </th>
//   );

//   return (
//     <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
//       {/* Header with Search and Filters */}
//       <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//           <input
//             type="text"
//             placeholder="Search students..."
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
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(e.target.value)}
//             >
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year === 'all' ? 'All Years' : year}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <select
//             className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//             value={selectedDepartment}
//             onChange={(e) => setSelectedDepartment(e.target.value)}
//           >
//             {departments.map((department) => (
//               <option key={department} value={department}>
//                 {department === 'all' ? 'All Departments' : department}
//               </option>
//             ))}
//           </select>
//           {userType === 'admin' && (
//             <button
//               className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
//               onClick={() => setShowAddForm(true)}
//             >
//               <Plus className="h-5 w-5" />
//               Add Student
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
//           {error}
//         </div>
//       )}

//       {/* Pop-up Form for Adding Students */}
//       {showAddForm && userType === 'admin' && (
//         <AddStudentForm
//           onSave={handleAddStudent}
//           onCancel={() => setShowAddForm(false)}
//         />
//       )}

//       {/* Students List View */}
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead className="bg-gray-50 text-gray-600">
//               <tr>
//                 <SortableHeader label="Name" field="first_name" />
//                 <SortableHeader label="Roll No" field="student_id" />
//                 <SortableHeader label="Department" field="department" />
//                 <SortableHeader label="Year" field="year" />
//                 <SortableHeader label="GPA" field="gpa" />
//                 <th className="px-4 py-3">Attendance</th>
//                 <th className="px-4 py-3">Status</th>
//                 {userType === 'admin' && <th className="px-4 py-3">Actions</th>}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredStudents.map((student) => (
//                 <tr key={student.student_id} className="hover:bg-gray-50">
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <User className="h-5 w-5 text-purple-600" />
//                       <div>
//                         <div className="font-medium text-gray-800">
//                           {student.first_name} {student.last_name}
//                         </div>
//                         <div className="text-gray-500 text-xs">{student.email}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3 font-medium text-gray-800">{student.student_id}</td>
//                   <td className="px-4 py-3 text-gray-800">{student.department}</td>
//                   <td className="px-4 py-3 text-gray-800">{student.year}</td>
//                   <td className="px-4 py-3 font-medium text-gray-800">{student.gpa}</td>
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-2">
//                       <div className="w-24 bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-purple-600 h-2 rounded-full"
//                           style={{ width: `${student.attendence}%` }}
//                         ></div>
//                       </div>
//                       <span className="text-gray-800">{student.attendence}%</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs ${
//                         student.status === 'Active'
//                           ? 'bg-green-100 text-green-800'
//                           : 'bg-yellow-100 text-yellow-800'
//                       }`}
//                     >
//                       {student.status || 'Active'}
//                     </span>
//                   </td>
//                   {userType === 'admin' && (
//                     <td className="px-4 py-3">
//                       <button className="p-1 hover:bg-gray-100 rounded">
//                         <MoreVertical className="h-5 w-5 text-purple-600" />
//                       </button>
//                     </td>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentsSection;

// const AddStudentForm = ({ onSave, onCancel }) => {
//   const [formData, setFormData] = useState({
//     student_id: '',
//     first_name: '',
//     last_name: '',
//     email: '',
//     birthday: '',
//     address: '',
//     phone_num: '',
//     department: '',
//     enroll_date: '',
//     year: '',
//     gpa: '',
//     attendence: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl relative max-h-[90vh] overflow-y-auto">
//         <button
//           onClick={onCancel}
//           className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//         >
//           <X size={20} />
//         </button>

//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Student</h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
//                 <input
//                   type="text"
//                   name="student_id"
//                   value={formData.student_id}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Birthday</label>
//                 <input
//                   type="date"
//                   name="birthday"
//                   value={formData.birthday}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                 <input
//                   type="text"
//                   name="phone_num"
//                   value={formData.phone_num}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//                 <select
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 >
//                   <option value="">Select Department</option>
//                   <option value="Computer Science">Computer Science</option>
//                   <option value="Mathematics">Mathematics</option>
//                   <option value="Physics">Physics</option>
//                   <option value="English">English</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Enroll Date</label>
//                 <input
//                   type="date"
//                   name="enroll_date"
//                   value={formData.enroll_date}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
//                 <select
//                   name="year"
//                   value={formData.year}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 >
//                   <option value="">Select Year</option>
//                   <option value="1st Year">1st Year</option>
//                   <option value="2nd Year">2nd Year</option>
//                   <option value="3rd Year">3rd Year</option>
//                   <option value="4th Year">4th Year</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
//                 <input
//                   type="number"
//                   name="gpa"
//                   value={formData.gpa}
//                   onChange={handleChange}
//                   min="0"
//                   max="4"
//                   step="0.01"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Attendance (%)</label>
//                 <input
//                   type="number"
//                   name="attendence"
//                   value={formData.attendence}
//                   onChange={handleChange}
//                   min="0"
//                   max="100"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end gap-3 pt-4 border-t">
//               <button
//                 type="button"
//                 className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//                 onClick={onCancel}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
//               >
//                 Save Student
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
