// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Layout,
//   Book,
//   UserCircle,
//   GraduationCap,
//   ClipboardList,
//   LayoutDashboard,
//   CalendarDays,
//   Users,
//   LogOut,
//   PlusCircle,
// } from "lucide-react";
// import StudentResults from "../Results/StudentResults";
// import CoursesSection from "../Courses/CoursesSection";
// import ProfileSection from "../Profile/ProfileSection";
// import Dashboard from "../Dashboard/Dashboard";
// import ClassSchedule from "../ClassSchedule/ClassSchedule";
// import StudentsSection from "../Students/StudentsSection";
// import TeachersSection from "../Teachers/TeachersSection";
// import AddStudentsSection from "../Students/AddStudentsSection";

// const AppLayout = ({ userType, onLogout }) => {
//   const navigate = useNavigate();
//   const [activeItem, setActiveItem] = useState("dashboard");

//   // Sidebar items based on user type
//   const sidebarItems = [
//     { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
//     { id: "profile", icon: UserCircle, label: "Profile" },
//     { id: "courses", icon: Book, label: "Courses" },
//     { id: "results", icon: ClipboardList, label: "Results" },
//     { id: "students", icon: GraduationCap, label: "Students" },
//     ...(userType === "admin"
//       ? [{ id: "add-students", icon: PlusCircle, label: "Add Students" }]
//       : []), // Only include Add Students for admin users
//     { id: "teachers", icon: Users, label: "Teachers" },
//     { id: "schedule", icon: CalendarDays, label: "Class Schedule" },
//   ];

//   // Render content based on active sidebar item
//   const renderContent = () => {
//     switch (activeItem) {
//       case "dashboard":
//         return <Dashboard />;
//       case "profile":
//         return <ProfileSection />;
//       case "results":
//         return <StudentResults />;
//       case "courses":
//         return <CoursesSection />;
//       case "schedule":
//         return <ClassSchedule />;
//       case "students":
//         return <StudentsSection userType={userType} />;
//       case "add-students":
//         return <AddStudentsSection />;
//       case "teachers":
//         return <TeachersSection />;
//       default:
//         return (
//           <div className="p-6">
//             <h2 className="text-2xl font-bold mb-4">
//               {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}
//             </h2>
//             <p>Content for {activeItem} section</p>
//           </div>
//         );
//     }
//   };

//   // Handle logout
//   const handleLogout = () => {
//     onLogout(); // Clear authentication state
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Fixed Header */}
//       <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 shadow-md z-50">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <Layout className="h-8 w-8 text-white" />
//               <h1 className="ml-2 text-xl font-bold text-white">
//                 Student Management System
//               </h1>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="p-2 hover:bg-white/10 rounded-full">
//                 <UserCircle className="h-6 w-6 text-white" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content with Top Padding */}
//       <div className="flex pt-16">
//         {/* Sidebar */}
//         <aside className="fixed left-0 top-16 w-64 bg-white shadow-lg h-[calc(100vh-64px)] border-r border-gray-100 flex flex-col">
//           {/* Top Area Based on User Role */}
//           <div className="p-4 border-b border-gray-100">
//             {userType === "admin" ? (
//               <div className="text-purple-600 text-lg font-semibold">
//                 Admin Panel
//               </div>
//             ) : (
//               <div className="text-blue-600 text-lg font-semibold">
//                 Student Dashboard
//               </div>
//             )}
//           </div>

//           <nav className="p-4 flex-1">
//             <ul className="space-y-1">
//               {sidebarItems.map(({ id, icon: Icon, label }) => (
//                 <li key={id}>
//                   <button
//                     onClick={() => setActiveItem(id)}
//                     className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
//                       activeItem === id
//                         ? "bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600 shadow-sm"
//                         : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                     }`}
//                   >
//                     <Icon
//                       className={`h-5 w-5 ${
//                         activeItem === id ? "text-purple-600" : "text-gray-500"
//                       }`}
//                     />
//                     <span className="text-sm font-medium">{label}</span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Logout Button at the Bottom */}
//           <div className="p-4 border-t border-gray-100">
//             <button
//               onClick={handleLogout}
//               className="w-full flex items-center space-x-3 p-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-300"
//             >
//               <LogOut className="h-5 w-5 text-gray-500" />
//               <span className="text-sm font-medium">Logout</span>
//             </button>
//           </div>
//         </aside>

//         {/* Main Content Area */}
//         <main className="flex-1 ml-64">{renderContent()}</main>
//       </div>
//     </div>
//   );
// };

// export default AppLayout;


import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
    { id: "profile", icon: UserCircle, label: "Profile" },
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