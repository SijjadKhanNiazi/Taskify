"use client";
import { useState } from "react";
const FormButton = ({ username, email }) => {

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
    <div className="min-w-128">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-medium text-gray-700">
          Hi, <span className="text-blue-600 font-semibold">{username}</span>
        </h2>
        <p>email: {email}</p>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl transition shadow-sm"
        >
          {display ? "Close" : "Add task"}
        </button>
      </div>

      <form
        onSubmit={handleForm}
        className={`${
          display ? "block" : "hidden"
        } border border-gray-100 bg-gray-50 rounded-xl p-5 space-y-4`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Add Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Form title"
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Add description:
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Form description"
              className="w-full bg-grey border border-gray-200 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              required
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition shadow-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormButton;
