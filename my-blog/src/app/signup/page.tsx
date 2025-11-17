import { AuthLayout } from "../components/AuthLayout";
import { SignupForm } from "../components/SignupForm";

export const metadata = {
  title: 'Sign Up | Blog Platform',
  description: 'Create a new blogging account',
};

export default function SignupPage() {
  return (
    <AuthLayout title="Join us" subtitle="Create your blogging account">
      <SignupForm />
    </AuthLayout>
  );
}
