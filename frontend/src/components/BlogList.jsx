import React, { useEffect, useState } from 'react';
import localInstance from '../api/localInstance';
import { Link } from 'react-router-dom';

function BlogList() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await localInstance.get('/api/blogs');
            setBlogs(response.data);
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            {blogs.map(blog => (
                <div key={blog.id}>
                    <h2><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></h2>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
