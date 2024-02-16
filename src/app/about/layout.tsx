import React from "react";
export default function LayoutAbout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed right-0 top-15 z-10 h-[100vh] w-60 bg-gray-800">
        <ul className="text-white p-5">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </div>

      <div>{children}</div>
    </>
  );
}
