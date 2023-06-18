"use client";

import { useLayoutEffect, useState } from "react";
// import { LogoutButtonComponent } from "../../auth/logout";

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

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) return <div>Loading........</div>;

  return (
    <div>
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full max-w-[808px] flex-col gap-8">
          <div>
            <h1 className="text-[1.5rem] font-bold tracking-wide text-[#4157D0]">
              Profile
            </h1>
            <p className="text-[#2f2d2da6]">Manage your Profile Information</p>
          </div>

          <div>
            <p className="mb-3 border-b border-[#0000000f] text-[#2f2d2d]">
              Email Address
            </p>
            <p className=" ml-3">{profile.emailAddress}</p>
          </div>

          <div>
            <p className="mb-3 border-b border-[#0000000f] text-[#2f2d2d]">
              Phone Number
            </p>
            <p className=" ml-3">{profile.phoneNumber || "(none)"}</p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
