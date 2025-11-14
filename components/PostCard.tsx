
import React from 'react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(post.timestamp);

  return (
    <div className="bg-white p-5 rounded-xl shadow-md mb-4 border border-slate-100">
      <p className="text-slate-700 mb-3 whitespace-pre-wrap break-words">{post.content}</p>
      <div className="text-right">
        <span className="text-xs text-slate-400">{formattedDate}</span>
      </div>
    </div>
  );
};
