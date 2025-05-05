
import { useState } from "react";
import WorkoutCard from "../components/WorkoutCard";
import FilterBar from "../components/FilterBar";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "../components/ui/pagination";

// Sample workout data - expanded
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
  },
  {
    id: "7",
    title: "Core Crusher",
    difficulty: "Advanced",
    bodyPart: "Core",
    duration: "30 min",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
  },
  {
    id: "8",
    title: "Lower Body Blast",
    difficulty: "Intermediate",
    bodyPart: "Legs",
    duration: "40 min",
    thumbnail: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a"
  }
];

const Workouts = () => {
  const [filters, setFilters] = useState({ difficulty: "All", bodyPart: "All" });
  const [currentPage, setCurrentPage] = useState(1);
  const workoutsPerPage = 6;

  const filteredWorkouts = workouts.filter((workout) => {
    const difficultyMatch = filters.difficulty === "All" || workout.difficulty === filters.difficulty;
    const bodyPartMatch = filters.bodyPart === "All" || workout.bodyPart === filters.bodyPart;
    return difficultyMatch && bodyPartMatch;
  });

  // Pagination logic
  const indexOfLastWorkout = currentPage * workoutsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout - workoutsPerPage;
  const currentWorkouts = filteredWorkouts.slice(indexOfFirstWorkout, indexOfLastWorkout);
  const totalPages = Math.ceil(filteredWorkouts.length / workoutsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Workout Library</h1>
        
        <FilterBar onFilterChange={setFilters} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} {...workout} />
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No workouts found with the selected filters.</p>
          </div>
        )}
        
        {/* Pagination */}
        {filteredWorkouts.length > workoutsPerPage && (
          <Pagination className="mt-8">
            <PaginationContent>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={currentPage === page}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page);
                    }}
                    href="#"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default Workouts;
