import React, { FC } from "react";
import { useStoreon } from "storeon/react";

import { NotesEvents, NotesState } from "../../store/notes";
import { Wrapper, Button, TextInput, SendButtonImg } from "./styles";
import iconSend from "../../assets/iconSend.svg";

export const Input: FC<{ userId: string }> = ({ userId }) => {
  const { dispatch } = useStoreon<NotesState, NotesEvents>("notes");
  const [value, setValue] = React.useState("");

  const submit = () => {
    dispatch("addNote", { text: value, userId });
    setValue("");
  };

  const handleInput = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  return (
    <Wrapper>
      <TextInput
        onChange={handleInput}
        onKeyDown={handleEnter}
        value={value}
        placeholder="Введите сообщение"
        autoFocus
      />
      <Button onClick={submit}><SendButtonImg src={iconSend} alt="send" /></Button>
    </Wrapper>
  );
};
