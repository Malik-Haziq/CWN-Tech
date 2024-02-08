import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Services,
  Solutions,
  Portfolio,
  Company,
  Blogs,
  PrivacyPolicy,
} from "@pages";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/company" element={<Company />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}
