"use client";

import { SignIn } from "@clerk/nextjs";

export function LoginComponent() {
  return (
    <div className="w-full flex justify-center">
      <SignIn />
    </div>
  );
}
