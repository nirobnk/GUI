// import React from 'react';
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from 'recharts';

// const StudentResults = () => {
//   // Sample data - replace with actual student data
//   const semesterResults = [
//     { semester: 'Sem 1', GPA: 3.8, credits: 15 },
//     { semester: 'Sem 2', GPA: 3.6, credits: 16 },
//     { semester: 'Sem 3', GPA: 3.9, credits: 15 },
//     { semester: 'Sem 4', GPA: 3.7, credits: 17 }
//   ];

//   const courseResults = [
//     { course: 'Mathematics', grade: 'A', score: 92 },
//     { course: 'Physics', grade: 'A-', score: 88 },
//     { course: 'Computer Science', grade: 'A+', score: 96 },
//     { course: 'English', grade: 'B+', score: 85 }
//   ];

//   return (
//     <div className="p-6 space-y-6">
//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Current GPA</h3>
//           <p className="text-3xl font-bold text-blue-600">3.75</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Total Credits</h3>
//           <p className="text-3xl font-bold text-green-600">63</p>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Standing</h3>
//           <p className="text-3xl font-bold text-purple-600">Excellent</p>
//         </div>
//       </div>

//       {/* GPA Trend Chart */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-4">GPA Trend</h3>
//         <div className="h-64">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={semesterResults}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="semester" />
//               <YAxis domain={[0, 4]} />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="GPA" stroke="#2563eb" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Course Performance Chart */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-4">Course Performance</h3>
//         <div className="h-64">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={courseResults}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="course" />
//               <YAxis domain={[0, 100]} />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="score" fill="#10b981" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Detailed Results Table */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <h3 className="text-lg font-semibold mb-4">Current Semester Grades</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-4 py-2 text-left">Course</th>
//                 <th className="px-4 py-2 text-left">Grade</th>
//                 <th className="px-4 py-2 text-left">Score</th>
//                 <th className="px-4 py-2 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {courseResults.map((course, index) => (
//                 <tr key={index} className="border-t">
//                   <td className="px-4 py-2">{course.course}</td>
//                   <td className="px-4 py-2">{course.grade}</td>
//                   <td className="px-4 py-2">{course.score}%</td>
//                   <td className="px-4 py-2">
//                     <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
//                       Passed
//                     </span>
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

// export default StudentResults;


import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const StudentResults = () => {
  // Sample data - replace with actual student data
  const semesterResults = [
    { semester: 'Sem 1', GPA: 3.8, credits: 15 },
    { semester: 'Sem 2', GPA: 3.6, credits: 16 },
    { semester: 'Sem 3', GPA: 3.9, credits: 15 },
    { semester: 'Sem 4', GPA: 3.7, credits: 17 }
  ];

  const courseResults = [
    { course: 'Mathematics', grade: 'A', score: 92 },
    { course: 'Physics', grade: 'A-', score: 88 },
    { course: 'Computer Science', grade: 'A+', score: 96 },
    { course: 'English', grade: 'B+', score: 85 }
  ];

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-purple-500 to-purple-400 p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-white/80 mb-2">Current GPA</h3>
          <p className="text-3xl font-bold text-white">3.75</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-white/80 mb-2">Total Credits</h3>
          <p className="text-3xl font-bold text-white">63</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold text-white/80 mb-2">Standing</h3>
          <p className="text-3xl font-bold text-white">Excellent</p>
        </div>
      </div>

      {/* GPA Trend Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">GPA Trend</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={semesterResults}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="semester" stroke="#64748b" />
              <YAxis domain={[0, 4]} stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="GPA" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={{ fill: "#8b5cf6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Course Performance Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Course Performance</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={courseResults}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="course" stroke="#64748b" />
              <YAxis domain={[0, 100]} stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Results Table */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Current Semester Grades</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">Course</th>
                <th className="px-4 py-2 text-left text-gray-600">Grade</th>
                <th className="px-4 py-2 text-left text-gray-600">Score</th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {courseResults.map((course, index) => (
                <tr key={index} className="border-t hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 text-gray-800">{course.course}</td>
                  <td className="px-4 py-2 text-gray-800">{course.grade}</td>
                  <td className="px-4 py-2 text-gray-800">{course.score}%</td>
                  <td className="px-4 py-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Passed
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

export default StudentResults;