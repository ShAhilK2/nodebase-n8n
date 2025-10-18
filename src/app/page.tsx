// "use client";

import { dehydrate, hydrate, HydrationBoundary } from "@tanstack/react-query";
import Client from "./client";
import { getQueryClient, trpc } from "@/trpc/server";
import { Suspense } from "react";

const Page = async () => {
  // Server Method
  // const users = await caller.getUsers();

  // Client Method

  // const trpc = useTRPC();
  // const { data: users } = useQuery(trpc.getUsers.queryOptions());

  // Method that we using

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<p>loading....</p>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};

export default Page;
