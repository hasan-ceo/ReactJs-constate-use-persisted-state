import React from "react";
import { useCounterContext } from "../hook/useAuth";
export default function ButtonReset() {
  // 3️⃣ Use context instead of custom hook
  const { reset } = useCounterContext();
  return <button onClick={reset}>0</button>;
}
