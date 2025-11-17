import React from 'react';
import Link from 'next/link';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-6 flex justify-between items-center border-b border-muted">
        <Link href="/" className="text-2xl font-bold text-primary">
          Blog
        </Link>
        <nav className="flex gap-6">
          <Link href="/login" className="text-foreground hover:text-primary transition-colors font-medium">
            Login
          </Link>
          <Link href="/signup" className="text-foreground hover:text-primary transition-colors font-medium">
            Sign up
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">{title}</h1>
            {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
          </div>
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-6 text-center text-muted-foreground text-sm border-t border-muted">
        <p>&copy; 2025 Simple Blogging Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};
