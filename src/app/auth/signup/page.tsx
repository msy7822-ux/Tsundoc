import { SignupComponent } from "../../_components/auth/signup";

export default function Signup() {
  return (
    <div className="border shadow-md rounded-md p-4 max-w-[600px] w-full mx-auto">
      <div className="flex flex-col gap-5">
        <SignupComponent></SignupComponent>
      </div>
    </div>
  );
}
