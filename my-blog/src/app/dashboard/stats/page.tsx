'use client';

import Link from 'next/link';
import StatCard from '@/components/StatCard';

const statsData = [
  { label: 'Total Posts', value: '12', icon: '', color: 'primary' as const },
  { label: 'Total Views', value: '15,234', icon: '', color: 'secondary' as const },
  { label: 'Total Likes', value: '1,847', icon: '', color: 'accent' as const },
  { label: 'Avg Read Time', value: '4.2 min', icon: '⏱', color: 'primary' as const },
  { label: 'Comments', value: '342', icon: '', color: 'secondary' as const },
  { label: 'Shares', value: '528', icon: '↗', color: 'accent' as const },
];

const topPosts = [
  { title: 'Getting Started with Next.js 14', views: 4230, likes: 432, comments: 87 },
  { title: 'Understanding Web Performance', views: 3120, likes: 312, comments: 54 },
  { title: 'The Art of Writing Engaging Content', views: 2890, likes: 201, comments: 38 },
];

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-8 py-12 border-b border-border">
        <Link href="/dashboard">
          <button className="text-primary hover:text-primary/80 mb-4 font-medium">← Back</button>
        </Link>
        <h1 className="text-4xl font-black text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-2">Track your writing performance and engagement</p>
      </div>

      <div className="px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {statsData.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Top Posts Section */}
        <div>
          <h2 className="text-2xl font-black text-foreground mb-6">Top Performing Posts</h2>
          <div className="space-y-4">
            {topPosts.map((post, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-black text-foreground flex-1">{post.title}</h3>
                  <span className="text-sm font-bold text-secondary">#{idx + 1}</span>
                </div>
                <div className="flex gap-6 text-sm text-muted-foreground">
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">{post.views.toLocaleString()}</p>
                    <p>Views</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">{post.likes.toLocaleString()}</p>
                    <p>Likes</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">{post.comments}</p>
                    <p>Comments</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
