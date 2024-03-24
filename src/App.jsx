import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutLinks from "./components/AboutLinks/AboutLinks";
import CollectionLinks from "./components/CollectionLinks/CollectionLinks";
import ServicesLink from "./components/Services/ServicesLink";
import FacilityLink from "./components/FacilitiesLinks/FacilityLink";
import ReasearchLinks from "./components/Research/ReasearchLinks";
import FormsLink from "./components/Forms/FormsLink";
import SectionLinks from "./components/SectionLinks/SectionLinks";
import Guidelines from "./components/GuideLineLinks/Guidelines";
import VirtualTour from "./components/VirtualTour";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutLink" element={<AboutLinks />} />
        <Route path="/collectionLink" element={<CollectionLinks />} />
        <Route path="/servicesLink" element={<ServicesLink />} />
        <Route path="/facilityLink" element={<FacilityLink />} />
        <Route path="/researchLink" element={<ReasearchLinks />} />
        <Route path="/librarySection" element={<SectionLinks />} />
        <Route path="/formLink" element={<FormsLink />} />
        <Route path="/guideLine" element={<Guidelines />} />
        <Route path="/virtualTour" element={<VirtualTour />} />
      </Routes>
    </Router>
  );
}

export default App;
