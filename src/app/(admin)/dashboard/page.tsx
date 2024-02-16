"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
  const { data: session, status }: { data: any; status: any } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated" && session === undefined) {
      router.push("/login");
    } else {
      if (session?.user?.role !== "admin" || session === undefined) {
        router.push("/");
      } else {
        router.push("/dashboard");
      }
    }
  }, [router, session, status]);

  return (
    <div className="w-full h-96 bg-gray-300 flex justify-center items-center rounded-[12px]">
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
