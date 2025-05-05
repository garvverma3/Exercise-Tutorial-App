
import { useState } from "react";

const FilterBar = ({ onFilterChange }) => {
  const [difficulty, setDifficulty] = useState("All");
  const [bodyPart, setBodyPart] = useState("All");

  const handleDifficultyChange = (value) => {
    setDifficulty(value);
    onFilterChange({ difficulty: value, bodyPart });
  };

  const handleBodyPartChange = (value) => {
    setBodyPart(value);
    onFilterChange({ difficulty, bodyPart: value });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-8">
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🔍</span>
          <div>
            <h3 className="font-semibold text-gray-800">Filter Workouts</h3>
            <p className="text-gray-500 text-sm">Find the perfect workout for you</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 w-full sm:w-auto">
          <select
            value={difficulty}
            onChange={(e) => handleDifficultyChange(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <select
            value={bodyPart}
            onChange={(e) => handleBodyPartChange(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
          >
            <option value="All">All Body Parts</option>
            <option value="Arms">Arms</option>
            <option value="Legs">Legs</option>
            <option value="Core">Core</option>
            <option value="Full Body">Full Body</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
