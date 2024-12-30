import React from "react";
import { AppProvider } from "./Context/AppContext";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BannerMover from "./Banners/BannerMover";
import "./index.css";

const App = () => {
    return (
        <AppProvider>
            <Header />
            <BannerMover/>
            <main>
                <Home />
                <About />
                <Portfolio />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </AppProvider>
    );
};

export default App;