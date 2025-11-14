
import React, { useState } from 'react';
import { Post } from './types';
import { Header } from './components/Header';
import { PostInput } from './components/PostInput';
import { PostList } from './components/PostList';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostContent, setNewPostContent] = useState<string>('');
  const MAX_CHARS = 280;

  const handlePostSubmit = () => {
    if (newPostContent.trim() && newPostContent.length <= MAX_CHARS) {
      const newPost: Post = {
        id: Date.now(),
        content: newPostContent,
        timestamp: new Date(),
      };
      setPosts([newPost, ...posts]);
      setNewPostContent('');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <main className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <Header />
        <PostInput
          content={newPostContent}
          setContent={setNewPostContent}
          onSubmit={handlePostSubmit}
          maxChars={MAX_CHARS}
        />
        <PostList posts={posts} />
      </main>
    </div>
  );
};

export default App;
