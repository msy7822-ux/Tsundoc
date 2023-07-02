"use client";

import { login } from "@/lib/auth/client/login";
import { FcGoogle } from "react-icons/fc";
import { AuthButton } from "./auth-button";

export function GoogleLoginComponent() {
  const handleOnClick = async () => {
    try {
      await login("google");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AuthButton
        onClick={handleOnClick}
        icon={<FcGoogle size={16} />}
        label="Google"
      />
    </>
  );
}
