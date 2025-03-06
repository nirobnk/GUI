// import React, { useState, useEffect } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   Calendar,
//   MapPin,
//   School,
//   BookOpen,
//   Settings,
//   Camera,
// } from "lucide-react";
// import "./ProfileSection.css";

// const ProfileSection = () => {
//   const [students, setStudents] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);

//   // Fetch students data
//   useEffect(() => {
//     fetch("http://localhost:5108/students")
//       .then((response) => response.json())
//       .then((data) => {
//         const updatedStudents = data.map((student) => ({
//           ...student,
//           status: "Active",
//         }));
//         setStudents(updatedStudents);
//       })
//       .catch((error) => console.error("Error fetching students:", error));
//   }, []);

//   // const studentData = {
//   //   personal: {
//   //     name: "John Smith",
//   //     studentId: "ST2024001",
//   //     email: "john.smith@university.edu",
//   //     phone: "+1 (555) 123-4567",
//   //     dateOfBirth: "1999-05-15",
//   //     address: "123 University Ave, College Town, ST 12345",
//   //   },
//   //   academic: {
//   //     major: "Computer Science",
//   //     year: "3rd Year",
//   //     gpa: "3.75",
//   //     faculty: "Engineering",
//   //     advisor: "Dr. Sarah Johnson",
//   //     enrollmentDate: "2022-09-01",
//   //   },
//   // };

//   return (
//     <div className="profile-container">
//       <div className="profile-grid">
//         {/* Profile Card */}
//         <div className="profile-card">
//           <div className="profile-header">
//             <div className="avatar-container">
//               <div className="avatar">
//                 <User className="avatar-icon" />
//               </div>
//               <button className="camera-button">
//                 <Camera className="camera-icon" />
//               </button>
//             </div>
//             <h2 className="profile-name">{student.name}</h2>
//             <p className="profile-major">{student.department}</p>
//             <p className="profile-id">ID: {student.username}</p>

//             <button
//               className="edit-button"
//               onClick={() => setIsEditing(!isEditing)}
//             >
//               {isEditing ? "Save Changes" : "Edit Profile"}
//             </button>
//           </div>

//           <div className="contact-info">
//             <div className="contact-item">
//               <Mail className="contact-icon" />
//               <span className="contact-text">{student.email}</span>
//             </div>
//             <div className="contact-item">
//               <Phone className="contact-icon" />
//               <span className="contact-text">{student.phone_num}</span>
//             </div>
//             <div className="contact-item">
//               <Calendar className="contact-icon" />
//               <span className="contact-text">{student.birthday}</span>
//             </div>
//             <div className="contact-item">
//               <MapPin className="contact-icon" />
//               <span className="contact-text">{student.address}</span>
//             </div>
//           </div>
//         </div>

//         {/* Academic Information */}
//         <div>
//           <div className="academic-card">
//             <h3 className="academic-title">Academic Information</h3>
//             <div className="academic-grid">
//               <div>
//                 <div className="academic-item">
//                   <label className="academic-label">Major</label>
//                   <div className="academic-value">
//                     <School className="academic-icon" />
//                     <span>{student.department}</span>
//                   </div>
//                 </div>
//                 <div className="academic-item">
//                   <label className="academic-label">Year</label>
//                   <div className="academic-value">
//                     <BookOpen className="academic-icon" />
//                     <span>{student.year}</span>
//                   </div>
//                 </div>
//                 <div className="academic-item">
//                   <label className="academic-label">GPA</label>
//                   <div className="academic-value">
//                     <div className="gpa-value">{student.gpa}</div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="academic-item">
//                   <label className="academic-label">Faculty</label>
//                   <div className="academic-value">
//                     Engineering
//                   </div>
//                 </div>
//                 <div className="academic-item">
//                   <label className="academic-label">Academic Advisor</label>
//                   <div className="academic-value">{student.advisor}</div>
//                 </div>
//                 <div className="academic-item">
//                   <label className="academic-label">Enrollment Date</label>
//                   <div className="academic-value">{student.enroll_date}</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Settings Section */}
//           <div className="settings-card">
//             <div className="settings-header">
//               <Settings className="academic-icon" />
//               <h3 className="settings-title">Settings</h3>
//             </div>
//             <div className="settings-list">
//               <div className="settings-item">
//                 <span>Email Notifications</span>
//                 <label className="toggle-switch">
//                   <input type="checkbox" className="toggle-input" />
//                   <div className="toggle-slider"></div>
//                 </label>
//               </div>
//               <div className="settings-item">
//                 <span>SMS Notifications</span>
//                 <label className="toggle-switch">
//                   <input type="checkbox" className="toggle-input" />
//                   <div className="toggle-slider"></div>
//                 </label>
//               </div>
//               <div className="settings-item">
//                 <span>Two-Factor Authentication</span>
//                 <label className="toggle-switch">
//                   <input type="checkbox" className="toggle-input" />
//                   <div className="toggle-slider"></div>
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;


