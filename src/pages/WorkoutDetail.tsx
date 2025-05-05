import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Armchair } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

// Sample workout data (this would come from an API in a real app)
const workoutsData = [
  {
    id: "1",
    title: "Full Body HIIT",
    difficulty: "Intermediate",
    bodyPart: "Full Body",
    duration: "30 min",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "A high-intensity interval training workout that targets your entire body, designed to burn calories and improve cardiovascular health.",
    steps: [
      "Start with a 5-minute warm-up",
      "Perform 40 seconds of jumping jacks",
      "Rest for 20 seconds",
      "Do 40 seconds of push-ups",
      "Rest for 20 seconds",
      "Complete 40 seconds of squats",
      "Rest for 20 seconds",
      "Repeat for 4 rounds",
      "Finish with a 5-minute cool down"
    ],
    videoId: "ml6cT4AZdqI"
  },
  {
    id: "2",
    title: "Core Strength Basics",
    difficulty: "Beginner",
    bodyPart: "Core",
    duration: "20 min",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "A beginner-friendly core workout that helps build abdominal strength and stability, perfect for those new to fitness.",
    steps: [
      "Start with a 3-minute warm-up",
      "Perform 30 seconds of crunches",
      "Rest for 15 seconds",
      "Do 30 seconds of plank holds",
      "Rest for 15 seconds",
      "Complete 30 seconds of Russian twists",
      "Rest for 15 seconds",
      "Repeat for 3 rounds",
      "Finish with stretching"
    ],
    videoId: "NGRKFMKhF8s"
  },
  {
    id: "3",
    title: "Advanced Arm Workout",
    difficulty: "Advanced",
    bodyPart: "Arms",
    duration: "45 min",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    description: "An intensive arm workout targeting biceps, triceps and shoulders. Designed for experienced fitness enthusiasts looking to build upper body strength.",
    steps: [
      "Start with dynamic arm stretches",
      "Perform 4 sets of 12 dumbbell curls",
      "Rest for 45 seconds between sets",
      "Do 4 sets of 12 tricep dips",
      "Rest for 45 seconds between sets",
      "Complete 3 sets of 15 lateral raises",
      "Rest for 45 seconds between sets",
      "Finish with a proper cooldown"
    ],
    videoId: "UY6-JpPP6jI"
  },
  {
    id: "4",
    title: "Leg Day Challenge",
    difficulty: "Intermediate",
    bodyPart: "Legs",
    duration: "40 min",
    thumbnail: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    description: "A comprehensive leg workout targeting quads, hamstrings, and calves, designed to build strength and endurance in your lower body.",
    steps: [
      "Begin with a proper leg warm-up",
      "Perform 4 sets of 15 squats",
      "Rest for 60 seconds between sets",
      "Do 3 sets of 12 lunges per leg",
      "Rest for 60 seconds between sets",
      "Complete 3 sets of 15 calf raises",
      "Rest for 45 seconds between sets",
      "Finish with leg stretches"
    ],
    videoId: "RjexvOAsVtI"
  }
];

const WorkoutDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [workout, setWorkout] = useState<any | null>(null);
  const [relatedWorkouts, setRelatedWorkouts] = useState<any[]>([]);

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const foundWorkout = workoutsData.find(w => w.id === id);
    setWorkout(foundWorkout || null);
    
    // Find related workouts with the same body part or difficulty
    if (foundWorkout) {
      const related = workoutsData
        .filter(w => w.id !== foundWorkout.id && 
          (w.bodyPart === foundWorkout.bodyPart || 
           w.difficulty === foundWorkout.difficulty))
        .slice(0, 3);
      setRelatedWorkouts(related);
    }
  }, [id]);

  if (!workout) {
    return (
      <div className="min-h-screen pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-center">Workout not found</h1>
        </div>
      </div>
    );
  }

  const getBodyPartIcon = (bodyPart: string) => {
    switch (bodyPart) {
      case 'Arms':
        return <Dumbbell size={18} />;
      case 'Legs':
        return <Armchair size={18} />;
      case 'Core':
        return <Dumbbell size={18} />;
      case 'Full Body':
      default:
        return <Dumbbell size={18} />;
    }
  };

  const difficultyColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  }[workout.difficulty] || "bg-gray-100 text-gray-800";

  return (
    <div className="min-h-screen pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Video and basic info */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{workout.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className={`px-2 py-1 rounded-full text-xs ${difficultyColor} flex items-center gap-1`}>
                <Dumbbell size={14} />
                {workout.difficulty}
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800 flex items-center gap-1">
                {getBodyPartIcon(workout.bodyPart)}
                {workout.bodyPart}
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                {workout.duration}
              </span>
            </div>
            
            {/* Video embed */}
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden mb-8">
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${workout.videoId}`}
                title={workout.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Tabs - Description and Steps */}
            <Tabs defaultValue="description" className="mt-6">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="steps">Steps</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <p className="text-gray-700 leading-relaxed">{workout.description}</p>
              </TabsContent>
              <TabsContent value="steps" className="mt-4">
                <ol className="list-decimal pl-5 space-y-2">
                  {workout.steps.map((step: string, index: number) => (
                    <li key={index} className="text-gray-700">{step}</li>
                  ))}
                </ol>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right column - Related workouts */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Workouts</h2>
            <div className="space-y-4">
              {relatedWorkouts.map((relatedWorkout) => (
                <Card key={relatedWorkout.id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img 
                      src={relatedWorkout.thumbnail} 
                      alt={relatedWorkout.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {relatedWorkout.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-gray-800">
                      <a 
                        href={`/workout/${relatedWorkout.id}`} 
                        className="hover:text-[#9b87f5] transition-colors"
                      >
                        {relatedWorkout.title}
                      </a>
                    </h3>
                    <div className="flex gap-1 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        relatedWorkout.difficulty === "Beginner" ? "bg-green-100 text-green-800" :
                        relatedWorkout.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {relatedWorkout.difficulty}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetail;
