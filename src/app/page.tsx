import LogOutButton from "@/features/auth/components/log-out";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const Page = async () => {
  await requireAuth();

  const users = await caller.getUsers();
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center flex-col gap-6">
      protected server component
      <div>{JSON.stringify(users)}</div>
      <LogOutButton />
    </div>
  );
};

export default Page;
