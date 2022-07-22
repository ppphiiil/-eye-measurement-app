import { Link } from "react-router-dom";
import { Button, Slider } from "@mui/material";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

//frage funktioniert nicht
const CustomizedSlider = styled(Slider)(({ theme }) => ({
  color: "#000000",
}));

const Page = styled("div")(({}) => ({
  backgroundColor: "lightgray",
}));

export const Home = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <div>{"Home"}</div>
      <div>Hallo, ich bin ein Text</div>
      <div>{t("test")}</div>
      <Slider defaultValue={30} />
      <CustomizedSlider defaultValue={30} />
      <Link to="/testpage">
        <Button variant="contained" startIcon={<SettingsIcon />}>
          {"Link"}
        </Button>
      </Link>
    </Page>
  );
};
