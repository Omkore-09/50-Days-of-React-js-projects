import React, { useState, useEffect } from "react";
import { getAll } from "@divyanshu013/inspirational-quotes";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const quotesData = getAll();
    setQuotes(quotesData);
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  const currentQuote = quotes.length > 0 ? quotes[currentIndex] : null;

  const backgroundColors = ["bg-green-300", "bg-green-200", "bg-yellow-200", "bg-blue-300"];
  const currentBackgroundColor = backgroundColors[currentIndex % backgroundColors.length];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-white ${currentBackgroundColor} p-6`}>
  
      <h1 className="text-2xl font-semibold mb-4">Inspirational Quote Generator</h1>
      {currentQuote && (
        <blockquote className="bg-white bg-opacity-30 text-center p-4 rounded-md shadow-md">
          <p className="text-xl italic">"{currentQuote.quote}"</p>
        </blockquote>
      )}
      {currentQuote && <h2 className="mt-4 text-lg font-medium">{currentQuote.author}</h2>}
      {currentQuote && <h3 className="mt-2 text-sm">{currentQuote.source}</h3>}
      <div className="mt-6 flex space-x-4">
        <button
          onClick={handlePreviousClick}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md"
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md"
        >
          Next
        </button>
        
      </div>
    </div>
  );
}
