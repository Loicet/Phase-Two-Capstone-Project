'use client';

import DashboardHeader from '@/components/DashboardHeader';
import BlogPostCard from '@/components/BlogPostCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

// Mock data - replace with real data from API
const allPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn the fundamentals of Next.js 14 and how to build scalable web applications with modern React patterns.',
    date: 'Nov 15, 2024',
    readTime: '5 min',
    author: 'You',
    category: 'Technology',
  },
  {
    id: '2',
    title: 'The Art of Writing Engaging Content',
    excerpt: 'Discover techniques to make your blog posts more engaging and keep your readers coming back for more.',
    date: 'Nov 12, 2024',
    readTime: '8 min',
    author: 'You',
    category: 'Writing',
  },
  {
    id: '3',
    title: 'Understanding Web Performance',
    excerpt: 'Deep dive into web performance optimization and how to make your websites faster and more responsive.',
    date: 'Nov 10, 2024',
    readTime: '12 min',
    author: 'You',
    category: 'Performance',
  },
  {
    id: '4',
    title: 'CSS Grid vs Flexbox',
    excerpt: 'A comprehensive comparison between CSS Grid and Flexbox to help you choose the right tool for your layout.',
    date: 'Nov 8, 2024',
    readTime: '10 min',
    author: 'You',
    category: 'CSS',
  },
];

export default function PostsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userName="Alex" />

      <div className="px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary">All Posts</h3>
            <p className="text-muted-foreground text-sm mt-1">Manage and organize your blog posts</p>
          </div>
          <Link href="/dashboard/create">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              + Create New Post
            </Button>
          </Link>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPostCard key={post.id} {...post} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No posts found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
