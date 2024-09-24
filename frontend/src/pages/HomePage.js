import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import { fetchPosts } from '../api';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
