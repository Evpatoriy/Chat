import React, { FC } from "react";
import { Wrapper } from "./styles";
import { Input } from "../Input";
import { Messages } from "../Messages";
import { ChatProps } from "./types";

export const Chat: FC<ChatProps> = ({
    userId
}) => {
  return (
    <Wrapper>
      <Messages userId={userId}/>
      <Input userId={userId}/>
    </Wrapper>
  );
};
