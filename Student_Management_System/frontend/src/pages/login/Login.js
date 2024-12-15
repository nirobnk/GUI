import React from "react";

function Login() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/bg.jpg')`,
      }}
    >

    {/* Semi-transparent overlay */}
       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 w-full max-w-sm p-9 bg-gray-100 shadow-md rounded-lg">
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

            {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
