import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bestSellers = [
  {
    id: 1,
    name: 'Chocolate Cake',
    image: 'https://via.placeholder.com/200', // Replace with actual image URL
    description: 'Rich and moist chocolate cake with chocolate frosting.',
  },
  {
    id: 2,
    name: 'Croissant',
    image: 'https://via.placeholder.com/200', // Replace with actual image URL
    description: 'Flaky and buttery croissant, perfect for breakfast.',
  },
  {
    id: 3,
    name: 'Banana Bread',
    image: 'https://via.placeholder.com/200', // Replace with actual image URL
    description: 'Homemade banana bread with a hint of cinnamon.',
  },
  {
    id: 4,
    name: 'Apple Pie',
    image: 'https://via.placeholder.com/200', // Replace with actual image URL
    description: 'Classic apple pie with a buttery crust.',
  },
];

const reviews = [
  {
    id: 1,
    name: 'Sarah J.',
    text: 'The chocolate cake was heavenly! Best I’ve ever had.',
  },
  {
    id: 2,
    name: 'Mike R.',
    text: 'The croissants are fresh and flaky—just like in Paris!',
  },
  {
    id: 3,
    name: 'Emily L.',
    text: 'I love the banana bread! It’s moist and delicious.',
  },
  {
    id: 4,
    name: 'Tom B.',
    text: 'The apple pie reminds me of my grandma’s recipe. So good!',
  },
];

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className="p-6 bg-yellow-700">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to For Heavens Bake!</h1>
      <p className="text-lg text-center mb-4">Discover our delicious baked goods!</p>
      
      <h2 className="text-3xl font-semibold text-center mb-4">Best Sellers</h2>
      <div className="max-w-md mx-auto">
        <Slider {...sliderSettings}>
          {bestSellers.map(product => (
            <div key={product.id} className="p-4 border rounded-lg shadow-lg bg-white">
              <img className="w-full h-48 object-cover mb-2 rounded" src={product.image} alt={product.name} />
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Customer Reviews Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-4">Customer Reviews</h2>
        <div className="max-w-md mx-auto">
          <Slider {...sliderSettings}>
            {reviews.map(review => (
              <div key={review.id} className="p-4 border rounded-lg shadow-lg bg-white">
                <p className="text-lg italic">"{review.text}"</p>
                <p className="text-right font-bold mt-2">- {review.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-lg text-gray-700">
          "To bring joy to our community through the art of baking, using only the finest ingredients and traditional techniques, 
          creating delightful experiences with every bite."
        </p>
      </div>
    </div>
  );
};

export default HomePage;
