"use client";

import { UserProfile } from "@clerk/nextjs";
import { useLayoutEffect, useState } from "react";
import { LogoutButtonComponent } from "../auth/logout";

type UserProfile = {
  emailAddress: string;
  phoneNumber?: string;
};

type Props = {
  profile: UserProfile;
};

export function ClerkProfileDetail({ profile }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // クリーンアップ関数でタイマーをクリアします
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) return <div>Loading........</div>;

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <UserProfile
          appearance={{
            variables: {
              colorPrimary: "gray",
              colorText: "#312e2e",
            },
          }}
        />

        <div className="max-w-[808px] w-full flex flex-col gap-8">
          <div>
            <h1 className="text-[1.5rem] font-bold text-[#4157D0] tracking-wide">
              Profile
            </h1>
            <p className="text-[#2f2d2da6]">Manage your Profile Information</p>
          </div>

          <div>
            <p className="text-[#2f2d2d] border-b border-[#0000000f] mb-3">
              Email Address
            </p>
            <p className=" ml-3">{profile.emailAddress}</p>
          </div>

          <div>
            <p className="text-[#2f2d2d] border-b border-[#0000000f] mb-3">
              Phone Number
            </p>
            <p className=" ml-3">{profile.phoneNumber || "(none)"}</p>
          </div>
        </div>

        <div>
          <LogoutButtonComponent />
        </div>
      </div>
    </div>
  );
}
