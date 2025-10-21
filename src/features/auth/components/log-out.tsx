"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
const LogOutButton = () => {
  return (
    <div>
      <Button
        onClick={() => authClient.signOut().then(() => redirect("/login"))}
      >
        Logout
      </Button>
    </div>
  );
};

export default LogOutButton;
