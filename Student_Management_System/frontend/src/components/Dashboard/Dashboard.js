// import React from "react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Book,
//   Calendar,
//   Bell,
//   Clock,
//   ChevronRight,
//   AlertCircle,
// } from "lucide-react";

// const Dashboard = () => {
//   // Sample data for charts
//   const attendanceData = [
//     { month: "Jan", attendance: 95 },
//     { month: "Feb", attendance: 98 },
//     { month: "Mar", attendance: 92 },
//     { month: "Apr", attendance: 96 },
//     { month: "May", attendance: 94 },
//   ];

//   const gradesData = [
//     { subject: "Mathematics", score: 85 },
//     { subject: "Physics", score: 78 },
//     { subject: "Computer Science", score: 92 },
//     { subject: "English", score: 88 },
//   ];

//   const upcomingEvents = [
//     { id: 1, title: "Mid-term Examination", date: "2024-03-15", type: "exam" },
//     {
//       id: 2,
//       title: "Project Submission",
//       date: "2024-03-20",
//       type: "assignment",
//     },
//     { id: 3, title: "Guest Lecture", date: "2024-03-25", type: "event" },
//   ];

//   const recentActivities = [
//     {
//       id: 1,
//       activity: "Submitted Assignment: Data Structures",
//       time: "2 hours ago",
//     },
//     {
//       id: 2,
//       activity: "Attended Class: Advanced Algorithms",
//       time: "5 hours ago",
//     },
//     {
//       id: 3,
//       activity: "Completed Quiz: Database Management",
//       time: "1 day ago",
//     },
//   ];

//   const notifications = [
//     {
//       id: 1,
//       message: "Your project proposal has been approved",
//       type: "success",
//     },
//     { id: 2, message: "New course material available", type: "info" },
//     { id: 3, message: "Upcoming deadline for registration", type: "warning" },
//   ];

//   return (
//     <div className="p-6">
//       {/* Quick Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-gray-500 text-sm mb-2">Current GPA</h3>
//           <p className="text-3xl font-bold text-blue-600">3.75</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-gray-500 text-sm mb-2">Attendance Rate</h3>
//           <p className="text-3xl font-bold text-green-600">95%</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-gray-500 text-sm mb-2">Completed Courses</h3>
//           <p className="text-3xl font-bold text-purple-600">12</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-gray-500 text-sm mb-2">Active Courses</h3>
//           <p className="text-3xl font-bold text-orange-600">4</p>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold mb-4">Attendance Overview</h3>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={attendanceData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis domain={[0, 100]} />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="attendance" stroke="#2563eb" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold mb-4">
//             Current Semester Grades
//           </h3>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={gradesData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="subject" />
//                 <YAxis domain={[0, 100]} />
//                 <Tooltip />
//                 <Bar dataKey="score" fill="#10b981" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Upcoming Events */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold">Upcoming Events</h3>
//             <Calendar className="w-5 h-5 text-gray-400" />
//           </div>
//           <div className="space-y-4">
//             {upcomingEvents.map((event) => (
//               <div key={event.id} className="flex items-start space-x-3">
//                 <div
//                   className={`p-2 rounded-lg ${
//                     event.type === "exam"
//                       ? "bg-red-100"
//                       : event.type === "assignment"
//                         ? "bg-blue-100"
//                         : "bg-green-100"
//                   }`}
//                 >
//                   <Calendar className="w-4 h-4 text-gray-600" />
//                 </div>
//                 <div>
//                   <p className="font-medium">{event.title}</p>
//                   <p className="text-sm text-gray-500">{event.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Recent Activities */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold">Recent Activities</h3>
//             <Clock className="w-5 h-5 text-gray-400" />
//           </div>
//           <div className="space-y-4">
//             {recentActivities.map((activity) => (
//               <div key={activity.id} className="flex items-start space-x-3">
//                 <div className="p-2 rounded-lg bg-gray-100">
//                   <Book className="w-4 h-4 text-gray-600" />
//                 </div>
//                 <div>
//                   <p className="font-medium">{activity.activity}</p>
//                   <p className="text-sm text-gray-500">{activity.time}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Notifications */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold">Notifications</h3>
//             <Bell className="w-5 h-5 text-gray-400" />
//           </div>
//           <div className="space-y-4">
//             {notifications.map((notification) => (
//               <div key={notification.id} className="flex items-start space-x-3">
//                 <div
//                   className={`p-2 rounded-lg ${
//                     notification.type === "success"
//                       ? "bg-green-100"
//                       : notification.type === "warning"
//                         ? "bg-yellow-100"
//                         : "bg-blue-100"
//                   }`}
//                 >
//                   <AlertCircle className="w-4 h-4 text-gray-600" />
//                 </div>
//                 <div className="flex-1">
//                   <p className="font-medium">{notification.message}</p>
//                   <button className="text-sm text-blue-600 hover:text-blue-800">
//                     View Details
//                   </button>
//                 </div>
//                 <ChevronRight className="w-5 h-5 text-gray-400" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React from "react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Book,
//   Calendar,
//   Bell,
//   Clock,
//   ChevronRight,
//   AlertCircle,
// } from "lucide-react";

