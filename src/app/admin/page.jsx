import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutButton from "../dashboard/components/LogoutButton";

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 bg-[#121214] p-6 hidden md:flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20">
              A
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              Admin Panel
            </span>
          </div>

          <div className="text-xs font-semibold text-zinc-500 tracking-wider mb-3">
            MAIN
          </div>
          <nav className="space-y-1">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-zinc-800/60 text-amber-500 font-medium text-sm transition-all"
            >
              Overview
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 font-medium text-sm transition-colors"
            >
              Users Control
            </Link>
          </nav>
        </div>

        <div className="border-t border-zinc-800/80 pt-4 text-xs text-zinc-500">
          Admin Portal v1.0
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-20 border-b border-zinc-800/80 px-8 flex items-center justify-between bg-[#0a0a0a]/50 backdrop-blur-md">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Admin Dashboard
            </h1>
            <p className="text-xs text-zinc-400 mt-0.5">
              Welcome back, {session.user.name || session.user.email}
            </p>
          </div>

          <LogoutButton />
        </header>

        <div className="p-8 space-y-6 max-w-7xl w-full mx-auto">
          {/* Stats Grid matching Taskify design style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#161618] border border-zinc-800/80 rounded-2xl p-6 shadow-xl">
              <span className="text-xs text-zinc-400 font-medium tracking-wider">
                TOTAL USERS
              </span>
              <div className="text-4xl font-bold mt-2 text-white">1,240</div>
              <div className="text-xs text-zinc-500 mt-2">
                Active platform users
              </div>
            </div>

            <div className="bg-[#161618] border border-zinc-800/80 rounded-2xl p-6 shadow-xl">
              <span className="text-xs text-zinc-400 font-medium tracking-wider">
                SYSTEM LOAD
              </span>
              <div className="text-4xl font-bold mt-2 text-amber-500">12%</div>
              <div className="text-xs text-zinc-500 mt-2">
                Optimal performance
              </div>
            </div>

            <div className="bg-[#161618] border border-zinc-800/80 rounded-2xl p-6 shadow-xl">
              <span className="text-xs text-zinc-400 font-medium tracking-wider">
                ROLE
              </span>
              <div className="text-2xl font-bold mt-2 text-amber-500 capitalize">
                Admin
              </div>
              <div className="text-xs text-zinc-400 mt-2 truncate">
                {session.user.email}
              </div>
            </div>
          </div>

          {/* User Welcome Action Block */}
          <div className="bg-[#161618] border border-zinc-800/80 rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-white">
                Hi, {session.user.name || "Admin"}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">{session.user.email}</p>
            </div>
            <Link
              href="/admin/users"
              className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium text-xs rounded-xl shadow-lg shadow-orange-500/20 transition-all"
            >
              Manage Users
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
