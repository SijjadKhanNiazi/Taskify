"use client";
import { toggleTask } from "@/actions/task";

export default function TaskItem({ task }) {
  const handleToggle = async () => {
    try {
      await toggleTask(task._id);
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  return (
    <div className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
      <div className="space-y-1 pr-4">
        <h3
          className={`font-semibold ${
            task.completed ? "line-through text-white/40" : "text-white"
          }`}
        >
          {task.title}
        </h3>

        <p className="text-sm text-white/60">{task.description}</p>
      </div>

      <button
        onClick={handleToggle}
        className={`text-xs px-3 py-1.5 rounded-full font-medium ${
          task.completed
            ? "bg-emerald-500/20 text-emerald-300"
            : "bg-amber-500/20 text-amber-300"
        }`}
      >
        {task.completed ? "Completed" : "Pending"}
      </button>
    </div>
  );
}
