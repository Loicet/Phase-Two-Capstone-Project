'use client';

import Link from 'next/link';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

interface Writer {
  id: string;
  name: string;
  bio: string;
  followers: number;
  posts: number;
  avatar: string;
  isFollowing: boolean;
}

const writers: Writer[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    bio: 'React developer and technical writer sharing insights on modern web development.',
    followers: 5420,
    posts: 34,
    avatar: 'SC',
    isFollowing: true,
  },
  {
    id: '2',
    name: 'Marcus Lee',
    bio: 'Product designer obsessed with user experience and design systems.',
    followers: 3890,
    posts: 28,
    avatar: 'ML',
    isFollowing: true,
  },
  {
    id: '3',
    name: 'Jordan Smith',
    bio: 'Full-stack engineer focused on backend scalability and DevOps.',
    followers: 2150,
    posts: 19,
    avatar: 'JS',
    isFollowing: false,
  },
];

export default function FollowingPage() {
  const [followingList, setFollowingList] = useState(writers);

  const toggleFollow = (id: string) => {
    setFollowingList(
      followingList.map((w) =>
        w.id === id ? { ...w, isFollowing: !w.isFollowing } : w
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-8 py-12 border-b border-border">
        <Link href="/dashboard">
          <button className="text-primary hover:text-primary/80 mb-4 font-medium">← Back</button>
        </Link>
        <h1 className="text-4xl font-black text-foreground">Following</h1>
        <p className="text-muted-foreground mt-2">Writers and publications you follow</p>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12">
        <div className="space-y-4">
          {followingList.map((writer) => (
            <div
              key={writer.id}
              className="flex items-start justify-between p-6 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-black text-white flex-shrink-0">
                  {writer.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-black text-foreground">{writer.name}</h3>
                  <p className="text-foreground/70 text-sm mt-1 mb-3">{writer.bio}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{writer.followers.toLocaleString()} followers</span>
                    <span>{writer.posts} posts</span>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => toggleFollow(writer.id)}
                className={`ml-4 flex-shrink-0 ${
                  writer.isFollowing
                    ? 'bg-secondary/10 text-secondary border border-secondary hover:bg-secondary/20'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                {writer.isFollowing ? 'Following' : 'Follow'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
