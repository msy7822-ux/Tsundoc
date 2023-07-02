"use client";

import { login } from "@/lib/auth/client/login";
import { AiOutlineGithub } from "react-icons/ai";
import { AuthButton } from "./auth-button";

export function GitHubLoginComponent() {
  const handleOnClick = async () => {
    try {
      await login("github");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AuthButton
        onClick={handleOnClick}
        icon={<AiOutlineGithub size={16} />}
        label="Github"
      />
    </>
  );
}
