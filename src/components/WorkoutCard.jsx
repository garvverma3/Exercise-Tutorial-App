
import { Link } from "react-router-dom";

const WorkoutCard = ({ title, difficulty, bodyPart, duration, thumbnail, id }) => {
  const difficultyColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  }[difficulty] || "bg-gray-100 text-gray-800";

  return (
    <Link to={`/workout/${id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-video">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {duration}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#9b87f5] transition-colors duration-200">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className={`px-2 py-1 rounded-full text-xs ${difficultyColor}`}>
              {difficulty}
            </span>
            <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
              {bodyPart}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
