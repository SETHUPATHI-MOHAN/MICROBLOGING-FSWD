
import React from 'react';

interface PostInputProps {
  content: string;
  setContent: (content: string) => void;
  onSubmit: () => void;
  maxChars: number;
}

export const PostInput: React.FC<PostInputProps> = ({ content, setContent, onSubmit, maxChars }) => {
  const charsLeft = maxChars - content.length;
  const isPostDisabled = content.trim().length === 0 || charsLeft < 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-8 transition-shadow hover:shadow-xl">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 resize-none"
          rows={4}
        />
        <div className="flex justify-between items-center mt-3">
          <p className={`text-sm ${charsLeft < 0 ? 'text-red-500' : 'text-slate-500'}`}>
            {charsLeft} / {maxChars}
          </p>
          <button
            type="submit"
            disabled={isPostDisabled}
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
