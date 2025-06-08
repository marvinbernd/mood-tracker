import { createContext } from "preact";
import { useContext, useReducer, type Dispatch } from "preact/hooks";

const initialEntries = [
  {
    id: "1",
    date: "2023-10-01",
    mood: "Happy" as Mood,
    notes: "Had a great day!",
  },
  {
    id: "2",
    date: "2023-10-02",
    mood: "Sad" as Mood,
    notes: "Feeling a bit down today.",
  },
];

export type Mood = "Happy" | "Sad" | "Neutral" | "Angry";

export interface MoodEntry {
  id: string;
  date: string;
  mood: Mood;
  notes: string;
}

type Action =
  | { type: "added"; date: string; mood: Mood; notes: string }
  | { type: "removed"; id: string };

export const EntriesContext = createContext<MoodEntry[] | null>(null);
export const EntriesDispatchContext = createContext<Dispatch<Action> | null>(
  null
);

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

function entriesReducer(entries: MoodEntry[], action: Action): MoodEntry[] {
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
      throw Error("Unknown action: " + (action as any).type);
      // The following line is unreachable but satisfies TypeScript's return type checking
      return entries;
    }
  }
}

export function useEntries() {
  return useContext(EntriesContext);
}

export function useEntriesDispatch() {
  return useContext(EntriesDispatchContext);
}
