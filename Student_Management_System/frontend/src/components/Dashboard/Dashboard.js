import React from "react";
import "./Dashboard.css";
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

const Dashboard = ({ userType }) => {
  // Sample data for charts
  const attendanceData = [
    { month: "Jan", attendance: 95 },
    { month: "Feb", attendance: 98 },
    { month: "Mar", attendance: 92 },
    { month: "Apr", attendance: 96 },
    { month: "May", attendance: 94 },
  ];

  const gradesData = [
    { subject: "GUI Programming", score: 85 },
    { subject: "Data Structure", score: 78 },
    { subject: "Networking", score: 92 },
    { subject: "Telecommunication", score: 88 },
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
    <div className="dashboard">
      <div className="container">
        {/* Quick Stats */}
        {/*for admin*/}
        {userType === "admin" && (
          <div className="stats-grid">
            <div className="stat-card stat-card-purple">
              <h3>Total Students</h3>
              <p>75</p>
            </div>
            <div className="stat-card stat-card-blue">
              <h3>Attendance Rate</h3>
              <p>95%</p>
            </div>
            <div className="stat-card stat-card-pink">
              <h3>Total Teacher</h3>
              <p>19</p>
            </div>
            <div className="stat-card stat-card-yellow">
              <h3>Total courses</h3>
              <p>25</p>
            </div>
          </div>
        )}

        {/*for students*/}

        {userType === "user" && (
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
        )}

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