// const Dashboard = () => {
//   // Sample data for charts - same as before
//   const attendanceData = [
//     { month: "Jan", attendance: 95 },
//     { month: "Feb", attendance: 98 },
//     { month: "Mar", attendance: 92 },
//     { month: "Apr", attendance: 96 },
//     { month: "May", attendance: 94 },
//   ];

//   const gradesData = [
//     { subject: "Mathematics", score: 85 },
//     { subject: "Physics", score: 78 },
//     { subject: "Computer Science", score: 92 },
//     { subject: "English", score: 88 },
//   ];

//   const upcomingEvents = [
//     { id: 1, title: "Mid-term Examination", date: "2024-03-15", type: "exam" },
//     { id: 2, title: "Project Submission", date: "2024-03-20", type: "assignment" },
//     { id: 3, title: "Guest Lecture", date: "2024-03-25", type: "event" },
//   ];

//   const recentActivities = [
//     {
//       id: 1,
//       activity: "Submitted Assignment: Data Structures",
//       time: "2 hours ago",
//     },
//     {
//       id: 2,
//       activity: "Attended Class: Advanced Algorithms",
//       time: "5 hours ago",
//     },
//     {
//       id: 3,
//       activity: "Completed Quiz: Database Management",
//       time: "1 day ago",
//     },
//   ];

