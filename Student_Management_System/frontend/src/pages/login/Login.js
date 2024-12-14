import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-sm p-9 bg-white shadow-md rounded-lg">
        <div className="">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Sign into your account
          </h2>
        </div>
        <div>
          <form>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            </div>
            <div>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-blue-600"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
