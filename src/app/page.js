import { auth } from "@/auth";
import Link from "next/link";
import LogoutButton from "./dashboard/components/LogoutButton";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  return (
    <main className="mesh-bg min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-5xl">
        {/* Navbar */}
        <nav className="flex items-center justify-between mb-16">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Task<span className="text-amber-400">Flow</span>
          </Link>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <span className="text-white">Welcome, {user.name}!</span>
                <div className="flex items-center gap-3 p-8">
                  <Link
                    href="/admin"
                    className="text-white/70 hover:text-white transition"
                  >
                    Admin
                  </Link>
                  <LogoutButton />
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm text-white/70 hover:text-white transition"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="btn-amber rounded-xl px-5 py-2.5 text-sm"
                >
                  Lets Get Started
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Hero */}
        <section className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-7">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-white/60">
              Simple. Focused. Productive.
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Get things done with{" "}
            <span className="text-amber-400">TaskFlow.</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-8 text-white/45">
            Organize your tasks, stay focused, and keep your work moving
            forward. A simple task management experience built for productivity.
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center gap-4 mt-9 flex-wrap">
            {user ? (
              <Link
                href="/dashboard"
                className="btn-amber rounded-xl px-7 py-3 text-sm"
              >
                Start Managing Tasks →
              </Link>
            ) : (
              <Link
                href="/login"
                className="glass rounded-xl px-7 py-3 text-sm text-white/70 hover:text-white transition"
              >
                Sign In
              </Link>
            )}
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
          <div className="glass-card rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center mb-5">
              <span className="text-xl">✓</span>
            </div>

            <h3 className="font-semibold text-white">Stay Organized</h3>

            <p className="text-sm text-white/40 leading-6 mt-2">
              Keep your tasks organized and easily track what needs to be done.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-5">
              <span className="text-xl">⚡</span>
            </div>

            <h3 className="font-semibold text-white">Move Faster</h3>

            <p className="text-sm text-white/40 leading-6 mt-2">
              Focus on important work without getting lost in complicated
              workflows.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center mb-5">
              <span className="text-xl">🔒</span>
            </div>

            <h3 className="font-semibold text-white">Secure Access</h3>

            <p className="text-sm text-white/40 leading-6 mt-2">
              Your tasks belong to you with authenticated and role-based access.
            </p>
          </div>
        </section>

        {/* Bottom text */}
        <p className="text-center text-xs text-white/20 mt-14">
          Built with Next.js · MongoDB · Auth.js
        </p>
      </div>
    </main>
  );
}
