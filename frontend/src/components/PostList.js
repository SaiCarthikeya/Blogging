
import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
