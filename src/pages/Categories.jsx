
import { useState } from "react";
import WorkoutCard from "../components/WorkoutCard";

const categories = [
  { id: "all", label: "All" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

const bodyParts = [
  { id: "all", label: "All" },
  { id: "arms", label: "Arms" },
  { id: "legs", label: "Legs" },
  { id: "core", label: "Core" },
  { id: "full-body", label: "Full Body" },
];

// Sample workout data
const workouts = [
  {
    id: "1",
    title: "Full Body HIIT",
    difficulty: "Intermediate",
    bodyPart: "Full Body",
    duration: "30 min",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "2",
    title: "Core Strength Basics",
    difficulty: "Beginner",
    bodyPart: "Core",
    duration: "20 min",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "3",
    title: "Advanced Arm Workout",
    difficulty: "Advanced",
    bodyPart: "Arms",
    duration: "45 min",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
  },
  {
    id: "4",
    title: "Leg Day Challenge",
    difficulty: "Intermediate",
    bodyPart: "Legs",
    duration: "40 min",
    thumbnail: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  }
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeBodyPart, setActiveBodyPart] = useState("all");

  const filteredWorkouts = workouts.filter((workout) => {
    const difficultyMatch =
      activeCategory === "all" ||
      workout.difficulty.toLowerCase() === activeCategory;
    const bodyPartMatch =
      activeBodyPart === "all" ||
      workout.bodyPart.toLowerCase().replace(" ", "-") === activeBodyPart;
    return difficultyMatch && bodyPartMatch;
  });

  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-8">Browse Categories</h1>

        {/* Difficulty Level Tabs */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Difficulty Level</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeCategory === category.id
                    ? "bg-[#9b87f5] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Body Part Tabs */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Body Part</h2>
          <div className="flex flex-wrap gap-2">
            {bodyParts.map((part) => (
              <button
                key={part.id}
                onClick={() => setActiveBodyPart(part.id)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeBodyPart === part.id
                    ? "bg-[#9b87f5] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {part.label}
              </button>
            ))}
          </div>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} {...workout} />
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No workouts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
