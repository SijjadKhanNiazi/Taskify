import FormButton from "./components/addTaskButton";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LogoutButton from "./components/LogoutButton";

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }
  const role = session.user.role;

  return (
    <div className="p-6 sm:p-10">
      {/* Header row */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard</h1>
          <p className="text-white/40 text-sm mt-0.5">Welcome back, {session.user.name || "User"}</p>
        </div>
        <LogoutButton />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="glass-card rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Total Tasks</p>
          <p className="text-3xl font-bold text-white">0</p>
          <p className="text-xs text-white/30 mt-1">No tasks yet</p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Completed</p>
          <p className="text-3xl font-bold text-emerald-400">0</p>
          <p className="text-xs text-white/30 mt-1">Keep it up!</p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Role</p>
          <p className="text-xl font-bold text-amber-400 capitalize">{role || "User"}</p>
          <p className="text-xs text-white/30 mt-1">{session.user.email}</p>
        </div>
      </div>

      {/* Task manager card */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-2xl">
        <FormButton
          username={session.user.name || "User"}
          email={session.user.email || "user@example.com"}
          role={role}
        />
      </div>
    </div>
  );
}
