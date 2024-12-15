import React from "react";

function Signup() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/bg.jpg')`,
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Sign-Up Form */}
      <div className="relative z-10 w-full max-w-sm p-9 bg-gray-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-black">Register</h2>
        <form className="space-y-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-black"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-600"
            />
          </div>
          {/* Last Name */}
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-black"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-600"
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-600"
            />
          </div>
          {/* Birth Day */}
          <div>
            <label
              htmlFor="birthday"
              className="block text-sm font-medium text-black"
            >
              Birth Day
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-600"
            />
          </div>
          {/* Enrollment Date */}
          <div>
            <label
              htmlFor="enrollmentdate"
              className="block text-sm font-medium text-black"
            >
              Enrollment Date
            </label>
            <input
              type="date"
              id="enrollmentdate"
              name="enrollmentdate"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-600"
            />
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-600"
            />
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;