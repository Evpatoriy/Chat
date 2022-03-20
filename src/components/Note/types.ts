import { Note } from "../../store/notes";

export interface NoteProps {
  note: Note;
  isCurrentUser: boolean;
}

export interface NoteWrapperProps {
  isCurrentUser: boolean;
}
