import Navbar from "./components/navbar/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  Home,
  About,
  Services,
  Solutions,
  Courses,
  Portfolio,
  Company,
  Blogs,
  PrivacyPolicy,
} from "@pages";
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Code With Naqvi - Learn Web Development</title>
  <meta name="description" content="Code With Naqvi offers React, Rails, and web dev tutorials." />
  <meta name="keywords" content="React, Rails, Web Development, Code With Naqvi" />
  <meta property="og:title" content="Code With Naqvi" />
  <meta property="og:description" content="React and Rails tutorials for developers." />
  <meta property="og:image" content="/cover-image.jpg" />
</Helmet>

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/company" element={<Company />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to={"./"} replace />} />
      </Routes>
    </>
  );
}
