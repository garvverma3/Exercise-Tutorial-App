
import { useState } from "react";
import { Filter as FilterIcon } from "lucide-react";

interface FilterBarProps {
  onFilterChange: (filters: { difficulty: string; bodyPart: string }) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [difficulty, setDifficulty] = useState("All");
  const [bodyPart, setBodyPart] = useState("All");

  const handleDifficultyChange = (value: string) => {
    setDifficulty(value);
    onFilterChange({ difficulty: value, bodyPart });
  };

  const handleBodyPartChange = (value: string) => {
    setBodyPart(value);
    onFilterChange({ difficulty, bodyPart: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex items-center gap-2 text-gray-600">
          <FilterIcon size={20} />
          <span className="font-medium">Filters</span>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <select
            value={difficulty}
            onChange={(e) => handleDifficultyChange(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <select
            value={bodyPart}
            onChange={(e) => handleBodyPartChange(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
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
