import { useEffect, useState } from "preact/hooks";
import Layout from "../components/Layout";

type MoodEntry = {
  id: string;
  date: string;
  mood: string;
  notes: string;
};

const Journal = () => {
  // get gentries from the server
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch("/public/entries.json");
      const data = await response.json();
      setEntries(data);
    };
    fetchEntries();
  }, []);

  return (
    <Layout>
      <div>
        <h2>Your Mood Journal</h2>
        <p>Here you can view and manage your mood entries.</p>
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <strong>{entry.date}</strong>: {entry.mood} - {entry.notes}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Journal;
