import { createContext } from "preact";
import { useContext, useReducer } from "preact/hooks";

const initialEntries = [
  {
    id: "1",
    date: "2023-10-01",
    mood: "happy",
    notes: "Had a great day!",
  },
  {
    id: "2",
    date: "2023-10-02",
    mood: "sad",
    notes: "Feeling a bit down today.",
  },
];

interface MoodEntry {
  id: string;
  date: string;
  mood: string;
  notes: string;
}

export const EntriesContext = createContext<MoodEntry[] | null>(null);
export const EntriesDispatchContext = createContext<any | null>(null);

export function EntriesProvider({
  children,
}: {
  children: preact.ComponentChildren;
}): preact.JSX.Element {
  const [entries, dispatch] = useReducer(entriesReducer, initialEntries);

  return (
    <EntriesContext.Provider value={entries}>
      <EntriesDispatchContext.Provider value={dispatch}>
        {children}
      </EntriesDispatchContext.Provider>
    </EntriesContext.Provider>
  );
}

function entriesReducer(entries: MoodEntry[], action: any): MoodEntry[] {
  switch (action.type) {
    case "added":
      return [
        ...entries,
        {
          id: Date.now().toString(),
          date: action.date,
          mood: action.mood,
          notes: action.notes,
        },
      ];
    case "removed":
      return entries.filter((entry) => entry.id !== action.id);
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function useEntries() {
  return useContext(EntriesContext);
}

export function useEntriesDispatch() {
  return useContext(EntriesDispatchContext);
}
