// import React, { useState } from 'react';
// import { Search, Filter, User, MoreVertical, ChevronDown } from 'lucide-react';

// const StudentsSection = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedYear, setSelectedYear] = useState('all');
//   const [selectedDepartment, setSelectedDepartment] = useState('all');
//   const [sortConfig, setSortConfig] = useState({
//     key: 'name',
//     direction: 'asc'
//   });

//   const students = [
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
//     {
//       id: 3,
//       name: 'Michael Chen',
//       rollNo: 'PH2024003',
//       department: 'Physics',
//       year: '1st Year',
//       gpa: 3.7,
//       attendance: 88,
//       status: 'Active',
//       email: 'michael.c@university.edu',
//       advisor: 'Dr. Brown'
//     },
//     {
//       id: 4,
//       name: 'Sarah Davis',
//       rollNo: 'EN2024004',
//       department: 'English',
//       year: '4th Year',
//       gpa: 3.95,
//       attendance: 96,
//       status: 'Active',
//       email: 'sarah.d@university.edu',
//       advisor: 'Dr. Carter'
//     },
//     {
//       id: 5,
//       name: 'James Wilson',
//       rollNo: 'CS2024005',
//       department: 'Computer Science',
//       year: '2nd Year',
//       gpa: 3.6,
//       attendance: 90,
//       status: 'On Leave',
//       email: 'james.w@university.edu',
//       advisor: 'Dr. Smith'
//     },
//     {
//       id: 6,
//       name: 'Lisa Thompson',
//       rollNo: 'MT2024006',
//       department: 'Mathematics',
//       year: '3rd Year',
//       gpa: 3.85,
//       attendance: 93,
//       status: 'Active',
//       email: 'lisa.t@university.edu',
//       advisor: 'Dr. Johnson'
//     }
//   ];

//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };

//   const filteredStudents = students.filter(student => {
//     const matchesSearch = 
//       student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesYear = selectedYear === 'all' || student.year === selectedYear;
//     const matchesDepartment = selectedDepartment === 'all' || student.department === selectedDepartment;
//     return matchesSearch && matchesYear && matchesDepartment;
//   }).sort((a, b) => {
//     if (sortConfig.direction === 'asc') {
//       return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
//     }
//     return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
//   });

//   const departments = ['all', ...new Set(students.map(student => student.department))];
//   const years = ['all', '1st Year', '2nd Year', '3rd Year', '4th Year'];

//   const SortableHeader = ({ label, field }) => (
//     <th
//       className="px-4 py-3 cursor-pointer hover:bg-gray-50"
//       onClick={() => handleSort(field)}
//     >
//       <div className="flex items-center gap-1">
//         {label}
//         <ChevronDown className={`h-4 w-4 transition-transform ${
//           sortConfig.key === field && sortConfig.direction === 'desc' ? 'rotate-180' : ''
//         }`} />
//       </div>
//     </th>
//   );

//   return (
//     <div className="p-6">
//       {/* Header with Search and Filters */}
//       <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//           <input
//             type="text"
//             placeholder="Search students..."
//             className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-96"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <Filter className="text-gray-400 h-5 w-5" />
//             <select
//               className="border rounded-lg px-4 py-2"
//               value={selectedYear}
//               onChange={(e) => setSelectedYear(e.target.value)}
//             >
//               {years.map(year => (
//                 <option key={year} value={year}>
//                   {year === 'all' ? 'All Years' : year}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <select
//             className="border rounded-lg px-4 py-2"
//             value={selectedDepartment}
//             onChange={(e) => setSelectedDepartment(e.target.value)}
//           >
//             {departments.map(department => (
//               <option key={department} value={department}>
//                 {department === 'all' ? 'All Departments' : department}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Statistics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h4 className="text-sm text-gray-500">Total Students</h4>
//           <p className="text-2xl font-semibold">{students.length}</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h4 className="text-sm text-gray-500">Active Students</h4>
//           <p className="text-2xl font-semibold text-green-600">
//             {students.filter(s => s.status === 'Active').length}
//           </p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h4 className="text-sm text-gray-500">Average GPA</h4>
//           <p className="text-2xl font-semibold text-blue-600">
//             {(students.reduce((sum, student) => sum + student.gpa, 0) / students.length).toFixed(2)}
//           </p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h4 className="text-sm text-gray-500">Average Attendance</h4>
//           <p className="text-2xl font-semibold text-purple-600">
//             {Math.round(students.reduce((sum, student) => sum + student.attendance, 0) / students.length)}%
//           </p>
//         </div>
//       </div>

