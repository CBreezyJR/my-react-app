import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import WhatWeDo from "./pages/whatwedo";
import OurServices from "./pages/ourservices";
import OurProjects from "./pages/projects";
import AboutUs from "./pages/about";
import OurTeam from "./pages/team";
import ContactUs from "./pages/contact";

import Construction from "./pages/construction";
import Mining from "./pages/mining";
import Logistics from "./pages/logistics";
import Oil from "./pages/oil";
import RealEstate from "./pages/realestate";
import Rental from "./pages/rental";

// Featured Projects Pages
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
  return (
    <Router>
      <div className="app min-h-screen flex flex-col bg-gray-50 text-gray-900 font-raleway">
        {/* Navbar always visible */}
        <Navbar />

        {/* Routes */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/our-projects" element={<OurProjects />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact-us" element={<ContactUs />} />

            <Route path="/construction" element={<Construction />} />
            <Route path="/mining" element={<Mining />} />
            <Route path="/oil" element={<Oil />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/realestate" element={<RealEstate />} />
            <Route path="/rental" element={<Rental />} />

            {/* Featured Project Pages */}
            <Route path="/posta" element={<Posta />} />
            <Route path="/sasenga" element={<Sasenga />} />
            <Route path="/tobacco" element={<Tobacco />} />
            <Route path="/tunduru" element={<Tunduru />} />
            <Route path="/ps3" element={<Ps3 />} />
            <Route path="/sgr" element={<Sgr />} />
            <Route path="/marine" element={<Marine />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/nditi" element={<Nditi />} />
            <Route path="/coal" element={<Coal />} />
            <Route path="/sassya" element={<Sassya />} />
            <Route path="/dodoma" element={<Dodoma />} />
            <Route path="/nagg" element={<Nagg />} />
            <Route path="/fueltransport" element={<FuelTransport />} />
            <Route path="/yapi" element={<YapiTransport />} />
            <Route path="/cargo" element={<Cargo />} />
            <Route path="/ironore" element={<IronOre />} />
            <Route path="/aggregate" element={<Aggregate />} />
            <Route path="/machinery" element={<Machinery />} />
            <Route path="/factory" element={<Factory />} />
            <Route path="/coaltransport" element={<CoalTransport />} />
            <Route path="/bahi" element={<Bahi />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
