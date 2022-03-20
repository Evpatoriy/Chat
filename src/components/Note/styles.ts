import styled from "styled-components";
import { NoteWrapperProps } from "./types";

export const NoteWrapper = styled.div<NoteWrapperProps>`
  ${({ isCurrentUser }) =>
    isCurrentUser ? "align-self: end;" : "align-self: start;"}
    border-radius: 5px;
    background-color: lightgrey;
    margin-bottom: 6px;
    margin-left: 6px;
    margin-right: 6px;
    max-width: 70%;
    padding: 6px;
    ${({isCurrentUser}) => 
    isCurrentUser ? "background-color: lightblue" : ''}
`;

