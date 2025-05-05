
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Body,<br />
              <span className="text-[#9b87f5]">Master Your Fitness</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Access expert-led workout tutorials and transform your fitness journey today.
              Start with beginner-friendly exercises or challenge yourself with advanced routines.
            </p>
            <Link
              to="/workouts"
              className="inline-block bg-[#9b87f5] text-white px-8 py-3 rounded-lg hover:bg-[#7e69ab] transition-colors duration-300"
            >
              Explore Workouts
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-[#9b87f5] mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Training</h3>
            <p className="text-gray-600">
              Choose from different difficulty levels and focus areas that match your fitness goals.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-[#9b87f5] mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Access Anywhere</h3>
            <p className="text-gray-600">
              Stream workout videos on any device, anytime. Your fitness journey never stops.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-[#9b87f5] mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">
              Learn from certified trainers with detailed instructions for each exercise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
