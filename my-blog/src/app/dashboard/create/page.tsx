'use client';

import DashboardHeader from '../../components/dashboardHeader';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';
import Link from 'next/link';

export default function CreatePostPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: 'General',
    excerpt: '',
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to save post
    console.log('Post data:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userName="Alex" />

      <div className="px-8 py-8">
        <div className="max-w-3xl">
          <div className="mb-8">
            <Link href="/dashboard">
              <button className="text-primary hover:text-primary/80 mb-4 font-medium">← Back</button>
            </Link>
            <h3 className="text-2xl font-bold text-primary">Create New Post</h3>
            <p className="text-muted-foreground text-sm mt-1">Share your thoughts with the world</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-secondary font-semibold mb-2">
                Post Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter an engaging title..."
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-secondary font-semibold mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="General">General</option>
                <option value="Technology">Technology</option>
                <option value="Writing">Writing</option>
                <option value="Performance">Performance</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
              </select>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-secondary font-semibold mb-2">
                Excerpt
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Brief summary of your post (shown in listings)..."
                rows={3}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-secondary font-semibold mb-2">
                Content
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your full post content here..."
                rows={12}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
                Publish Post
              </Button>
              <Link href="/dashboard" className="flex-1">
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
