'use client';

import Link from 'next/link';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

interface Suggestion {
  id: string;
  name: string;
  bio: string;
  followers: number;
  avatar: string;
}

const suggestions: Suggestion[] = [
  { id: '1', name: 'Emily Rodriguez', bio: 'Data science and machine learning enthusiast', followers: 8234, avatar: 'ER' },
  { id: '2', name: 'David Zhang', bio: 'Mobile development and cross-platform apps', followers: 5120, avatar: 'DZ' },
  { id: '3', name: 'Lisa Anderson', bio: 'UX/UI design and accessibility advocate', followers: 6890, avatar: 'LA' },
  { id: '4', name: 'James Wilson', bio: 'Cloud architecture and DevOps expert', followers: 4560, avatar: 'JW' },
];

export default function DiscoverPage() {
  const [suggestedWriters, setSuggestedWriters] = useState(suggestions);

  const handleFollow = (id: string) => {
    setSuggestedWriters(suggestedWriters.filter((w) => w.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-8 py-12 border-b border-border">
        <Link href="/dashboard">
          <button className="text-primary hover:text-primary/80 mb-4 font-medium">← Back</button>
        </Link>
        <h1 className="text-4xl font-black text-foreground">Discover</h1>
        <p className="text-muted-foreground mt-2">Find new writers and publications to follow</p>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-12">
        {suggestedWriters.length > 0 ? (
          <div className="space-y-4">
            {suggestedWriters.map((writer) => (
              <div
                key={writer.id}
                className="flex items-center justify-between p-6 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg font-black text-white flex-shrink-0">
                    {writer.avatar}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-foreground">{writer.name}</h3>
                    <p className="text-sm text-foreground/70 mt-1">{writer.bio}</p>
                    <p className="text-xs text-muted-foreground mt-2">{writer.followers.toLocaleString()} followers</p>
                  </div>
                </div>
                <Button onClick={() => handleFollow(writer.id)} className="bg-primary hover:bg-primary/90 ml-4 flex-shrink-0">
                  Follow
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">You are following all suggested writers!</p>
            <p className="text-sm text-muted-foreground mt-2">Check back soon for more suggestions</p>
          </div>
        )}
      </div>
    </div>
  );
}
