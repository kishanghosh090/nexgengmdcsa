
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import EventPhotosPage from "./pages/EventPhotosPage";
import About from "./pages/About";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event/:year/:eventName" element={<EventPhotosPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
