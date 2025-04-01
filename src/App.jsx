import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallary";
import Contact from "./pages/Contact";
import CallWhatsAppButton from "./component/CallWhatsappButton";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Default Route - Home Page */}
        <Route path="/" element={<Home />} />

        {/* Other Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />;

        {/* Redirect any unknown route to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <CallWhatsAppButton/>
      <Footer />
    </>
  );
}

export default App;
