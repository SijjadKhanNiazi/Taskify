import { registerUser } from "@/actions/auth";
import React from "react";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="min-h-screen mesh-bg flex items-center justify-center p-4">
      {/* Decorative orbs */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 mb-4">
            <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Create Account</h1>
          <p className="text-white/40 mt-1 text-sm">Join Taskify and start organizing</p>
        </div>

        {/* Glass Card */}
        <div className="glass-card rounded-2xl p-8">
          <form action={registerUser} className="space-y-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="Name" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Full Name
              </label>
              <input
                type="text"
                id="Name"
                name="name"
                placeholder="John Doe"
                className="glass-input w-full rounded-xl px-4 py-3 text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="Email" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Email Address
              </label>
              <input
                type="email"
                id="Email"
                name="email"
                placeholder="you@example.com"
                className="glass-input w-full rounded-xl px-4 py-3 text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="Password" className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Password
              </label>
              <input
                type="password"
                id="Password"
                name="password"
                placeholder="••••••••"
                className="glass-input w-full rounded-xl px-4 py-3 text-sm"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn-emerald w-full rounded-xl px-4 py-3 text-sm"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="text-center text-white/35 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
