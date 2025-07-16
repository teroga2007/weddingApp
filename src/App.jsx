import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import RSVP from "./pages/RSVP";
import Gifts from "./pages/Gifts";
import EventInfo from "./pages/EventInfo";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQ";
import Story2 from "./pages/Story2";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes>
            {/* Redirige raíz a idioma por defecto */}
            <Route path="/" element={<Navigate to="/es" replace />} />

            {/* Rutas por idioma */}
            <Route path=":lang">
              <Route index element={<Home />} />
              <Route path="story" element={<Story2 />} />
              <Route path="rsvp" element={<RSVP />} />
              <Route path="gifts" element={<Gifts />} />
              <Route path="event-info" element={<EventInfo />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="faqs" element={<FAQs />} />

              {/* Catch-all para rutas inválidas dentro de un idioma */}
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<Navigate to="/es" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