//   const notifications = [
//     {
//       id: 1,
//       message: "Your project proposal has been approved",
//       type: "success",
//     },
//     { id: 2, message: "New course material available", type: "info" },
//     { id: 3, message: "Upcoming deadline for registration", type: "warning" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-100">
//       <div className="p-6">
//         {/* Quick Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//           {["Current GPA", "Attendance Rate", "Completed Courses", "Active Courses"].map((title, index) => (
//             <div key={title} className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/95 transition-all duration-300">
//               <h3 className="text-gray-600 text-sm mb-2">{title}</h3>
//               <p className={`text-3xl font-bold ${
//                 index === 0 ? "text-blue-600" :
//                 index === 1 ? "text-green-600" :
//                 index === 2 ? "text-purple-600" :
//                 "text-orange-600"
//               }`}>
//                 {index === 0 ? "3.75" :
//                  index === 1 ? "95%" :
//                  index === 2 ? "12" : "4"}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//           <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/95 transition-all duration-300">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Attendance Overview</h3>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={attendanceData}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
//                   <XAxis dataKey="month" stroke="#64748b" />
//                   <YAxis domain={[0, 100]} stroke="#64748b" />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="attendance" stroke="#6366f1" strokeWidth={2} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/95 transition-all duration-300">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Current Semester Grades</h3>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={gradesData}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
//                   <XAxis dataKey="subject" stroke="#64748b" />
//                   <YAxis domain={[0, 100]} stroke="#64748b" />
//                   <Tooltip />
//                   <Bar dataKey="score" fill="#8b5cf6" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Upcoming Events */}
//           <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/95 transition-all duration-300">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-800">Upcoming Events</h3>
//               <Calendar className="w-5 h-5 text-purple-500" />
//             </div>
//             <div className="space-y-4">
//               {upcomingEvents.map((event) => (
//                 <div key={event.id} className="flex items-start space-x-3">
//                   <div className={`p-2 rounded-lg ${
//                     event.type === "exam"
//                       ? "bg-red-100"
//                       : event.type === "assignment"
//                         ? "bg-indigo-100"
//                         : "bg-emerald-100"
//                   }`}>
//                     <Calendar className="w-4 h-4 text-gray-700" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">{event.title}</p>
//                     <p className="text-sm text-gray-600">{event.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Recent Activities */}
//           <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/95 transition-all duration-300">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
//               <Clock className="w-5 h-5 text-purple-500" />
//             </div>
//             <div className="space-y-4">
//               {recentActivities.map((activity) => (
//                 <div key={activity.id} className="flex items-start space-x-3">
//                   <div className="p-2 rounded-lg bg-indigo-100">
//                     <Book className="w-4 h-4 text-gray-700" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">{activity.activity}</p>
//                     <p className="text-sm text-gray-600">{activity.time}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Notifications */}
//           <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/95 transition-all duration-300">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
//               <Bell className="w-5 h-5 text-purple-500" />
//             </div>
//             <div className="space-y-4">
//               {notifications.map((notification) => (
//                 <div key={notification.id} className="flex items-start space-x-3">
//                   <div className={`p-2 rounded-lg ${
//                     notification.type === "success"
//                       ? "bg-emerald-100"
//                       : notification.type === "warning"
//                         ? "bg-amber-100"
//                         : "bg-sky-100"
//                   }`}>
//                     <AlertCircle className="w-4 h-4 text-gray-700" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-800">{notification.message}</p>
//                     <button className="text-sm text-indigo-600 hover:text-indigo-800">
//                       View Details
//                     </button>
//                   </div>
//                   <ChevronRight className="w-5 h-5 text-purple-500" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React from "react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Book,
//   Calendar,
//   Bell,
//   Clock,
//   ChevronRight,
//   AlertCircle,
// } from "lucide-react";

// const Dashboard = () => {
//   const attendanceData = [
//     { month: "Jan", attendance: 95 },
//     { month: "Feb", attendance: 98 },
//     { month: "Mar", attendance: 92 },
//     { month: "Apr", attendance: 96 },
//     { month: "May", attendance: 94 },
//   ];

//   const gradesData = [
//     { subject: "Mathematics", score: 85 },
//     { subject: "Physics", score: 78 },
//     { subject: "Computer Science", score: 92 },
//     { subject: "English", score: 88 },
//   ];

