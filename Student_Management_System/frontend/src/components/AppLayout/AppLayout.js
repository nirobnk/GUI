
import React, { useState } from "react";
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
} from "lucide-react";
import StudentResults from "../Results/StudentResults";
import CoursesSection from "../Courses/CoursesSection";
import ProfileSection from "../Profile/ProfileSection";
import Dashboard from "../Dashboard/Dashboard";
import ClassSchedule from "../ClassSchedule/ClassSchedule";
import StudentsSection from "../Students/StudentsSection";
import TeachersSection from "../Teachers/TeachersSection";

const AppLayout = ({ children }) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "profile", icon: UserCircle, label: "Profile" },
    { id: "courses", icon: Book, label: "Courses" },
    { id: "results", icon: ClipboardList, label: "Results" },
    { id: "students", icon: GraduationCap, label: "Students" },
    { id: "teachers", icon: Users, label: "Teachers" }, // Added Teachers section
    { id: "schedule", icon: CalendarDays, label: "Class Schedule" },
  ];

  const renderContent = () => {
    switch (activeItem) {
      case "dashboard":
        return <Dashboard />;
      case "profile":
        return <ProfileSection />;
      case "results":
        return <StudentResults />;
      case "courses":
        return <CoursesSection />;
      case "schedule":
        return <ClassSchedule />;
      case "students":
        return <StudentsSection />;
      case "teachers":
        return <TeachersSection />; // Render TeachersSection
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}
            </h2>
            <p>Content for {activeItem} section</p>
          </div>
        );
    }
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    alert("You have been logged out.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Layout className="h-8 w-8 text-white" />
              <h1 className="ml-2 text-xl font-bold text-white">
                Student Management System
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white/10 rounded-full">
                <UserCircle className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Top Padding */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 w-64 bg-white shadow-lg h-[calc(100vh-64px)] border-r border-gray-100 flex flex-col">
          <nav className="p-4 flex-1">
            <ul className="space-y-1">
              {sidebarItems.map(({ id, icon: Icon, label }) => (
                <li key={id}>
                  <button
                    onClick={() => setActiveItem(id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                      activeItem === id
                        ? "bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600 shadow-sm"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        activeItem === id ? "text-purple-600" : "text-gray-500"
                      }`}
                    />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout Button at the Bottom */}
          <div className="p-4 border-t border-gray-100">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 p-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300"
            >
              <LogOut className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-64">{renderContent()}</main>
      </div>
    </div>
  );
};

export default AppLayout;