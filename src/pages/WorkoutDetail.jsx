
import { useParams } from "react-router-dom";
import { useState } from "react";

// Mocked workout data
const workouts = {
  "1": {
    title: "Full Body HIIT",
    difficulty: "Intermediate",
    bodyPart: "Full Body",
    duration: "30 min",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "This High-Intensity Interval Training (HIIT) workout targets your entire body, helping you build strength and improve cardiovascular fitness in just 30 minutes.",
    steps: [
      "Warm up with dynamic stretches for 5 minutes",
      "Perform 40 seconds of jumping jacks, followed by 20 seconds of rest",
      "Complete 40 seconds of push-ups, followed by 20 seconds of rest",
      "Do 40 seconds of squats, followed by 20 seconds of rest",
      "Finish with 40 seconds of mountain climbers, followed by 20 seconds of rest",
      "Repeat the circuit 4 times",
      "Cool down with static stretches for 5 minutes"
    ],
    equipment: ["Exercise mat", "Timer", "Water bottle"]
  },
  "2": {
    title: "Core Strength Basics",
    difficulty: "Beginner",
    bodyPart: "Core",
    duration: "20 min",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "Build a strong foundation with this beginner-friendly core workout designed to strengthen your abdominal muscles and improve stability.",
    steps: [
      "Start with 1 minute of deep breathing exercises",
      "Perform 30 seconds of plank holds",
      "Complete 12 slow and controlled sit-ups",
      "Do 30 seconds of flutter kicks",
      "Hold 30 seconds of side planks on each side",
      "Repeat the circuit 3 times",
      "Finish with gentle stretching"
    ],
    equipment: ["Exercise mat", "Water bottle"]
  }
};

const WorkoutDetail = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Get workout data or use a fallback if ID doesn't exist
  const workout = workouts[id] || {
    title: "Workout Not Found",
    difficulty: "N/A",
    bodyPart: "N/A",
    duration: "N/A",
    thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
    description: "We couldn't find the workout you're looking for. Please try another workout from our library.",
    steps: [],
    equipment: []
  };

  const difficultyColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  }[workout.difficulty] || "bg-gray-100 text-gray-800";

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <a href="/workouts" className="text-[#9b87f5] hover:underline flex items-center gap-1">
            ← Back to Workouts
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video/Image Section */}
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
            <img 
              src={workout.thumbnail} 
              alt={workout.title}
              className="w-full h-full object-cover"
            />
            <button 
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-30 transition-opacity"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">{isPlaying ? "⏸" : "▶"}</span>
              </div>
            </button>
          </div>
          
          {/* Workout Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{workout.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm ${difficultyColor}`}>
                {workout.difficulty}
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                {workout.bodyPart}
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                {workout.duration}
              </span>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{workout.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Equipment Needed</h2>
              <ul className="list-disc list-inside text-gray-600">
                {workout.equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Workout Steps */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Workout Steps</h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              {workout.steps.map((step, index) => (
                <li key={index} className="pl-2">
                  <span className="font-medium text-gray-900">Step {index + 1}:</span> {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail;
