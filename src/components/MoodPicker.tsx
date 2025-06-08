import type { Mood } from "../context/MoodContext";

const MoodPicker = ({
  selectedMood,
  setSelectedMood,
}: {
  selectedMood: Mood | null;
  setSelectedMood: (mood: Mood | null) => void;
}) => {
  const moods: Mood[] = ["Happy", "Sad", "Neutral", "Angry"];

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
  };

  return (
    <div>
      <h3 class="font-bold mb-3">How are you feeling today?</h3>
      <div class="flex flex-wrap gap-2">
        {moods.map((mood) => (
          <div
            key={mood}
            class={`p-2 border rounded cursor-pointer ${
              selectedMood === mood ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleMoodSelect(mood)}
          >
            {mood}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodPicker;
