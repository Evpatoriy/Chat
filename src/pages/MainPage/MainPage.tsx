import React, { FC } from "react";
import { Wrapper} from "./styles";
import {Chat} from "../../components/Chat";


export const MainPage: FC = () => {
  return (
    <Wrapper>
      <Chat userId='0'/>
      <Chat userId='1'/>
    </Wrapper>
  );
};
