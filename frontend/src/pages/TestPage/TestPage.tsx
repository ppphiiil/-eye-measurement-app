import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";

export const TestPage = () => {
  return (
    <>
      <div>{"TestPage"}</div>
      <Link to="/home">
        {" "}
        <Button variant="contained">{"Link"}</Button>
      </Link>
    </>
  );
};
