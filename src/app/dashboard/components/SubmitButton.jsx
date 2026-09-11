"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="btn-emerald w-full rounded-xl px-4 py-2.5 text-sm disabled:opacity-50"
    >
      {pending ? "saving..." : "save task"}
    </button>
  );
}
