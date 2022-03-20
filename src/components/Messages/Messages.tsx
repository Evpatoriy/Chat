import React, { FC } from "react";
import { Wrapper } from "./styles";
import { NoteElement } from "../Note";
import { useStoreon } from "storeon/react";
import { NotesEvents, NotesState } from "../../store/notes";
import { MessagesProps } from "./types";

export const Messages: FC<MessagesProps> = ({ userId }) => {
  const { notes } = useStoreon<NotesState, NotesEvents>("notes");
  return (
    <Wrapper>
      {notes.map((note) => (
        <NoteElement
          note={note}
          isCurrentUser={note.userId === userId}
          key={note.id}
        />
      ))}
    </Wrapper>
  );
};
