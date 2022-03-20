import { createStoreon } from "storeon";
import { persistState } from "@storeon/localstorage";
import { notes, NotesEvents, NotesState } from "./notes";

interface State extends NotesState {}

interface Events extends NotesEvents {}

const store = createStoreon<State, Events>([notes, persistState(["notes"])]);

export default store;
