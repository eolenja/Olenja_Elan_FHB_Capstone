import React, { useEffect, useState } from 'react';
import localInstance from '../api/localInstance';
import { useParams } from 'react-router-dom';

function BlogDetail() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(true); // Added loading state
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await localInstance.get(`/api/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                setError('Failed to load blog post.'); // Improved error handling
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        fetchBlog();
    }, [id]);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        await localInstance.post(`/api/blogs/${id}/comments`, { content: comment, author: 'Anonymous' });
        setComment('');
        // Optionally, refresh the blog details to show the new comment
    };

    if (loading) return <div>Loading...</div>; // Show loading state
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <h2>Comments</h2>
            <ul>
                {blog.comments.map((c) => (
                    <li key={c.id}>{c.author}: {c.content}</li>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}

export default BlogDetail;
