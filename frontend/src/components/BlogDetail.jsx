import React from 'react';

function BlogDetail() {
    // Static bakery blog post data
    const blog = {
        title: 'The Art of Baking Bread',
        content: 'Baking bread is both an art and a science. It requires precision, patience, and a love for the craft...',
        comments: [
            { id: 1, author: 'Alice', content: 'Great insights on bread baking!' },
            { id: 2, author: 'Bob', content: 'I love the tips on sourdough.' }
        ]
    };

    const [comment, setComment] = React.useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        // Since this is a static page, we won't actually submit the comment
        console.log('Comment submitted:', comment);
        setComment('');
    };

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