//       {/* Students List View */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
//                 <th className="px-4 py-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredStudents.map(student => (
//                 <tr key={student.id} className="hover:bg-gray-50">
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-3">
//                       <User className="h-5 w-5 text-gray-400" />
//                       <div>
//                         <div className="font-medium">{student.name}</div>
//                         <div className="text-gray-500 text-xs">{student.email}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3 font-medium">{student.rollNo}</td>
//                   <td className="px-4 py-3">{student.department}</td>
//                   <td className="px-4 py-3">{student.year}</td>
//                   <td className="px-4 py-3 font-medium">{student.gpa}</td>
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-2">
//                       <div className="w-24 bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-blue-600 h-2 rounded-full"
//                           style={{ width: `${student.attendance}%` }}
//                         ></div>
//                       </div>
//                       <span>{student.attendance}%</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-3">
//                     <span className={`px-2 py-1 rounded-full text-xs ${
//                       student.status === 'Active' 
//                         ? 'bg-green-100 text-green-800' 
//                         : 'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {student.status}
//                     </span>
//                   </td>
//                   <td className="px-4 py-3">
//                     <button className="p-1 hover:bg-gray-100 rounded">
//                       <MoreVertical className="h-5 w-5 text-gray-400" />
//                     </button>
//                   </td>
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


import React, { useState } from 'react';
import { Search, Filter, User, MoreVertical, ChevronDown } from 'lucide-react';

const StudentsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'asc'
  });

  const students = [
    {
      id: 1,
      name: 'John Smith',
      rollNo: 'CS2024001',
      department: 'Computer Science',
      year: '2nd Year',
      gpa: 3.8,
      attendance: 92,
      status: 'Active',
      email: 'john.smith@university.edu',
      advisor: 'Dr. Anderson'
    },
    {
      id: 2,
      name: 'Emily Johnson',
      rollNo: 'MT2024002',
      department: 'Mathematics',
      year: '3rd Year',
      gpa: 3.9,
      attendance: 95,
      status: 'Active',
      email: 'emily.j@university.edu',
      advisor: 'Dr. Williams'
    },
    {
      id: 3,
      name: 'Michael Chen',
      rollNo: 'PH2024003',
      department: 'Physics',
      year: '1st Year',
      gpa: 3.7,
      attendance: 88,
      status: 'Active',
      email: 'michael.c@university.edu',
      advisor: 'Dr. Brown'
    },
    {
      id: 4,
      name: 'Sarah Davis',
      rollNo: 'EN2024004',
      department: 'English',
      year: '4th Year',
      gpa: 3.95,
      attendance: 96,
      status: 'Active',
      email: 'sarah.d@university.edu',
      advisor: 'Dr. Carter'
    },
    {
      id: 5,
      name: 'James Wilson',
      rollNo: 'CS2024005',
      department: 'Computer Science',
      year: '2nd Year',
      gpa: 3.6,
      attendance: 90,
      status: 'On Leave',
      email: 'james.w@university.edu',
      advisor: 'Dr. Smith'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      rollNo: 'MT2024006',
      department: 'Mathematics',
      year: '3rd Year',
      gpa: 3.85,
      attendance: 93,
      status: 'Active',
      email: 'lisa.t@university.edu',
      advisor: 'Dr. Johnson'
    }
  ];

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || student.year === selectedYear;
    const matchesDepartment = selectedDepartment === 'all' || student.department === selectedDepartment;
    return matchesSearch && matchesYear && matchesDepartment;
  }).sort((a, b) => {
    if (sortConfig.direction === 'asc') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  });

  const departments = ['all', ...new Set(students.map(student => student.department))];
  const years = ['all', '1st Year', '2nd Year', '3rd Year', '4th Year'];

  const SortableHeader = ({ label, field }) => (
    <th
      className="px-4 py-3 cursor-pointer hover:bg-gray-50"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-1">
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${
          sortConfig.key === field && sortConfig.direction === 'desc' ? 'rotate-180' : ''
        }`} />
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
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>
          </div>
          <select
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map(department => (
              <option key={department} value={department}>
                {department === 'all' ? 'All Departments' : department}
              </option>
            ))}
          </select>
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
            {students.filter(s => s.status === 'Active').length}
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-2xl shadow-lg">
          <h4 className="text-sm text-white/80">Average GPA</h4>
          <p className="text-2xl font-semibold text-white">
            {(students.reduce((sum, student) => sum + student.gpa, 0) / students.length).toFixed(2)}
          </p>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-6 rounded-2xl shadow-lg">
          <h4 className="text-sm text-white/80">Average Attendance</h4>
          <p className="text-2xl font-semibold text-white">
            {Math.round(students.reduce((sum, student) => sum + student.attendance, 0) / students.length)}%
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
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map(student => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-medium text-gray-800">{student.name}</div>
                        <div className="text-gray-500 text-xs">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-800">{student.rollNo}</td>
                  <td className="px-4 py-3 text-gray-800">{student.department}</td>
                  <td className="px-4 py-3 text-gray-800">{student.year}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{student.gpa}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${student.attendance}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-800">{student.attendance}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      student.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="h-5 w-5 text-purple-600" />
                    </button>
                  </td>
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