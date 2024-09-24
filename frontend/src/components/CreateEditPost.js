import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CreateEditPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [summary, setSummary] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            setIsEditMode(true);
            axios.get(`http://localhost:5000/posts/${id}`)
                .then(response => {
                    setTitle(response.data.title);
                    setContent(response.data.content);
                    setSummary(response.data.summary);
                })
                .catch(error => console.error('Error fetching the post:', error));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = { title, content, summary };

        if (isEditMode) {
            axios.put(`http://localhost:5000/posts/${id}`, postData)
                .then(() => {
                    console.log('Post updated successfully');
                    navigate(`/posts/${id}`);
                })
                .catch(error => console.error('Error updating the post:', error));
        } else {
            axios.post('http://localhost:5000/posts', postData)
                .then(response => {
                    console.log('Post created successfully');
                    navigate(`/posts/${response.data._id}`);
                })
                .catch(error => console.error('Error creating the post:', error));
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold">{isEditMode ? 'Edit Post' : 'Create New Post'}</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Summary</label>
                    <textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 my-7 px-4 rounded">
                    {isEditMode ? 'Update Post' : 'Create Post'}
                </button>
            </form>
        </div>
    );
};

export default CreateEditPost;
