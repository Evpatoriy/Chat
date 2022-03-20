import { StoreonModule } from "storeon";
import { v4 as uuidv4 } from "uuid";
import { NotesEvents, NotesState } from ".";

export const notes: StoreonModule<NotesState, NotesEvents> = (store) => {
  store.on("@init", () => ({
    notes: [],
  }));
  store.on("addNote", ({ notes }, { text, userId }) => {
    return {
      notes: [...notes, { id: uuidv4(), item: text, userId }],
    };
  });
};
