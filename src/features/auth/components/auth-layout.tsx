import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted  flex  flex-col gap-6 p-6 md:p-10 justify-center items-center min-h-svh">
      <div className="flex flex-col max-w-sm w-full gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image src="/logos/logo.svg" alt="Logo" width={150} height={150} />
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
