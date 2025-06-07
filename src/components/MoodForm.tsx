import { useState } from "preact/hooks";
import Calendar from "./Calendar";
import MoodPicker from "./MoodPicker";

const MoodForm = () => {
  const [date, setDate] = useState(new Date().getDate());
  const [mood, setMood] = useState<number | null>(null);
  const [notes, setNotes] = useState("");

  const handleSubmit = (date: number, mood: number | null, notes: string) => {
    // Here you would typically handle the form submission,
    // such as sending the data to a server or saving it locally.
    console.log("Submitted:", { date, mood, notes });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(date, mood, notes);
        }}
      >
        <Calendar selectedDate={date} setSelectedDate={setDate} />
        <MoodPicker selectedMood={mood} setSelectedMood={setMood} />
        <div class="mt-4">
          <textarea
            class="w-full p-2 border rounded"
            placeholder="Add a note about your mood..."
            rows={4}
            value={notes}
            onInput={(e) => setNotes(e.currentTarget.value)}
          ></textarea>
        </div>
        <div class="mt-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded">
            Save Mood
          </button>
        </div>
      </form>
    </>
  );
};

export default MoodForm;
