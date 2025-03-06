

// import React, { useState } from "react";
// import { AlertCircle, CheckCircle2 } from "lucide-react";

// const AddStudentsSection = () => {
//   const initialFormData = {
//     username: "",
//     password: "",
//     age: "",
//     first_name: "",
//     last_name: "",
//     email: "",
//     birthday: "",
//     address: "",
//     phone_num: "",
//     department: "",
//     enroll_date: "",
//     year: "",
//     gpa: "",
//     attendence: "",
//     advisor: "",
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleAddUser = async (e) => {
//     e.preventDefault();
//     console.log("Submitted Form Data: ", formData);
//     try {
//       const response = await fetch("http://localhost:5110/api/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setSuccess("Student added successfully!");
//         setFormData(initialFormData);
//       } else {
//         setError(result.error || "An error occurred.");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="bg-white rounded-lg shadow-lg p-6">
//         <h2 className="text-2xl font-bold mb-6">Add New Student</h2>

//         {error && (
//           <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700">
//             <AlertCircle className="h-4 w-4 mr-2" />
//             <span>{error}</span>
//           </div>
//         )}

//         {success && (
//           <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700">
//             <CheckCircle2 className="h-4 w-4 mr-2" />
//             <span>{success}</span>
//           </div>
//         )}

//         <form onSubmit={handleAddUser} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Basic Information */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Username*
//                 </label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Password*
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   First Name*
//                 </label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Last Name*
//                 </label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Email*
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Age
//                 </label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Birthday
//                 </label>
//                 <input
//                   type="date"
//                   name="birthday"
//                   value={formData.birthday}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                 />
//               </div>
//             </div>

//             {/* Additional Information */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Address
//                 </label>
//                 <textarea
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   rows="2"
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone_num"
//                   value={formData.phone_num}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Department
//                 </label>
//                 <select
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                 >
//                   <option value="">Select Department</option>
//                   <option value="Computer Science">Computer Science</option>
//                   <option value="Mathematics">Mathematics</option>
//                   <option value="Physics3">Physics</option>
//                   <option value="English">English</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Enrollment Date
//                 </label>
//                 <input
//                   type="date"
//                   name="enroll_date"
//                   value={formData.enroll_date}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Year
//                 </label>
//                 <select
//                   name="year"
//                   value={formData.year}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                 >
//                   <option value="">Select Year</option>
//                   <option value="First Year">First Year</option>
//                   <option value="Second Year">Second Year</option>
//                   <option value="Third Year">Third Year</option>
//                   <option value="Fourth Year">Fourth Year</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   GPA
//                 </label>
//                 <input
//                   type="text"
//                   name="gpa"
//                   value={formData.gpa}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Attendance
//                 </label>
//                 <input
//                   type="text"
//                   name="attendence"
//                   value={formData.attendence}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Advisor
//                 </label>
//                 <input
//                   type="text"
//                   name="advisor"
//                   value={formData.advisor}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                 />
//               </div>
//               {/* <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Enrollment Data
//                 </label>
//                 <input
//                   type="date"
//                   name="enroll_date"
//                   value={formData.enroll_date}
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
//                 />
//               </div> */}
//             </div>
//           </div>

//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
//             >
//               Add Student
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddStudentsSection;

import React, { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import "./AddStudentsSection.css";

const AddStudentsSection = () => {
  const initialFormData = {
    username: "",
    password: "",
    age: "",
    first_name: "",
    last_name: "",
    email: "",
    birthday: "",
    address: "",
    phone_num: "",
    department: "",
    enroll_date: "",
    year: "",
    gpa: "",
    attendence: "",
    advisor: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    console.log("Submitted Form Data: ", formData);
    try {
      const response = await fetch("http://localhost:5108/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess("Student added successfully!");
        setFormData(initialFormData);
      } else {
        setError(result.error || "An error occurred.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Add New Student</h2>

        {error && (
          <div className="error-message">
            <AlertCircle className="icon" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="success-message">
            <CheckCircle2 className="icon" />
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handleAddUser} className="student-form">
          <div className="form-grid">
            {/* Basic Information */}
            <div className="form-section">
              <div className="form-group">
                <label>Username*</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password*</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>First Name*</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Last Name*</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Birthday</label>
                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="form-section">
              <div className="form-group">
                <label>Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone_num"
                  value={formData.phone_num}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Department</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Marine Engineering">Marine Engineering</option>
                </select>
              </div>

              <div className="form-group">
                <label>Enrollment Date</label>
                <input
                  type="date"
                  name="enroll_date"
                  value={formData.enroll_date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Year</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                >
                  <option value="">Select Year</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
                </select>
              </div>

              <div className="form-group">
                <label>GPA</label>
                <input
                  type="text"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Attendance</label>
                <input
                  type="text"
                  name="attendence"
                  value={formData.attendence}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Advisor</label>
                <input
                  type="text"
                  name="advisor"
                  value={formData.advisor}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentsSection;
