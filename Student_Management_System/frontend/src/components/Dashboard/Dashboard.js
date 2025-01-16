

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
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Quick Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Current Semester Grades</h3>
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

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Upcoming Events */}
//           <div className="bg-white p-6 rounded-2xl shadow-lg">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-800">Upcoming Events</h3>
//               <Calendar className="w-5 h-5 text-purple-500" />
//             </div>
//             <div className="space-y-4">
//               {upcomingEvents.map((event) => (
//                 <div key={event.id} className="flex items-start space-x-3">
//                   <div
//                     className={`p-2 rounded-lg ${
//                       event.type === "exam"
//                         ? "bg-red-100"
//                         : event.type === "assignment"
//                           ? "bg-blue-100"
//                           : "bg-green-100"
//                     }`}
//                   >
//                     <Calendar className="w-4 h-4 text-gray-700" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">{event.title}</p>
//                     <p className="text-sm text-gray-500">{event.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Recent Activities */}
//           <div className="bg-white p-6 rounded-2xl shadow-lg">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
//               <Clock className="w-5 h-5 text-purple-500" />
//             </div>
//             <div className="space-y-4">
//               {recentActivities.map((activity) => (
//                 <div key={activity.id} className="flex items-start space-x-3">
//                   <div className="p-2 rounded-lg bg-gray-100">
//                     <Book className="w-4 h-4 text-gray-700" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-800">{activity.activity}</p>
//                     <p className="text-sm text-gray-500">{activity.time}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Notifications */}
//           <div className="bg-white p-6 rounded-2xl shadow-lg">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
//               <Bell className="w-5 h-5 text-purple-500" />
//             </div>
//             <div className="space-y-4">
//               {notifications.map((notification) => (
//                 <div key={notification.id} className="flex items-start space-x-3">
//                   <div
//                     className={`p-2 rounded-lg ${
//                       notification.type === "success"
//                         ? "bg-green-100"
//                         : notification.type === "warning"
//                           ? "bg-yellow-100"
//                           : "bg-blue-100"
//                     }`}
//                   >
//                     <AlertCircle className="w-4 h-4 text-gray-700" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-800">{notification.message}</p>
//                     <button className="text-sm text-blue-600 hover:text-blue-800">
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


import React from "react";
import './Dashboard.css'
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
    { id: 2, title: "Project Submission", date: "2024-03-20", type: "assignment" },
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
    <div className="dashboard">
      <div className="container">
        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-card stat-card-purple">
            <h3>Current GPA</h3>
            <p>3.75</p>
          </div>
          <div className="stat-card stat-card-blue">
            <h3>Attendance Rate</h3>
            <p>95%</p>
          </div>
          <div className="stat-card stat-card-pink">
            <h3>Completed Courses</h3>
            <p>12</p>
          </div>
          <div className="stat-card stat-card-yellow">
            <h3>Active Courses</h3>
            <p>4</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-grid">
          <div className="chart-card">
            <h3>Attendance Overview</h3>
            <div className="chart-container">
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

          <div className="chart-card">
            <h3>Current Semester Grades</h3>
            <div className="chart-container">
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

        <div className="info-grid">
          {/* Upcoming Events */}
          <div className="info-card">
            <div className="card-header">
              <h3>Upcoming Events</h3>
              <Calendar />
            </div>
            <div className="list-container">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="list-item">
                  <div className={`item-icon ${event.type}`}>
                    <Calendar />
                  </div>
                  <div className="item-content">
                    <p className="item-title">{event.title}</p>
                    <p className="item-subtitle">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="info-card">
            <div className="card-header">
              <h3>Recent Activities</h3>
              <Clock />
            </div>
            <div className="list-container">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="list-item">
                  <div className="item-icon activity">
                    <Book />
                  </div>
                  <div className="item-content">
                    <p className="item-title">{activity.activity}</p>
                    <p className="item-subtitle">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="info-card">
            <div className="card-header">
              <h3>Notifications</h3>
              <Bell />
            </div>
            <div className="list-container">
              {notifications.map((notification) => (
                <div key={notification.id} className="list-item">
                  <div className={`item-icon ${notification.type}`}>
                    <AlertCircle />
                  </div>
                  <div className="item-content">
                    <p className="item-title">{notification.message}</p>
                    <button className="view-details">View Details</button>
                  </div>
                  <ChevronRight className="chevron-icon" />
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