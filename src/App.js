import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Account from "./Pages/Account"; // Sign in / Sign up
import Profile from "./Pages/Profile"; // User profile page
import PlansAndPricing from "./Pages/PlansAndPricing";
import SkirtPage from "./Pages/Course/SkirtPage";
import BlousePage from "./Pages/Course/BlousePage";
import FrockPage from "./Pages/Course/FrocksPage";
import ShirtPage from "./Pages/Course/ShirtPage";
import PantPage from "./Pages/Course/PantPage";
import KidsPage from "./Pages/Course/KidsPage";
import Design from "./Pages/DesignIdeas";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import { UserContext } from "./Context/UserContext";
import Sleeve from "./Pages/Designs/Sleeve";
import Collar from "./Pages/Designs/Collar";
import Neck from "./Pages/Designs/Neck";
import Front from "./Pages/Designs/Front";
import Back from "./Pages/Designs/Back";
import Tools from "./Pages/PatternTools";
import Cost from "./Pages/Costing";
import Designs from "./Pages/MoreDesigns";
import Comming from "./Pages/ComingSoon";
import AdminAccount from "./Pages/Admin/AdminAccount";
import Advertisement from './Pages/Advertisements';

function AccountOrProfile() {
  const { user } = useContext(UserContext);
  return user ? <Profile /> : <Account />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountOrProfile />} />
          <Route path="/plans" element={<PlansAndPricing />} />
          <Route path="/course/skirt" element={<SkirtPage />} />
          <Route path="/course/blouse" element={<BlousePage />} />
          <Route path="/course/frock" element={<FrockPage />} />
          <Route path="/course/shirt" element={<ShirtPage />} />
          <Route path="/course/pant" element={<PantPage />} />
          <Route path="/course/kids" element={<KidsPage />} />
          <Route path="/ideas/design" element={<Design />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/sleeve" element={<Sleeve />} />
          <Route path="/collar" element={<Collar />} />
          <Route path="/neck" element={<Neck />} />
          <Route path="/front" element={<Front />} />
          <Route path="/back" element={<Back />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/costing" element={<Cost />} />
          <Route path="/designs/more" element={<Designs />} />
          <Route path="/fabric" element={<Comming />} />
          <Route path="/tutorials/sewing" element={<Comming />} />
          <Route path="/ideas/sewing" element={<Comming />} />
          <Route path="/course/magazine" element={<Comming />} />
          <Route path="/course/sewing-tools" element={<Comming />} />
          <Route path="/course/computer-pattern" element={<Comming />} />
          <Route path="/course/kids-pattern" element={<Comming />} />
          <Route path="/course/pattern-grading" element={<Comming />} />
          <Route path="/adminaccount" element={<AdminAccount />} />
          <Route path="/advertisement" element={<Advertisement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
