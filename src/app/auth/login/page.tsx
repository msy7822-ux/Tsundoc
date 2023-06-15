import { LoginComponent } from "@/app/_components/auth/login";

export default async function Login() {
  return (
    <div className="mx-auto w-full max-w-[600px] rounded-md border p-4 shadow-md">
      <div className="flex flex-col gap-5">
        <LoginComponent></LoginComponent>
      </div>
    </div>
  );
}
