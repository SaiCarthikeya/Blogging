import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold">
        <Link to={`/posts/${post._id}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-700">{post.summary}</p>
      <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default PostItem;
