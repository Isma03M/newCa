import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import Facilities from "./pages/Facilities";
import Sales from "./pages/Sales";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SalesHorses from "./pages/SalesHorses";
import HorseDetails from "./pages/HorseDetails";
import BreendingProgram from "./pages/BreendingProgram";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/:horseId" element={<HorseDetails />} />
        <Route path="/sales/sales-horses" element={<SalesHorses />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BreendingProgram" element={<BreendingProgram />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;