import { AuthLayout } from '../components/AuthLayout';
import { LoginForm } from "../components/LoginForm"

export const metadata = {
  title: 'Login | Blog Platform',
  description: 'Log in to your blogging account',
};

export default function LoginPage() {
  return (
    <AuthLayout title="Welcome back" subtitle="Log in to your account">
      <LoginForm />
    </AuthLayout>
  );
}
