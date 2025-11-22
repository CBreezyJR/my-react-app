import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import WhatWeDo from "./pages/whatwedo";
import OurServices from "./pages/ourservices";
import OurProjects from "./pages/projects";
import AboutUs from "./pages/about";
import OurTeam from "./pages/team";
import ContactUs from "./pages/contact";
import Sustainability from "./pages/sustainability";

import Construction from "./pages/construction";
import Mining from "./pages/mining";
import Logistics from "./pages/logistics";
import Oil from "./pages/oil";
import RealEstate from "./pages/realestate";
import Rental from "./pages/rental";

// Featured Projects
import Posta from "./pages/posta";
import Sasenga from "./pages/sasenga";
import Tobacco from "./pages/tobacco";
import Tunduru from "./pages/tunduru";
import Ps3 from "./pages/ps3";
import Sgr from "./pages/sgr";
import Marine from "./pages/marine";
import Pipeline from "./pages/pipeline";
import Nditi from "./pages/nditi";
import Coal from "./pages/coal";
import Sassya from "./pages/sassya";
import Dodoma from "./pages/dodoma";
import Nagg from "./pages/nagg";
import FuelTransport from "./pages/fueltransport";
import YapiTransport from "./pages/yapi";
import Cargo from "./pages/cargo";
import IronOre from "./pages/ironore";
import Aggregate from "./pages/aggregate";
import Machinery from "./pages/machinery";
import Factory from "./pages/factory";
import CoalTransport from "./pages/coaltransport";
import Bahi from "./pages/bahi";

// Components
import Navbar from "./components/navbar";

function App() {
  /* -------------------------------
        TRANSLATION SYSTEM
  --------------------------------- */
  const translations = {
    EN: {
      home: "Home",
      whatWeDo: "What We Do",
      services: "Our Services",
      projects: "Our Projects",
      sustainability: "Sustainability",
      aboutUs: "About Us",
      team: "Our Team",
      contact: "Contact Us",

      heroTitle: "WELCOME TO NAGG GROUP",
      heroSubtitle: "perfection is the goal",
      discoverMore: "Discover More",
    },

    SW: {
      home: "Nyumbani",
      whatWeDo: "Tunachofanya",
      services: "Huduma Zetu",
      projects: "Miradi Yetu",
      sustainability: "Uendelevu",
      aboutUs: "Kuhusu Sisi",
      team: "Timu Yetu",
      contact: "Wasiliana Nasi",

      heroTitle: "KARIBU NAGG GROUP",
      heroSubtitle: "ukamilifu ndio malengo",
      discoverMore: "Jifunze Zaidi",
    },
  };

  // load saved language or default to EN
  const [lang, setLang] = useState(localStorage.getItem("site-lang") || "EN");

  const t = (key) => translations[lang][key] || key;

  useEffect(() => {
    localStorage.setItem("site-lang", lang);
  }, [lang]);

  return (
    <Router>
      <div className="app min-h-screen flex flex-col bg-gray-50 text-gray-900 font-raleway">

        {/* Navbar receives language and translator */}
        <Navbar lang={lang} setLang={setLang} t={t} />

        <main className="flex-1 w-full">
          <Routes>

            <Route path="/" element={<Home t={t} />} />
            <Route path="/what-we-do" element={<WhatWeDo t={t} />} />
            <Route path="/our-services" element={<OurServices t={t} />} />
            <Route path="/our-projects" element={<OurProjects t={t} />} />
            <Route path="/about-us" element={<AboutUs t={t} />} />
            <Route path="/our-team" element={<OurTeam t={t} />} />
            <Route path="/contact-us" element={<ContactUs t={t} />} />
            <Route path="/sustainability" element={<Sustainability t={t} />} />

            <Route path="/construction" element={<Construction t={t} />} />
            <Route path="/mining" element={<Mining t={t} />} />
            <Route path="/oil" element={<Oil t={t} />} />
            <Route path="/logistics" element={<Logistics t={t} />} />
            <Route path="/realestate" element={<RealEstate t={t} />} />
            <Route path="/rental" element={<Rental t={t} />} />

            {/* Featured Project Pages */}
            <Route path="/posta" element={<Posta t={t} />} />
            <Route path="/sasenga" element={<Sasenga t={t} />} />
            <Route path="/tobacco" element={<Tobacco t={t} />} />
            <Route path="/tunduru" element={<Tunduru t={t} />} />
            <Route path="/ps3" element={<Ps3 t={t} />} />
            <Route path="/sgr" element={<Sgr t={t} />} />
            <Route path="/marine" element={<Marine t={t} />} />
            <Route path="/pipeline" element={<Pipeline t={t} />} />
            <Route path="/nditi" element={<Nditi t={t} />} />
            <Route path="/coal" element={<Coal t={t} />} />
            <Route path="/sassya" element={<Sassya t={t} />} />
            <Route path="/dodoma" element={<Dodoma t={t} />} />
            <Route path="/nagg" element={<Nagg t={t} />} />
            <Route path="/fueltransport" element={<FuelTransport t={t} />} />
            <Route path="/yapi" element={<YapiTransport t={t} />} />
            <Route path="/cargo" element={<Cargo t={t} />} />
            <Route path="/ironore" element={<IronOre t={t} />} />
            <Route path="/aggregate" element={<Aggregate t={t} />} />
            <Route path="/machinery" element={<Machinery t={t} />} />
            <Route path="/factory" element={<Factory t={t} />} />
            <Route path="/coaltransport" element={<CoalTransport t={t} />} />
            <Route path="/bahi" element={<Bahi t={t} />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
