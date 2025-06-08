import { useContext, useState } from "preact/hooks";
import Calendar from "./Calendar";
import MoodPicker from "./MoodPicker";
import { useEntriesDispatch } from "../context/MoodContext";

const MoodForm = () => {
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [mood, setMood] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>("");

  const dispatch = useEntriesDispatch();

  const handleSubmit = (date: string, mood: string, notes: string) => {
    if (!dispatch) return;
    dispatch({
      type: "added",
      mood,
      date,
      notes,
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!mood) return;
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
