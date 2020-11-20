import React from "react";
import { useCounterContext } from "../hook/useAuth";
export default function ButtonIncrement() {
  // 3️⃣ Use context instead of custom hook
  const { increment } = useCounterContext();
  return <button onClick={increment}>+</button>;
}
