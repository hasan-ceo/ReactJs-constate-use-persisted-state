import constate from "constate";
import createPersistedState from "use-persisted-state";
const useAuthState = createPersistedState("Auth");

// 1️⃣ Create a custom hook as usual
function useAuth() {
  const [count, setCount] = useAuthState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  const decrement = () => setCount((prevCount) => prevCount - 1);

  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
}

export const [AuthProvider, useCounterContext] = constate(useAuth);
