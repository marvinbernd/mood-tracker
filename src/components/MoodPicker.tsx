const MoodPicker = ({
  selectedMood,
  setSelectedMood,
}: {
  selectedMood: number | null;
  setSelectedMood: (mood: number | null) => void;
}) => {
  const moods = [
    { id: 1, name: "Happy" },
    { id: 2, name: "Sad" },
    { id: 3, name: "Angry" },
    { id: 4, name: "Excited" },
    { id: 5, name: "Relaxed" },
  ];

  const handleMoodSelect = (mood: any) => {
    setSelectedMood(mood.id);
  };

  return (
    <div>
      <h3>How are you feeling today?</h3>
      <div class="flex flex-wrap gap-2">
        {moods.map((mood) => (
          <div
            key={mood.id}
            class={`p-2 border rounded cursor-pointer ${
              selectedMood === mood.id ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleMoodSelect(mood)}
          >
            {mood.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodPicker;
