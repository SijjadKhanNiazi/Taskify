import FormButton from "./components/addTaskButton";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LogoutButton from "./components/LogoutButton";
import Task from "@/models/Task";
import ConnectDb from "@/lib/connDb";

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }
  const role = session.user.role;
  await ConnectDb();

  const tasks = await Task.find({ user: session.user.id })
    .sort({ createdAt: -1 })
    .lean();

  // Completed tasks count calculate karne ke liye
  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="p-6 sm:p-10 max-w-5xl mx-auto">
      {/* Header row */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Dashboard
          </h1>
          <p className="text-white/40 text-sm mt-0.5">
            Welcome back, {session.user.name || "User"}
          </p>
        </div>
        <LogoutButton />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="glass-card rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
            Total Tasks
          </p>
          <p className="text-3xl font-bold text-white">{tasks.length}</p>
          <p className="text-xs text-white/30 mt-1">
            {tasks.length === 0 ? "No tasks yet" : "Active & listed"}
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
            Completed
          </p>
          <p className="text-3xl font-bold text-emerald-400">
            {completedCount}
          </p>
          <p className="text-xs text-white/30 mt-1">Keep it up!</p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
            Role
          </p>
          <p className="text-xl font-bold text-amber-400 capitalize">
            {role || "User"}
          </p>
          <p className="text-xs text-white/30 mt-1">{session.user.email}</p>
        </div>
      </div>

      {/* Task manager card (Add Task) */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 mb-8 max-w-2xl">
        <FormButton
          username={session.user.name || "User"}
          email={session.user.email || "user@example.com"}
          role={role}
        />
      </div>

      {/* My Tasks Section */}
      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white tracking-tight">
            My Tasks
          </h2>
          <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full font-medium">
            {tasks.length} {tasks.length === 1 ? "Task" : "Tasks"}
          </span>
        </div>

        {tasks.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-white/10 rounded-xl">
            <p className="text-white/40 text-sm">
              No tasks found. Create your first task above!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task._id.toString()}
                className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="space-y-1 pr-4">
                  <h3
                    className={`font-semibold text-white ${task.completed ? "line-through text-white/40" : ""}`}
                  >
                    {task.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {task.description}
                  </p>
                </div>
                <div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap ${
                      task.completed
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    {task.completed ? "Completed" : "Pending"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
