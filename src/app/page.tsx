"use client";

import {OrganizationSwitcher, UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <div
        className="flex flex-col items-center justify-center min-h-screen gap-4 bg-background"
    >
        <h1 className="text-2xl font-semibold">Welcome to Voice Generation</h1>
        <div className="flex items-center gap-4">
          <OrganizationSwitcher />
          <UserButton />
        </div>
    </div>
  );
}

