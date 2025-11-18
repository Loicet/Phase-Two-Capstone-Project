'use client';

import Link from 'next/link';
import { Button } from '../../../components/ui/Button';
import { useState } from 'react';

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(45);

  const post = {
    title: 'Getting Started with Next.js 14',
    author: 'You',
    date: 'Nov 15, 2024',
    readTime: '5 min',
    category: 'Technology',
    content: `Next.js 14 introduces several powerful new features that make building modern web applications easier than ever...

This comprehensive guide will walk you through the fundamentals and help you get started with your first Next.js project.

With features like App Router, Server Components, and built-in optimizations, Next.js 14 is the perfect choice for building scalable applications.`,
    views: 4230,
    comments: 87,
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-8 py-8 border-b border-border">
        <Link href="/dashboard/posts">
          <button className="text-primary hover:text-primary/80 mb-4 font-medium">← Back to Posts</button>
        </Link>
      </div>

      <article className="max-w-2xl mx-auto px-8 py-12">
        {/* Post Title and Meta */}
        <div className="mb-8">
          <span className="inline-flex items-center px-4 py-1 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full border border-primary/20 mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 pb-6 border-b border-border">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-black text-white">
              Y
            </div>
            <div>
              <p className="font-semibold text-foreground">{post.author}</p>
              <p className="text-sm text-muted-foreground">{post.date} · {post.readTime} read</p>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-wrap">{post.content}</p>
        </div>

        {/* Engagement Bar */}
        <div className="flex items-center justify-between py-6 border-t border-b border-border">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>{post.views.toLocaleString()} views</span>
            <span>{post.comments} comments</span>
          </div>
          <div className="flex gap-3">
            <Button onClick={handleLike} className={`${isLiked ? 'bg-primary text-primary-foreground' : 'border border-border text-foreground hover:bg-muted'}`}>
              {isLiked ? '' : ''} {likeCount}
            </Button>
            <Button variant="outline" className="border-border text-foreground hover:bg-muted">
              Share
            </Button>
          </div>
        </div>

        {/* Edit/Delete Actions */}
        <div className="flex gap-4 mt-8">
          <Link href={`/dashboard/posts/${params.id}/edit`} className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90">Edit Post</Button>
          </Link>
          <Button variant="outline" className="flex-1 border-destructive text-destructive hover:bg-destructive/10">
            Delete Post
          </Button>
        </div>
      </article>
    </div>
  );
}
