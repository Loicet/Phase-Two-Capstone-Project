'use client';

import Link from 'next/link';
import { Button } from '../../../../components/ui/Button';
import { useState } from 'react';

export default function EditPostPage({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    title: 'Getting Started with Next.js 14',
    category: 'Technology',
    excerpt: 'Learn the fundamentals of Next.js 14 and how to build scalable web applications with modern React patterns.',
    content: 'Next.js 14 introduces several powerful new features...',
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
    console.log('Updated post:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-8 py-8 border-b border-border">
        <Link href={`/dashboard/posts/${params.id}`}>
          <button className="text-primary hover:text-primary/80 mb-4 font-medium">← Back to Post</button>
        </Link>
        <h1 className="text-3xl font-black text-foreground">Edit Post</h1>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12">
        <form onSubmit={handleSubmit} className="bg-background border border-border rounded-lg p-8 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-secondary font-semibold mb-2">Post Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-secondary font-semibold mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Technology">Technology</option>
              <option value="Writing">Writing</option>
              <option value="Design">Design</option>
            </select>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-secondary font-semibold mb-2">Excerpt</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-secondary font-semibold mb-2">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={12}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              required
            />
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6">
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
              Save Changes
            </Button>
            <Link href={`/dashboard/posts/${params.id}`} className="flex-1">
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
