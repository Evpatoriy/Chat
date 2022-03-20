export interface NotesState {
  notes: Note[];
}

export interface NotesEvents {
  addNote: {
    text: string;
    userId: string;
  };
}

export interface Note {
  id: string;
  item: string;
  userId: string;
}
