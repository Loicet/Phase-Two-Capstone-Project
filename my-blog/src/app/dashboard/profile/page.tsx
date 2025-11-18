'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';

export default function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    bio: 'Passionate about web development and sharing knowledge with the community.',
    website: 'https://alexjohnson.com',
    location: 'San Francisco, CA',
    joinDate: 'March 2024',
    followers: 1245,
    following: 342,
    totalPosts: 12,
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-8 py-12 border-b border-border">
        <Link href="/dashboard">
          <button className="text-primary hover:text-primary/80 mb-4 font-medium">← Back</button>
        </Link>
        <h1 className="text-4xl font-black text-foreground">Profile</h1>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12">
        {/* Profile Header */}
        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-black text-white">
                AJ
              </div>
              <div>
                <h2 className="text-3xl font-black text-foreground mb-1">{profile.name}</h2>
                <p className="text-muted-foreground mb-4">{profile.location}</p>
                <p className="text-foreground text-sm mb-4 max-w-md">{profile.bio}</p>
                {profile.website && (
                  <a href={profile.website} className="text-primary hover:text-primary/80 text-sm font-medium underline">
                    {profile.website}
                  </a>
                )}
              </div>
            </div>
            <Button onClick={() => setEditMode(!editMode)} className="bg-primary hover:bg-primary/90">
              {editMode ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-black text-primary">{profile.followers}</p>
              <p className="text-sm text-muted-foreground mt-2">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-primary">{profile.following}</p>
              <p className="text-sm text-muted-foreground mt-2">Following</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-primary">{profile.totalPosts}</p>
              <p className="text-sm text-muted-foreground mt-2">Posts</p>
            </div>
          </div>
        </div>

        {/* Edit Form - shown when editMode is true */}
        {editMode && (
          <div className="space-y-6 mb-12">
            <div>
              <label className="block text-sm font-semibold text-secondary mb-2">Full Name</label>
              <input type="text" defaultValue={profile.name} className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-secondary mb-2">Bio</label>
              <textarea rows={4} defaultValue={profile.bio} className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-secondary mb-2">Website</label>
              <input type="url" defaultValue={profile.website} className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-secondary mb-2">Location</label>
              <input type="text" defaultValue={profile.location} className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="flex gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 flex-1">Save Changes</Button>
              <Button variant="outline" onClick={() => setEditMode(false)} className="flex-1 border-secondary text-secondary hover:bg-secondary/10">
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Member Since */}
        <div className="bg-background border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Member since</p>
          <p className="text-lg font-semibold text-foreground mt-2">{profile.joinDate}</p>
        </div>
      </div>
    </div>
  );
}
