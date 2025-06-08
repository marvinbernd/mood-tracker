import Layout from "../components/Layout";
import MoodCard from "../components/MoodCard";
import { useEntries } from "../context/MoodContext";

const Journal = () => {
  const entries = useEntries();

  return (
    <Layout title="Journal">
      <div class="p-4">
        <ul>
          {entries?.map((entry) => (
            <li key={entry.id} class="mb-4">
              <MoodCard entry={entry} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Journal;
