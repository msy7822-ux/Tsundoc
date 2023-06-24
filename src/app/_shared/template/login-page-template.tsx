import { getSessionForServerComp } from "@/lib/auth/server/session";
import { cookies } from "next/headers";
import { GitHubLoginComponent } from "../components/features/auth/github-login";
import { GoogleLoginComponent } from "../components/features/auth/google-login";

export async function LoginPageTemplate() {
  console.log("cookies", cookies);
  const session = await getSessionForServerComp(cookies);
  console.log("login page session", session);

  return (
    <>
      <div className="flex items-center gap-15">
        <GitHubLoginComponent></GitHubLoginComponent>
        <GoogleLoginComponent></GoogleLoginComponent>
        <div></div>
      </div>
    </>
  );
}
