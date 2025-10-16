import prisma from "@/lib/db";
import React, { use } from "react";

const Page = async () => {
  const user = await prisma.user.findMany();
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      {JSON.stringify(user)}
    </div>
  );
};

export default Page;
