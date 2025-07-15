// wedding-site-starter

import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RSVP from "./pages/RSVP";
import Gifts from "./pages/Gifts";
import EventInfo from "./pages/EventInfo";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQ";
import Story2 from "./pages/Story2";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story2 />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/event-info" element={<EventInfo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
