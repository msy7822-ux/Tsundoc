import { LoginComponent } from "@/app/_components/template/auth/login";

export default async function Login() {
  return (
    <div className="border shadow-md rounded-md p-4 max-w-[600px] w-full mx-auto">
      <div className="flex flex-col gap-5">
        <LoginComponent></LoginComponent>
      </div>
    </div>
  );
}
