import { LoginPageTemplate } from "../../_shared/template/login-page-template";
export default function Login() {
  return (
    // @ts-expect-error Server Component
    <LoginPageTemplate></LoginPageTemplate>
  );
}
