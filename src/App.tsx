import React from "react";
import { AuthContext } from "./auth/AuthContext";

const App = () => {
  return (
    <AuthContext>
      <div>家計簿を作ります</div>
    </AuthContext>
  );
};

export default App;
