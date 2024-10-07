import React, { useState, useEffect } from 'react';

const reviews = [
  {
    id: 1,
    text: "Best bakery in town! The pastries are always fresh.",
    author: "Jane Doe",
  },
  {
    id: 2,
    text: "I love the chocolate cake! It's my favorite treat.",
    author: "John Smith",
  },
  {
    id: 3,
    text: "Great service and delicious bread. Highly recommend!",
    author: "Emily Johnson",
  },
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextReview, 5000); // Change every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-brown-400 p-5 rounded-lg shadow-lg mx-auto my-6 max-w-xl overflow-hidden">
      <h2 className="text-center text-brown-600 text-2xl font-semibold mb-5">User Reviews</h2>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {reviews.map((review) => (
          <div className="min-w-full p-5 bg-brown-600 text-red-50 rounded-lg shadow-md" key={review.id}>
            <p className="italic mb-2">"{review.text}"</p>
            <p className="text-right font-bold">- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
