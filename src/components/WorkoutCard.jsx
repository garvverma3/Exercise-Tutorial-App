
import { Link } from "react-router-dom";

const WorkoutCard = ({ title, difficulty, bodyPart, duration, thumbnail, id }) => {
  const difficultyColor = {
    Beginner: "bg-green-100 text-green-800 border border-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    Advanced: "bg-red-100 text-red-800 border border-red-200",
  }[difficulty] || "bg-gray-100 text-gray-800 border border-gray-200";

  return (
    <Link to={`/workout/${id}`} className="group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {duration}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#9b87f5] transition-colors duration-200">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColor}`}>
              {difficulty}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
              {bodyPart}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
