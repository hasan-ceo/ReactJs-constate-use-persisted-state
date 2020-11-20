import createContainer from "constate";
import useTodos from "./useTodos";

import createPersistedState from "use-persisted-state";

const TodoContainer = createContainer(useTodos);
export default TodoContainer;
