import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import About from "./About";
import PerkPlanner from "./PerkPlanner";
import XPCalculator from "./XPCalculator";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} />
          <Route path="xp" element={<XPCalculator />} />
          <Route path="perks" element={<PerkPlanner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
