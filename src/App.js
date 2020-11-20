import React from "react";
import { AuthProvider } from "./hook/useAuth";
import ButtonIncrement from "./component/ButtonIncrement";
import ButtonDecrement from "./component/ButtonDecrement";
import ButtonReset from "./component/ButtonReset";
import Count from "./component/Count";

function App() {
  return (
    <>
      <Count />
      <ButtonIncrement />
      <ButtonDecrement />
      <ButtonReset />
    </>
  );
}

export default function AppWithAuth(props) {
  return (
    <AuthProvider>
      <App {...props} />
    </AuthProvider>
  );
}
