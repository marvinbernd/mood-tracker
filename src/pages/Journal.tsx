import Layout from "../components/Layout";
import { useEntries } from "../context/MoodContext";

const Journal = () => {
  const entries = useEntries();

  return (
    <Layout>
      <div>
        <h2>Your Mood Journal</h2>
        <p>Here you can view and manage your mood entries.</p>
        <ul>
          {entries?.map((entry) => (
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
