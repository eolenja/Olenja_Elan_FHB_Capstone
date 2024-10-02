import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Baking',
    date: 'September 1, 2024',
    excerpt: 'Explore the intricate techniques behind perfecting baked goods and the joy they bring to our lives.',
    image: 'https://via.placeholder.com/600x400', // Replace with an actual image URL
  },
  {
    id: 2,
    title: 'Healthy Baking Alternatives',
    date: 'September 10, 2024',
    excerpt: 'Learn about healthier alternatives for baking, including gluten-free and sugar-free options.',
    image: 'https://via.placeholder.com/600x400', // Replace with an actual image URL
  },
  {
    id: 3,
    title: 'Baking Tips for Beginners',
    date: 'September 15, 2024',
    excerpt: 'A comprehensive guide to get started in the world of baking, with tips for success.',
    image: 'https://via.placeholder.com/600x400', // Replace with an actual image URL
  },
];

const Blog = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-4xl font-bold text-center mb-6">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <div key={post.id} className="border rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">{post.date}</p>
              <p className="mt-2">{post.excerpt}</p>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
