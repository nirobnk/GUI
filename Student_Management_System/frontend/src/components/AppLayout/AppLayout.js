
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import {
  Layout,
  Book,
  UserCircle,
  GraduationCap,
  ClipboardList,
  LayoutDashboard,
  CalendarDays,
  Users,
  LogOut,
  PlusCircle,
} from "lucide-react";
import StudentResults from "../Results/StudentResults";
import CoursesSection from "../Courses/CoursesSection";
import ProfileSection from "../Profile/ProfileSection";
import Dashboard from "../Dashboard/Dashboard";
import ClassSchedule from "../ClassSchedule/ClassSchedule";
import StudentsSection from "../Students/StudentsSection";
import TeachersSection from "../Teachers/TeachersSection";
import AddStudentsSection from "../Students/AddStudentsSection";
import './AppLayout.css';

const AppLayout = ({ userType, onLogout }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    ...(userType === "user"
      ? [{ id: "profile", icon: UserCircle, label: "Profile" }]
      : []),
    { id: "courses", icon: Book, label: "Courses" },
    { id: "results", icon: ClipboardList, label: "Results" },
    { id: "students", icon: GraduationCap, label: "Students" },
    ...(userType === "admin"
      ? [{ id: "add-students", icon: PlusCircle, label: "Add Students" }]
      : []),
    { id: "teachers", icon: Users, label: "Teachers" },
    { id: "schedule", icon: CalendarDays, label: "Class Schedule" },
  ];

  const renderContent = () => {
    switch (activeItem) {
      case "dashboard":
        return <Dashboard userType={userType}/>;
      case "profile":
        return <ProfileSection />;
      case "results":
        return <StudentResults />;
      case "courses":
        return <CoursesSection />;
      case "schedule":
        return <ClassSchedule />;
      case "students":
        return <StudentsSection userType={userType} />;
      case "add-students":
        return <AddStudentsSection />;
      case "teachers":
        return <TeachersSection />;
      default:
        return (
          <div className="default-content">
            <h2>{activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}</h2>
            <p>Content for {activeItem} section</p>
          </div>
        );
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };
  const handleProfileClick = () => {
    setActiveItem("profile");
  };


  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <Layout className="header-logo" />
            <h1>Student Management System</h1>
          </div>
          <div className="header-right">
            <button className="profile-button" onClick={handleProfileClick}>
              <UserCircle />
            </button>
          </div>
        </div>
      </header>

      <div className="main-container">
        <aside className="sidebar">
          <div className="sidebar-header">
            {userType === "admin" ? (
              <div className="admin-title">Admin Panel</div>
            ) : (
              <div className="student-title">Student Dashboard</div>
            )}
          </div>

          <nav className="sidebar-nav">
            <ul>
              {sidebarItems.map(({ id, icon: Icon, label }) => (
                <li key={id}>
                  <button
                    onClick={() => setActiveItem(id)}
                    className={`nav-item ${activeItem === id ? 'active' : ''}`}
                  >
                    <Icon className={`nav-icon ${activeItem === id ? 'active' : ''}`} />
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sidebar-footer">
            <button onClick={handleLogout} className="logout-button">
              <LogOut className="logout-icon" />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;