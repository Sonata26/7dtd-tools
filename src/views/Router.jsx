import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import About from "./About";
import PerkPlanner from "./PerkPlanner";
import XPCalculator from "./XPCalculator";

function Router() {
  return (
    //  basename={process.env.REACT_APP_ROUTER_BASE || "/"}
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<About />} />
          <Route path="xp" element={<XPCalculator />} />
          <Route path="perks" element={<PerkPlanner />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
