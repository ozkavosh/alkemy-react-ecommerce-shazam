import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";

const MainNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MainNavigation;
