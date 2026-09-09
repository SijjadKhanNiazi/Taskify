import React from "react";

const dashboardLayout = ({ children }) => {
  return (
    <div className="p-5 bg-white grid grid-cols-12">
      <aside className=" text-2xl text-black font-bold flex items-center col-span-3">
        {" "}
        Sidebar
      </aside>
      <main className="flex items-center cols-span-9">{children}</main>
    </div>
  );
};

export default dashboardLayout;
