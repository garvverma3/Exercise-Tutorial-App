
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold text-[#9b87f5] mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="space-x-4">
          <Link 
            to="/" 
            className="bg-[#9b87f5] text-white px-6 py-2 rounded-md hover:bg-[#8a77e0] transition-colors"
          >
            Go Home
          </Link>
          <Link 
            to="/workouts" 
            className="border border-[#9b87f5] text-[#9b87f5] px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            Browse Workouts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
