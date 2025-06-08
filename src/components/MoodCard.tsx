import { Smile, Frown, Meh, Angry } from "lucide-preact";
import type { MoodEntry } from "../context/MoodContext";

const MoodCard = ({ entry }: { entry: MoodEntry }) => {
  const icon = () => {
    switch (entry.mood) {
      case "Happy":
        return <Smile />;
      case "Sad":
        return <Frown />;
      case "Neutral":
        return <Meh />;
      case "Angry":
        return <Angry />;
      default:
        return null;
    }
  };

  return (
    <div class="flex gap-4">
      <div class="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg ">
        {icon()}
      </div>
      <div>
        <h3 class="font-bold">{entry.mood}</h3>
        <p class="text-sm text-gray-500">{entry.date}</p>
      </div>
    </div>
  );
};

export default MoodCard;
