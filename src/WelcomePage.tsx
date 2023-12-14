import { Button } from "@mui/material";
import React from "react";
import keycloak from "./Keycloak/KeycloakConfig";
import axios from "axios";

export const WelcomePage = () => {
  const HandleKeyCloakLogout = () => {
    keycloak.logout();

  };

  return (
    <>
      <h4> Welcome , you are logged in!</h4>
      <Button
        onClick={HandleKeyCloakLogout}
        variant="contained"
        sx={{ marginTop: "10px" }}
      >
        Log Out
      </Button>
    </>
  );
};

export default WelcomePage;
