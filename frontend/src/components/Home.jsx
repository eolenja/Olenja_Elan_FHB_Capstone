import React from 'react';
import ReviewCarousel from './ReviewCarousel';

const products = [
  { id: 1, name: 'Chocolate Cake', image: 'src/Images/chocolateCake.JPG' },
  { id: 2, name: 'Croissant', image: 'src/Images/croissant.jpg' },
  { id: 3, name: 'Blueberry Muffin', image: '/src/images/bakery-style-blueberry-muffins-featured-2.jpg' },
];

const blogPosts = [
  { id: 1, title: 'The Secrets of Baking Perfect Bread', slug: '/blog/perfect-bread' },
  { id: 2, title: '10 Must-Try Pastry Recipes', slug: '/blog/pastry-recipes' },
  { id: 3, title: 'How to Decorate a Cake Like a Pro', slug: '/blog/cake-decoration' },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-4xl font-bold my-8">Welcome to Our Bakery!</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div className="border rounded-lg shadow-md p-4" key={product.id}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl text-center mt-2">{product.name}</h3>
              <button className="w-full bg-brown-500 text-white py-2 rounded-lg mt-2">Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      <ReviewCarousel />

      <section className="my-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Latest Blog Posts</h2>
        <div className="flex flex-col items-center">
          {blogPosts.map((post) => (
            <div className="bg-bisque border-burlywood rounded-lg shadow-md w-80 my-2 p-4 hover:bg-gray-200 transition duration-300" key={post.id}>
              <a href={post.slug} className="text-brown-600 font-bold">{post.title}</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
