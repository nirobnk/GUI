import React, { useState } from 'react';
import { Search, Filter, User, ChevronDown, Mail, Phone, Book, GraduationCap } from 'lucide-react';

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
      className="px-4 py-3 cursor-pointer hover:bg-gray-50"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-1">
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            sortConfig.key === field && sortConfig.direction === 'desc' ? 'rotate-180' : ''
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
            placeholder="Search teachers..."
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
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-purple-400 p-6 rounded-2xl shadow-lg">
          <h4 className="text-sm text-white/80">Total Teachers</h4>
          <p className="text-2xl font-semibold text-white">{teachers.length}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-2xl shadow-lg">
          <h4 className="text-sm text-white/80">Active Teachers</h4>
          <p className="text-2xl font-semibold text-white">
            {teachers.filter((t) => t.status === 'Active').length}
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-2xl shadow-lg">
          <h4 className="text-sm text-white/80">Departments</h4>
          <p className="text-2xl font-semibold text-white">
            {departments.length - 1}
          </p>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-6 rounded-2xl shadow-lg">
          <h4 className="text-sm text-white/80">On Leave</h4>
          <p className="text-2xl font-semibold text-white">
            {teachers.filter((t) => t.status === 'On Leave').length}
          </p>
        </div>
      </div>

      {/* Teachers List View */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <SortableHeader label="Name" field="name" />
                <SortableHeader label="Department" field="department" />
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Courses</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-medium text-gray-800">{teacher.name}</div>
                        <div className="text-gray-500 text-xs">{teacher.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-800">{teacher.department}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-800">{teacher.email}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-800">{teacher.phone}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {teacher.courses.map((course, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        teacher.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {teacher.status}
                    </span>
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

export default TeachersSection;