import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  School,
  BookOpen,
  Settings,
  Camera,
} from "lucide-react";
import "./ProfileSection.css";

const ProfileSection = () => {
  const [student, setStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch current user's data
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);
        
        // Get all students
        const response = await fetch("http://localhost:5108/students");
        const data = await response.json();
        
        // Get the username from localStorage (set during login)
        const username = localStorage.getItem('username');
        
        if (!username) {
          setError("User not logged in");
          setLoading(false);
          return;
        }
        
        // Find the current user in the students data
        const currentUser = data.find(user => user.username === username);
        
        if (currentUser) {
          setStudent(currentUser);
        } else {
          setError("User not found");
        }
      } catch (err) {
        console.error("Error fetching student data:", err);
        setError("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  // Handle saving edited profile (you can implement this later)
  const handleSaveProfile = () => {
    // Save changes logic would go here
    setIsEditing(false);
  };

  if (loading) {
    return <div className="profile-loading">Loading profile data...</div>;
  }

  if (error || !student) {
    return <div className="profile-error">{error || "No profile data available"}</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-grid">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-container">
              <div className="avatar">
                <User className="avatar-icon" />
              </div>
              <button className="camera-button">
                <Camera className="camera-icon" />
              </button>
            </div>
            <h2 className="profile-name">
              {student.first_name} {student.last_name}
            </h2>
            <p className="profile-major">{student.department}</p>
            <p className="profile-id">ID: {student.username}</p>

            <button
              className="edit-button"
              onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span className="contact-text">{student.email}</span>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span className="contact-text">{student.phone_num}</span>
            </div>
            <div className="contact-item">
              <Calendar className="contact-icon" />
              <span className="contact-text">{student.birthday}</span>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <span className="contact-text">{student.address}</span>
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div>
          <div className="academic-card">
            <h3 className="academic-title">Academic Information</h3>
            <div className="academic-grid">
              <div>
                <div className="academic-item">
                  <label className="academic-label">Major</label>
                  <div className="academic-value">
                    <School className="academic-icon" />
                    <span>{student.department}</span>
                  </div>
                </div>
                <div className="academic-item">
                  <label className="academic-label">Year</label>
                  <div className="academic-value">
                    <BookOpen className="academic-icon" />
                    <span>{student.year}</span>
                  </div>
                </div>
                <div className="academic-item">
                  <label className="academic-label">GPA</label>
                  <div className="academic-value">
                    <div className="gpa-value">{student.gpa}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="academic-item">
                  <label className="academic-label">Faculty</label>
                  <div className="academic-value">
                    Engineering
                  </div>
                </div>
                <div className="academic-item">
                  <label className="academic-label">Academic Advisor</label>
                  <div className="academic-value">{student.advisor}</div>
                </div>
                <div className="academic-item">
                  <label className="academic-label">Enrollment Date</label>
                  <div className="academic-value">{student.enroll_date}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Section */}
          <div className="settings-card">
            <div className="settings-header">
              <Settings className="academic-icon" />
              <h3 className="settings-title">Settings</h3>
            </div>
            <div className="settings-list">
              <div className="settings-item">
                <span>Email Notifications</span>
                <label className="toggle-switch">
                  <input type="checkbox" className="toggle-input" />
                  <div className="toggle-slider"></div>
                </label>
              </div>
              <div className="settings-item">
                <span>SMS Notifications</span>
                <label className="toggle-switch">
                  <input type="checkbox" className="toggle-input" />
                  <div className="toggle-slider"></div>
                </label>
              </div>
              <div className="settings-item">
                <span>Two-Factor Authentication</span>
                <label className="toggle-switch">
                  <input type="checkbox" className="toggle-input" />
                  <div className="toggle-slider"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
