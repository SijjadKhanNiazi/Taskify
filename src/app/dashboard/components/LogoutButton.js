"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="btn-ghost-danger rounded-xl px-4 py-2 text-sm cursor-pointer"
    >
      Sign Out
    </button>
  );
}
