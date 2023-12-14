import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import keycloak from "./Keycloak/KeycloakConfig";
import WelcomePage from "./WelcomePage";

function App() {
  const isRun = useRef(false);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    keycloak
      .init({
        onLoad: "login-required",
      })
      .then((res) => {
        setLogin(res);
        localStorage.setItem("Token", keycloak.token!);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Keycloak POC</h1>
      {isLogin ? <WelcomePage /> : <p>User is not Logged In</p>}
    </div>
  );
}

export default App;
