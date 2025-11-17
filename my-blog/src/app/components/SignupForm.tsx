'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

export const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    // TODO: Add your signup API call here
    console.log('Signup attempt:', formData);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Full Name"
        type="text"
        name="name"
        placeholder="John Doe"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="••••••••"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 cursor-pointer accent-primary"
          required
        />
        <label htmlFor="terms" className="text-sm text-muted-foreground">
          I agree to the{' '}
          <Link href="#" className="text-primary hover:underline font-semibold">
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link href="#" className="text-primary hover:underline font-semibold">
            Privacy Policy
          </Link>
        </label>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? 'Creating account...' : 'Sign up'}
      </Button>

      <p className="text-center text-muted-foreground">
        Already have an account?{' '}
        <Link href="/login" className="text-primary font-semibold hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
};
