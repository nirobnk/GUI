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
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex flex-col items-center">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
//                   <User className="w-16 h-16 text-gray-400" />
//                 </div>
//                 <button className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white">
//                   <Camera className="w-4 h-4" />
//                 </button>
//               </div>
//               <h2 className="mt-4 text-xl font-semibold">{studentData.personal.name}</h2>
//               <p className="text-gray-600">{studentData.academic.major}</p>
//               <p className="text-sm text-gray-500">ID: {studentData.personal.studentId}</p>
              
//               <button 
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 onClick={() => setIsEditing(!isEditing)}
//               >
//                 {isEditing ? 'Save Changes' : 'Edit Profile'}
//               </button>
//             </div>

//             <div className="mt-6 space-y-3">
//               <div className="flex items-center space-x-3 text-gray-600">
//                 <Mail className="w-5 h-5" />
//                 <span className="text-sm">{studentData.personal.email}</span>
//               </div>
//               <div className="flex items-center space-x-3 text-gray-600">
//                 <Phone className="w-5 h-5" />
//                 <span className="text-sm">{studentData.personal.phone}</span>
//               </div>
//               <div className="flex items-center space-x-3 text-gray-600">
//                 <Calendar className="w-5 h-5" />
//                 <span className="text-sm">{studentData.personal.dateOfBirth}</span>
//               </div>
//               <div className="flex items-center space-x-3 text-gray-600">
//                 <MapPin className="w-5 h-5" />
//                 <span className="text-sm">{studentData.personal.address}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Academic Information */}
//         <div className="md:col-span-2">
//           <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//             <h3 className="text-lg font-semibold mb-4">Academic Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">Major</label>
//                   <div className="flex items-center space-x-2">
//                     <School className="w-5 h-5 text-gray-400" />
//                     <span>{studentData.academic.major}</span>
//                   </div>
//                 </div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">Year</label>
//                   <div className="flex items-center space-x-2">
//                     <BookOpen className="w-5 h-5 text-gray-400" />
//                     <span>{studentData.academic.year}</span>
//                   </div>
//                 </div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">GPA</label>
//                   <div className="flex items-center space-x-2">
//                     <div className="text-2xl font-bold text-blue-600">{studentData.academic.gpa}</div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">Faculty</label>
//                   <div>{studentData.academic.faculty}</div>
//                 </div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">Academic Advisor</label>
//                   <div>{studentData.academic.advisor}</div>
//                 </div>
//                 <div className="mb-4">
//                   <label className="text-sm text-gray-500">Enrollment Date</label>
//                   <div>{studentData.academic.enrollmentDate}</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Settings Section */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="flex items-center space-x-2 mb-4">
//               <Settings className="w-5 h-5" />
//               <h3 className="text-lg font-semibold">Settings</h3>
//             </div>
//             <div className="space-y-4">
//               <div className="flex items-center justify-between">
//                 <span>Email Notifications</span>
//                 <label className="relative inline-flex items-center cursor-pointer">
//                   <input type="checkbox" className="sr-only peer" />
//                   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                 </label>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span>SMS Notifications</span>
//                 <label className="relative inline-flex items-center cursor-pointer">
//                   <input type="checkbox" className="sr-only peer" />
//                   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                 </label>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span>Two-Factor Authentication</span>
//                 <label className="relative inline-flex items-center cursor-pointer">
//                   <input type="checkbox" className="sr-only peer" />
//                   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
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
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
                  <User className="w-16 h-16 text-purple-600" />
                </div>
                <button className="absolute bottom-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">{studentData.personal.name}</h2>
              <p className="text-gray-600">{studentData.academic.major}</p>
              <p className="text-sm text-gray-500">ID: {studentData.personal.studentId}</p>
              
              <button 
                className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-purple-600" />
                <span className="text-sm">{studentData.personal.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-purple-600" />
                <span className="text-sm">{studentData.personal.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5 text-purple-600" />
                <span className="text-sm">{studentData.personal.dateOfBirth}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span className="text-sm">{studentData.personal.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Academic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Major</label>
                  <div className="flex items-center space-x-2">
                    <School className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-800">{studentData.academic.major}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Year</label>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-800">{studentData.academic.year}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">GPA</label>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-purple-600">{studentData.academic.gpa}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Faculty</label>
                  <div className="text-gray-800">{studentData.academic.faculty}</div>
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Academic Advisor</label>
                  <div className="text-gray-800">{studentData.academic.advisor}</div>
                </div>
                <div className="mb-4">
                  <label className="text-sm text-gray-500">Enrollment Date</label>
                  <div className="text-gray-800">{studentData.academic.enrollmentDate}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-800">Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-800">Email Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-800">SMS Notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-800">Two-Factor Authentication</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
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