import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import { AppProvider } from "./Context/AppContext";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import BannerMover from "./Banners/BannerMover";
import VideoPlayer from "./VideoComponents/VideoPlayer";

const App = () => {
    return (
        <div className="app">
            <AppProvider>
                <Router>
                    {/* Always visible components */}
                    <Header />
                    <BannerMover />

                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/testimonials" element={<Testimonials />} />
                            <Route path="/videos" element={<VideoPlayer />} />
                        </Routes>
                    </main>

                    
                    <Footer />
                </Router>
            </AppProvider>
        </div>
    );
};

export default App;