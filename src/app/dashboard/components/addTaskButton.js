"use client";

import { createTask } from "@/actions/task";
import { useState } from "react";
import SubmitButton from "./SubmitButton";

const FormButton = ({ username, email }) => {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    setDisplay((prev) => !prev);
  };

  const handleFormSubmit = async (formData) => {
    await createTask(formData);

    setTitle("");
    setDescription("");
    setDisplay(false);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-base font-semibold text-white">
            Hi, <span className="text-amber-400">{username}</span>
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

      {display && (
        <form
          action={async (formData) => {
            await handleFormSubmit(formData);
          }}
          className="glass rounded-2xl p-5 space-y-4 border border-white/10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            New Task
          </p>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-white/50">Title</label>

            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title..."
              className="glass-input w-full rounded-xl px-4 py-2.5 text-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-white/50">
              Description
            </label>

            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Briefly describe the task..."
              className="glass-input w-full rounded-xl px-4 py-2.5 text-sm"
              required
            />
          </div>

          <SubmitButton />
        </form>
      )}

      {!display && (
        <div className="text-center py-10 text-white/20">
          <p className="text-sm">
            No tasks yet. Click{" "}
            <span className="text-amber-500/70">+ Add Task</span> to get
            started.
          </p>
        </div>
      )}
    </div>
  );
};

export default FormButton;
