import React from "react";
import { useCounterContext } from "../hook/useAuth";
export default function ButtonDecrement() {
  // 3️⃣ Use context instead of custom hook
  const { decrement } = useCounterContext();
  return <button onClick={decrement}>-</button>;
}
