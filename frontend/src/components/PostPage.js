import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../api';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const { data } = await fetchPost(id);
      setPost(data);
    };
    getPost();
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    window.location.href = '/';
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <div className="flex gap-4">
        <Link to={`/edit/${post._id}`} className="text-blue-500">Edit</Link>
        <button onClick={handleDelete} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default PostPage;
