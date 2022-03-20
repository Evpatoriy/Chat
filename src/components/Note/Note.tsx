import React, { FC } from "react";
import { NoteWrapper } from "./styles";
import { NoteProps } from "./types";

export const NoteElement: FC<NoteProps> = ({ note, isCurrentUser }) => {
  return (
    <NoteWrapper isCurrentUser={isCurrentUser}>
      <span>{note.item}</span>
    </NoteWrapper>
  );
};
