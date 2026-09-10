import FormButton from "./components/addTaskButton";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LogoutButton from "./components/LogoutButton";

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6 sm:p-10">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 border-b pb-4">
          Dashboard
        </h1>

        <LogoutButton />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <FormButton
            username={session.user.name || "User"}
            email={session.user.email || "user123@example.com"}
          />
        </div>
      </div>
    </div>
  );
}
