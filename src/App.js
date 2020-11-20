import React, { useEffect } from "react";
import constate from "constate";
import createPersistedState from "use-persisted-state";

// Create a Persisted State
const useCounterState = createPersistedState("Counter");

// Create a custom hook
function useCounter() {
  // set Persisted State insteed of useState
  const [count, setCount] = useCounterState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  const decrement = () => setCount((prevCount) => prevCount - 1);

  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
}

// create store with custom hook
export const [CounterProvider, useCounterContext] = constate(useCounter);

function ButtonIncrement() {
  // Use context instead of custom hook for increment
  const { increment } = useCounterContext();
  return <button onClick={increment}>+</button>;
}

function ButtonDecrement() {
  // Use context instead of custom hook for decrement
  const { decrement } = useCounterContext();
  return <button onClick={decrement}>-</button>;
}

function ButtonReset() {
  // Use context instead of custom hook for reset
  const { reset } = useCounterContext();
  return <button onClick={reset}>0</button>;
}

function Count() {
  // Use context instead of custom hook for count
  const { count } = useCounterContext();

  useEffect(() => {
    // display document title for every count value change
    document.title = count;
  }, [count]);

  return <span>{count}</span>;
}

function App() {
  return (
    <>
      {/* display components */}
      <Count />
      <ButtonIncrement />
      <ButtonDecrement />
      <ButtonReset />
    </>
  );
}

export default function AppWithCounter(props) {
  return (
    // warp App component with store provider
    <CounterProvider>
      <App {...props} />
    </CounterProvider>
  );
}
