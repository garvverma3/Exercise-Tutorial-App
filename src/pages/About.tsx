
const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About FitFlow</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              FitFlow is your personal gateway to fitness excellence. We believe that everyone deserves
              access to high-quality workout guidance, regardless of their experience level or fitness goals.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To make expert fitness guidance accessible to everyone, everywhere. We strive to create
              a supportive environment where individuals can learn, grow, and achieve their fitness goals
              through clear, structured, and effective workout tutorials.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Benefits of Regular Exercise</h2>
            <ul className="list-disc list-outside text-gray-600 ml-6 space-y-3">
              <li>Improved physical strength and endurance</li>
              <li>Enhanced mental clarity and reduced stress</li>
              <li>Better sleep quality</li>
              <li>Increased energy levels throughout the day</li>
              <li>Stronger immune system</li>
              <li>Better posture and reduced risk of injury</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              We focus on providing clear, structured workout tutorials that cater to different fitness
              levels and goals. Our content is created with attention to proper form and technique,
              ensuring safe and effective workouts for all our users.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Start Your Journey Today</h3>
              <p className="text-gray-600">
                Whether you're just starting out or looking to advance your fitness routine, FitFlow
                has the resources you need to succeed. Join our community and transform your fitness journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
