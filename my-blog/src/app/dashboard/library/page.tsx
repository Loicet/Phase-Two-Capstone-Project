'use client';

import BlogPostCard from '../../components/BlogPostCard';
import Link from 'next/link';
import { useState } from 'react';

const savedPosts = [
  {
    id: '1',
    title: 'Advanced React Patterns for 2024',
    excerpt: 'Explore advanced patterns and techniques to level up your React development skills.',
    date: 'Nov 20, 2024',
    readTime: '15 min',
    author: 'Sarah Chen',
    category: 'React',
  },
  {
    id: '2',
    title: 'The Future of Web Design',
    excerpt: 'A deep dive into emerging trends and technologies shaping the future of web design.',
    date: 'Nov 18, 2024',
    readTime: '10 min',
    author: 'Marcus Lee',
    category: 'Design',
  },
  {
    id: '3',
    title: 'Building Scalable APIs',
    excerpt: 'Best practices and patterns for building APIs that scale with your growing user base.',
    date: 'Nov 16, 2024',
    readTime: '12 min',
    author: 'Jordan Smith',
    category: 'Backend',
  },
];

export default function LibraryPage() {
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['All', 'React', 'Design', 'Backend', 'Performance'];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-8 py-12 border-b border-border">
        <Link href="/dashboard">
          <button className="text-primary hover:text-primary/80 mb-4 font-medium">← Back</button>
        </Link>
        <h1 className="text-4xl font-black text-foreground">Library</h1>
        <p className="text-muted-foreground mt-2">Your saved and bookmarked stories</p>
      </div>

      <div className="px-8 py-8">
        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat.toLowerCase())}
              className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                filterCategory === cat.toLowerCase()
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-foreground hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="space-y-4">
          {savedPosts.length > 0 ? (
            savedPosts.map((post) => (
              <BlogPostCard key={post.id} {...post} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No saved posts yet</p>
              <p className="text-sm text-muted-foreground mt-2">Bookmark stories to read them later</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
