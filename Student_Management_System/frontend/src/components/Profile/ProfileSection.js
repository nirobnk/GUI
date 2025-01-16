


// import React, { useState } from 'react';
// import { User, Mail, Phone, Calendar, MapPin, School, BookOpen, Settings, Camera } from 'lucide-react';

// const ProfileSection = () => {
//   const [isEditing, setIsEditing] = useState(false);
  
//   const studentData = {
//     personal: {
//       name: "John Smith",
//       studentId: "ST2024001",
//       email: "john.smith@university.edu",
//       phone: "+1 (555) 123-4567",
//       dateOfBirth: "1999-05-15",
//       address: "123 University Ave, College Town, ST 12345"
//     },
//     academic: {
//       major: "Computer Science",
//       year: "3rd Year",
//       gpa: "3.75",
//       faculty: "Engineering",
//       advisor: "Dr. Sarah Johnson",
//       enrollmentDate: "2022-09-01"
//     }
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Profile Card */}
//         <div className="md:col-span-1">
//           <div className="bg-white rounded-2xl shadow-lg p-6">
//             <div className="flex flex-col items-center">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
//                   <User className="w-16 h-16 text-purple-600" />
//                 </div>
//                 <button className="absolute bottom-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
//                   <Camera className="w-4 h-4" />
//                 </button>
//               </div>
//               <h2 className="mt-4 text-xl font-semibold text-gray-800">{studentData.personal.name}</h2>
//               <p className="text-gray-600">{studentData.academic.major}</p>
//               <p className="text-sm text-gray-500">ID: {studentData.personal.studentId}</p>
              
//               <button 
//                 className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
//                 onClick={() => setIsEditing(!isEditing)}
//               >
//                 {isEditing ? 'Save Changes' : 'Edit Profile'}
//               </button>
//             </div>

//             <div className="mt-6 space-y-3">
//               <div className="flex items-center space-x-3 text-gray-600">
//                 <Mail className="w-5 h-5 text-purple-600" />
//                 <span className="text-sm">{studentData.personal.email}</span>
//               </div>
//               <div className="flex items-center space-x-3 text-gray-600">
//                 <Phone className="w-5 h-5 text-purple-600" />
//                 <span className="text-sm">{studentData.personal.phone}</span>
//               </div>
//               <div className="flex items-center space-x-3 text-gray-600">
//                 <Calendar className="w-5 h-5 text-purple-600" />
//                 <span className="text-sm">{studentData.personal.dateOfBirth}</span>
//               </div>
//               <div className="flex items-center space-x-3 text-gray-600">
//                 <MapPin className="w-5 h-5 text-purple-600" />
//                 <span className="text-sm">{studentData.personal.address}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Academic Information */}
//         <div className="md:col-span-2">
//           <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Academic Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">Major</label>
//                   <div className="flex items-center space-x-2">
//                     <School className="w-5 h-5 text-purple-600" />
//                     <span className="text-gray-800">{studentData.academic.major}</span>
//                   </div>
//                 </div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">Year</label>
//                   <div className="flex items-center space-x-2">
//                     <BookOpen className="w-5 h-5 text-purple-600" />
//                     <span className="text-gray-800">{studentData.academic.year}</span>
//                   </div>
//                 </div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">GPA</label>
//                   <div className="flex items-center space-x-2">
//                     <div className="text-2xl font-bold text-purple-600">{studentData.academic.gpa}</div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">Faculty</label>
//                   <div className="text-gray-800">{studentData.academic.faculty}</div>
//                 </div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">Academic Advisor</label>
//                   <div className="text-gray-800">{studentData.academic.advisor}</div>
//                 </div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">Enrollment Date</label>
//                   <div className="text-gray-800">{studentData.academic.enrollmentDate}</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Settings Section */}
//           <div className="bg-white rounded-2xl shadow-lg p-6">
//             <div className="flex items-center space-x-2 mb-4">
//               <Settings className="w-5 h-5 text-purple-600" />
//               <h3 className="text-lg font-semibold text-gray-800">Settings</h3>
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-800">Email Notifications</span>
//                 <label className="relative inline-flex items-center cursor-pointer">
//                   <input type="checkbox" className="sr-only peer" />
//                   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
//                 </label>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-800">SMS Notifications</span>
//                 <label className="relative inline-flex items-center cursor-pointer">
//                   <input type="checkbox" className="sr-only peer" />
//                   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
//                 </label>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-800">Two-Factor Authentication</span>
//                 <label className="relative inline-flex items-center cursor-pointer">
//                   <input type="checkbox" className="sr-only peer" />
//                   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
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


import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, MapPin, School, BookOpen, Settings, Camera } from 'lucide-react';
import './ProfileSection.css';

const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const studentData = {
    personal: {
      name: "John Smith",
      studentId: "ST2024001",
      email: "john.smith@university.edu",
      phone: "+1 (555) 123-4567",
      dateOfBirth: "1999-05-15",
      address: "123 University Ave, College Town, ST 12345"
    },
    academic: {
      major: "Computer Science",
      year: "3rd Year",
      gpa: "3.75",
      faculty: "Engineering",
      advisor: "Dr. Sarah Johnson",
      enrollmentDate: "2022-09-01"
    }
  };

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
            <h2 className="profile-name">{studentData.personal.name}</h2>
            <p className="profile-major">{studentData.academic.major}</p>
            <p className="profile-id">ID: {studentData.personal.studentId}</p>
            
            <button 
              className="edit-button"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span className="contact-text">{studentData.personal.email}</span>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span className="contact-text">{studentData.personal.phone}</span>
            </div>
            <div className="contact-item">
              <Calendar className="contact-icon" />
              <span className="contact-text">{studentData.personal.dateOfBirth}</span>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <span className="contact-text">{studentData.personal.address}</span>
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
                    <span>{studentData.academic.major}</span>
                  </div>
                </div>
                <div className="academic-item">
                  <label className="academic-label">Year</label>
                  <div className="academic-value">
                    <BookOpen className="academic-icon" />
                    <span>{studentData.academic.year}</span>
                  </div>
                </div>
                <div className="academic-item">
                  <label className="academic-label">GPA</label>
                  <div className="academic-value">
                    <div className="gpa-value">{studentData.academic.gpa}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="academic-item">
                  <label className="academic-label">Faculty</label>
                  <div className="academic-value">{studentData.academic.faculty}</div>
                </div>
                <div className="academic-item">
                  <label className="academic-label">Academic Advisor</label>
                  <div className="academic-value">{studentData.academic.advisor}</div>
                </div>
                <div className="academic-item">
                  <label className="academic-label">Enrollment Date</label>
                  <div className="academic-value">{studentData.academic.enrollmentDate}</div>
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