//   const upcomingEvents = [
//     { id: 1, title: "Mid-term Examination", date: "2024-03-15", type: "exam" },
//     { id: 2, title: "Project Submission", date: "2024-03-20", type: "assignment" },
//     { id: 3, title: "Guest Lecture", date: "2024-03-25", type: "event" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-gradient-to-r from-violet-500 to-violet-400 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-white/80 text-sm mb-2">Current GPA</h3>
//             <p className="text-3xl font-bold text-white">3.75</p>
//           </div>
//           <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-white/80 text-sm mb-2">Attendance Rate</h3>
//             <p className="text-3xl font-bold text-white">95%</p>
//           </div>
//           <div className="bg-gradient-to-r from-rose-500 to-rose-400 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-white/80 text-sm mb-2">Completed Courses</h3>
//             <p className="text-3xl font-bold text-white">12</p>
//           </div>
//           <div className="bg-gradient-to-r from-amber-500 to-amber-400 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-white/80 text-sm mb-2">Active Courses</h3>
//             <p className="text-3xl font-bold text-white">4</p>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-2xl shadow-lg">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Attendance Overview</h3>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={attendanceData}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                   <XAxis dataKey="month" stroke="#64748b" />
//                   <YAxis domain={[0, 100]} stroke="#64748b" />
//                   <Tooltip />
//                   <Line 
//                     type="monotone" 
//                     dataKey="attendance" 
//                     stroke="#8b5cf6" 
//                     strokeWidth={2}
//                     dot={{ fill: "#8b5cf6" }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-lg">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Analytics</h3>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={gradesData}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                   <XAxis dataKey="subject" stroke="#64748b" />
//                   <YAxis domain={[0, 100]} stroke="#64748b" />
//                   <Tooltip />
//                   <Bar dataKey="score" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* Events Section */}
//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-lg font-semibold text-gray-800">Upcoming Events</h3>
//             <button className="text-sm text-violet-600 hover:text-violet-700">View All</button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {upcomingEvents.map((event) => (
//               <div key={event.id} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
//                 <div className="flex items-start space-x-3">
//                   <div className={`p-2 rounded-lg ${
//                     event.type === "exam" ? "bg-rose-100" :
//                     event.type === "assignment" ? "bg-blue-100" : "bg-green-100"
//                   }`}>
//                     <Calendar className="w-4 h-4 text-gray-700" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">{event.title}</p>
//                     <p className="text-sm text-gray-500">{event.date}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React from "react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Book,
//   Calendar,
//   Bell,
//   Clock,
//   ChevronRight,
//   AlertCircle,
// } from "lucide-react";

// const Dashboard = () => {
//   const attendanceData = [
//     { month: "Jan", attendance: 95 },
//     { month: "Feb", attendance: 98 },
//     { month: "Mar", attendance: 92 },
//     { month: "Apr", attendance: 96 },
//     { month: "May", attendance: 94 },
//   ];

//   const gradesData = [
//     { subject: "Mathematics", score: 85 },
//     { subject: "Physics", score: 78 },
//     { subject: "Computer Science", score: 92 },
//     { subject: "English", score: 88 },
//   ];

//   const upcomingEvents = [
//     { id: 1, title: "Mid-term Examination", date: "2024-03-15", type: "exam" },
//     { id: 2, title: "Project Submission", date: "2024-03-20", type: "assignment" },
//     { id: 3, title: "Guest Lecture", date: "2024-03-25", type: "event" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-gradient-to-r from-purple-500 to-purple-400 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-white/80 text-sm mb-2">Current GPA</h3>
//             <p className="text-3xl font-bold text-white">3.75</p>
//           </div>
//           <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-white/80 text-sm mb-2">Attendance Rate</h3>
//             <p className="text-3xl font-bold text-white">95%</p>
//           </div>
//           <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-white/80 text-sm mb-2">Completed Courses</h3>
//             <p className="text-3xl font-bold text-white">12</p>
//           </div>
//           <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-6 rounded-2xl shadow-lg">
//             <h3 className="text-white/80 text-sm mb-2">Active Courses</h3>
//             <p className="text-3xl font-bold text-white">4</p>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div className="bg-white p-6 rounded-2xl shadow-lg">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Attendance Overview</h3>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={attendanceData}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                   <XAxis dataKey="month" stroke="#64748b" />
//                   <YAxis domain={[0, 100]} stroke="#64748b" />
//                   <Tooltip />
//                   <Line 
//                     type="monotone" 
//                     dataKey="attendance" 
//                     stroke="#8b5cf6" 
//                     strokeWidth={2}
//                     dot={{ fill: "#8b5cf6" }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-lg">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Analytics</h3>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={gradesData}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                   <XAxis dataKey="subject" stroke="#64748b" />
//                   <YAxis domain={[0, 100]} stroke="#64748b" />
//                   <Tooltip />
//                   <Bar dataKey="score" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>

