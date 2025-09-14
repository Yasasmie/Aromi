import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Account from "./Pages/Account";
import PlansAndPricing from "./Pages/PlansAndPricing";
import SkirtPage from "./Pages/SkirtPage";
import BlousePage from "./Pages/BlousePage";
import FrockPage from "./Pages/FrocksPage";
import ShirtPage from "./Pages/ShirtPage";
import PantPage from "./Pages/PantPage";
import KidsPage from "./Pages/KidsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/plans" element={<PlansAndPricing />} /> 
          <Route path="/course/skirt" element={<SkirtPage />} /> 
          <Route path="/course/blouse" element={<BlousePage />} /> 
          <Route path="/course/frock" element={<FrockPage />} /> 
          <Route path="/course/shirt" element={<ShirtPage />} /> 
          <Route path="/course/pant" element={<PantPage />} /> 
          <Route path="/course/kids" element={<KidsPage />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
