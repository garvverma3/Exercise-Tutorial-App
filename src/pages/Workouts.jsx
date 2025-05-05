
import { useState } from "react";
import WorkoutCard from "../components/WorkoutCard";
import FilterBar from "../components/FilterBar";

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
  },
  {
    id: "5",
    title: "Beginner's Yoga Flow",
    difficulty: "Beginner",
    bodyPart: "Full Body",
    duration: "25 min",
    thumbnail: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6"
  },
  {
    id: "6",
    title: "Upper Body Strength",
    difficulty: "Intermediate",
    bodyPart: "Arms",
    duration: "35 min",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
  }
];

const Workouts = () => {
  const [filters, setFilters] = useState({ difficulty: "All", bodyPart: "All" });

  const filteredWorkouts = workouts.filter((workout) => {
    const difficultyMatch = filters.difficulty === "All" || workout.difficulty === filters.difficulty;
    const bodyPartMatch = filters.bodyPart === "All" || workout.bodyPart === filters.bodyPart;
    return difficultyMatch && bodyPartMatch;
  });

  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-6">Workout Library</h1>
        
        <FilterBar onFilterChange={setFilters} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} {...workout} />
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No workouts found with the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workouts;
