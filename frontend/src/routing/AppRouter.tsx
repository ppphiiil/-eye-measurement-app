import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, TESTPAGE } from "./routes";
import { Home } from "../pages/Home/Home";
import { TestPage } from "../pages/TestPage/TestPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={TESTPAGE} element={<TestPage />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
