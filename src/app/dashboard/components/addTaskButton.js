"use client";
import { useState } from "react";

const FormButton = ({ username, email, role }) => {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    setDisplay((prev) => !prev);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(title, description);
    setTitle("");
    setDescription("");
    setDisplay(false);
  };

  return (
    <div className="space-y-5">
      {/* User info + Add Task button */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-base font-semibold text-white">
            Hi,{" "}
            <span className="text-amber-400">{username}</span>
          </h2>
          <p className="text-xs text-white/40 mt-0.5">{email}</p>
        </div>
        <button
          onClick={handleSubmit}
          className={`btn-amber rounded-xl px-5 py-2.5 text-sm ${
            display ? "opacity-70" : ""
          }`}
        >
          {display ? "✕ Close" : "+ Add Task"}
        </button>
      </div>

      {/* Collapsible task form */}
      {display && (
        <form
          onSubmit={handleForm}
          className="glass rounded-2xl p-5 space-y-4 border border-white/10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            New Task
          </p>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-white/50">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title..."
              className="glass-input w-full rounded-xl px-4 py-2.5 text-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-white/50">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly describe the task..."
              className="glass-input w-full rounded-xl px-4 py-2.5 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-emerald w-full rounded-xl px-4 py-2.5 text-sm"
          >
            Save Task
          </button>
        </form>
      )}

      {/* Empty state */}
      {!display && (
        <div className="text-center py-10 text-white/20">
          <svg className="w-10 h-10 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="text-sm">No tasks yet. Click <span className="text-amber-500/70">+ Add Task</span> to get started.</p>
        </div>
      )}
    </div>
  );
};

export default FormButton;
