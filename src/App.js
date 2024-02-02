import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import IntroductionPage from "./components/IntroductionPage";
import Message from "./components/Message";
import GeneralRules from "./components/GeneralRules";
import Fines from "./components/Fines";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/message" element={<Message />} />
        <Route path="/general-rules" element={<GeneralRules />} />
        <Route path="/fines" element={<Fines />} />
      </Routes>
    </Router>
  );
}

export default App;
