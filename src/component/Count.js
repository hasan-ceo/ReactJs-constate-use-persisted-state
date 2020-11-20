import React, { useEffect } from "react";
import { useCounterContext } from "../hook/useAuth";
export default function ButtonReset() {
  // 3️⃣ Use context instead of custom hook
  const { count } = useCounterContext();
  useEffect(() => {
    document.title = count;
  }, [count]);

  return <span>{count}</span>;
}
