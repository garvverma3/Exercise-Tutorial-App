
import React from "react";
import { useParams, Link } from "react-router-dom";

// Sample workout data
const workouts = [
  {
    id: "1",
    title: "Full Body HIIT",
    difficulty: "Intermediate",
    bodyPart: "Full Body",
    duration: "30 min",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "A high-intensity interval training workout that targets your entire body, alternating between intense bursts of exercise and short recovery periods.",
    equipment: ["Dumbbells", "Exercise Mat"],
    instructor: "Alex Johnson",
    calories: "350-450"
  },
  {
    id: "2",
    title: "Core Strength Basics",
    difficulty: "Beginner",
    bodyPart: "Core",
    duration: "20 min",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "A beginner-friendly workout focusing on building core strength and stability through fundamental movements and exercises.",
    equipment: ["Exercise Mat"],
    instructor: "Sarah Miller",
    calories: "150-250"
  },
  {
    id: "3",
    title: "Advanced Arm Workout",
    difficulty: "Advanced",
    bodyPart: "Arms",
    duration: "45 min",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    description: "An intensive arm workout designed for advanced fitness enthusiasts looking to build strength and definition in their biceps, triceps, and shoulders.",
    equipment: ["Dumbbells", "Resistance Bands", "Pull-up Bar"],
    instructor: "Mike Reynolds",
    calories: "400-500"
  },
  {
    id: "4",
    title: "Leg Day Challenge",
    difficulty: "Intermediate",
    bodyPart: "Legs",
    duration: "40 min",
    thumbnail: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    description: "A comprehensive leg workout targeting quadriceps, hamstrings, calves, and glutes for improved lower body strength and endurance.",
    equipment: ["Dumbbells", "Resistance Bands"],
    instructor: "Emily Chen",
    calories: "300-450"
  }
];

const WorkoutDetail = () => {
  const { id } = useParams();
  const workout = workouts.find(w => w.id === id);

  if (!workout) {
    return (
      <div className="min-h-screen pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Workout Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the workout you're looking for.</p>
          <Link to="/workouts" className="bg-[#9b87f5] text-white px-6 py-2 rounded-md hover:bg-[#8a77e0] transition-colors">
            Back to Workouts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/workouts" className="text-[#9b87f5] hover:underline flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Workouts
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <img 
              src={workout.thumbnail} 
              alt={workout.title} 
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{workout.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {workout.difficulty}
              </span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                {workout.bodyPart}
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                {workout.duration}
              </span>
            </div>

            <div className="prose max-w-none mb-8">
              <h2 className="text-xl font-semibold text-gray-800">Description</h2>
              <p className="text-gray-600">{workout.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Equipment Needed</h2>
              <ul className="list-disc list-inside space-y-1">
                {workout.equipment.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Workout Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Instructor</p>
                  <p className="font-medium">{workout.instructor}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Duration</p>
                  <p className="font-medium">{workout.duration}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Difficulty</p>
                  <p className="font-medium">{workout.difficulty}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Calorie Burn</p>
                  <p className="font-medium">{workout.calories}</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#9b87f5] text-white py-3 px-4 rounded-md hover:bg-[#8a77e0] transition-colors mb-4">
              Start Workout
            </button>
            <button className="w-full border border-[#9b87f5] text-[#9b87f5] py-3 px-4 rounded-md hover:bg-gray-50 transition-colors">
              Save for Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail;
