import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
    // Static bakery blog posts data
    const blogs = [
        { id: 1, title: 'The Art of Baking Bread', content: 'Baking bread is both an art and a science. It requires precision, patience, and a love for the craft...' },
        { id: 2, title: 'Pastry Perfection: Tips and Tricks', content: 'Creating the perfect pastry involves understanding the balance of ingredients and mastering techniques...' },
        { id: 3, title: 'Cake Decorating 101', content: 'Decorating cakes can be a fun and rewarding experience. Here are some tips to get you started...' }
    ];

    // State to manage comments
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (blogId) => {
        if (newComment.trim()) {
            setComments(prevComments => ({
                ...prevComments,
                [blogId]: [...(prevComments[blogId] || []), newComment]
            }));
            setNewComment('');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Bakery Blog Posts</h1>
            {blogs.map(blog => (
                <div key={blog.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
                    <h2 style={{ color: '#333' }}>
                        <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none', color: '#007BFF' }}>{blog.title}</Link>
                    </h2>
                    <p style={{ color: '#555' }}>{blog.content}</p>
                    
                    {/* Comment Section */}
                    <div style={{ marginTop: '15px' }}>
                        <h3>Comments</h3>
                        <ul>
                            {(comments[blog.id] || []).map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))}
                        </ul>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleCommentSubmit(blog.id);
                        }}>
                            <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Add a comment..." style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc' }} />
                            <button type="submit" style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px' }}>Submit</button>
                        </form>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