//         {/* Events Section */}
//         <div className="bg-white p-6 rounded-2xl shadow-lg">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-lg font-semibold text-gray-800">Upcoming Events</h3>
//             <button className="text-sm text-violet-600 hover:text-violet-700">View All</button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {upcomingEvents.map((event) => (
//               <div key={event.id} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
//                 <div className="flex items-start space-x-3">
//                   <div className={`p-2 rounded-lg ${
//                     event.type === "exam" ? "bg-rose-100" :
//                     event.type === "assignment" ? "bg-blue-100" : "bg-green-100"
//                   }`}>
//                     <Calendar className="w-4 h-4 text-gray-700" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">{event.title}</p>
//                     <p className="text-sm text-gray-500">{event.date}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Book,
  Calendar,
  Bell,
  Clock,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

const Dashboard = () => {
  // Sample data for charts
  const attendanceData = [
    { month: "Jan", attendance: 95 },
    { month: "Feb", attendance: 98 },
    { month: "Mar", attendance: 92 },
    { month: "Apr", attendance: 96 },
    { month: "May", attendance: 94 },
  ];

  const gradesData = [
    { subject: "Mathematics", score: 85 },
    { subject: "Physics", score: 78 },
    { subject: "Computer Science", score: 92 },
    { subject: "English", score: 88 },
  ];

  const upcomingEvents = [
    { id: 1, title: "Mid-term Examination", date: "2024-03-15", type: "exam" },
    {
      id: 2,
      title: "Project Submission",
      date: "2024-03-20",
      type: "assignment",
    },
    { id: 3, title: "Guest Lecture", date: "2024-03-25", type: "event" },
  ];

  const recentActivities = [
    {
      id: 1,
      activity: "Submitted Assignment: Data Structures",
      time: "2 hours ago",
    },
    {
      id: 2,
      activity: "Attended Class: Advanced Algorithms",
      time: "5 hours ago",
    },
    {
      id: 3,
      activity: "Completed Quiz: Database Management",
      time: "1 day ago",
    },
  ];

  const notifications = [
    {
      id: 1,
      message: "Your project proposal has been approved",
      type: "success",
    },
    { id: 2, message: "New course material available", type: "info" },
    { id: 3, message: "Upcoming deadline for registration", type: "warning" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-purple-400 p-6 rounded-2xl shadow-lg">
            <h3 className="text-white/80 text-sm mb-2">Current GPA</h3>
            <p className="text-3xl font-bold text-white">3.75</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-2xl shadow-lg">
            <h3 className="text-white/80 text-sm mb-2">Attendance Rate</h3>
            <p className="text-3xl font-bold text-white">95%</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-6 rounded-2xl shadow-lg">
            <h3 className="text-white/80 text-sm mb-2">Completed Courses</h3>
            <p className="text-3xl font-bold text-white">12</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-6 rounded-2xl shadow-lg">
            <h3 className="text-white/80 text-sm mb-2">Active Courses</h3>
            <p className="text-3xl font-bold text-white">4</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Attendance Overview</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis domain={[0, 100]} stroke="#64748b" />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="attendance" 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    dot={{ fill: "#8b5cf6" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Current Semester Grades</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={gradesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="subject" stroke="#64748b" />
                  <YAxis domain={[0, 100]} stroke="#64748b" />
                  <Tooltip />
                  <Bar dataKey="score" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Events */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Upcoming Events</h3>
              <Calendar className="w-5 h-5 text-purple-500" />
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-start space-x-3">
                  <div
                    className={`p-2 rounded-lg ${
                      event.type === "exam"
                        ? "bg-red-100"
                        : event.type === "assignment"
                          ? "bg-blue-100"
                          : "bg-green-100"
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{event.title}</p>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
              <Clock className="w-5 h-5 text-purple-500" />
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <Book className="w-4 h-4 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{activity.activity}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
              <Bell className="w-5 h-5 text-purple-500" />
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start space-x-3">
                  <div
                    className={`p-2 rounded-lg ${
                      notification.type === "success"
                        ? "bg-green-100"
                        : notification.type === "warning"
                          ? "bg-yellow-100"
                          : "bg-blue-100"
                    }`}
                  >
                    <AlertCircle className="w-4 h-4 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{notification.message}</p>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      View Details
                    </button>
                  </div>
                  <ChevronRight className="w-5 h-5 text-purple-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;