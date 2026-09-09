import { registerUser } from "@/actions/auth";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Create an Account
          </h1>
          <p className="text-sm text-gray-500">
            Enter your details below to get started
          </p>
        </div>

        <form action={registerUser} className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="Name" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="Name"
              name="name"
              placeholder="John Doe"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="Email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="Password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="password"
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 rounded-xl transition shadow-sm"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
