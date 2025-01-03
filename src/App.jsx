import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import { AppProvider } from "./Context/AppContext";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BannerMover from "./Banners/BannerMover";
import PaidCourses from "./Course/Courses";
import TeachersTeam from "./Teams/TeachersTeam";
import VideoPlayer from "./VideoComponents/VideoPlayer";

const App = () => {
    return (
        <AppProvider>
            <Router>
                {/* Always visible components */}
                <Header />
                <BannerMover />
                <PaidCourses />
                <TeachersTeam />

                {/* Routed components */}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/videos" element={<VideoPlayer />} />
                    </Routes>
                </main>

                {/* Footer */}
                <Footer />
            </Router>
        </AppProvider>
    );
};

export default App;