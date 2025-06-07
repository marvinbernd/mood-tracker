import { createContext } from "preact";

export const MoodContext = createContext({
  mood: null,
  setMood: (mood: any) => {},
});
