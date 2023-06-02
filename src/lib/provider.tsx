import { OAuthStrategy } from "@clerk/nextjs/dist/types/server";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export function convertProvider(provider: OAuthStrategy) {
  return provider.split("oauth_").slice(-1)[0];
}

export function convertProviderIcon(provider: "github" | "google") {
  switch (provider) {
    case "github":
      return <BsGithub />;
    case "google":
      return <FcGoogle />;
  }
}
