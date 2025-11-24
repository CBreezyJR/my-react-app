// src/data/projectsData.js

import posta10 from "../assets/posta10.jpg";
import tunduruWater from "../assets/tunduru.png";
import yongomaDam from "../assets/yongoma.png";
import sasengaIrrigation from "../assets/sasenga.png";
import sgrEarthworks from "../assets/sgrearthworks.png";
import marineTerminal from "../assets/marine.png";
import tobaccoFactory from "../assets/tobacco10.jpg";
import nickelOrePmm from "../assets/dom7.jpg";
import nickelOreMast from "../assets/nickelore.jpg";
import nickelOreSassya from "../assets/sassya1.jpg";
import ironOre from "../assets/ironore.jpg";
import bahiQuarry from "../assets/bahiquarry.jpg";
import nickelMining from "../assets/nditi10.jpg";
import coalMining from "../assets/coal10.jpg";
import naggTransport from "../assets/naggtransportation.png";
import fuelTransport from "../assets/fueltransportation.png";
import yapiTransport from "../assets/yapitransportation.jpg";
import cargoTransport from "../assets/cargotransportation.jpg";
import ironOreTransport from "../assets/3.logistics.jpg";
import aggregateTransport from "../assets/aggregatetransport.png";
import machineryMobilization from "../assets/machinerymobilization.png";
import factoryEquipment from "../assets/factoryequipment.png";
import coalTransport from "../assets/coalmining.jpg";
import pipelineInstallation from "../assets/4.oil.png";
import pumpStation from "../assets/pumpstation.png";


const projectdata = [
  // -----------------------
  // Construction Projects
  // -----------------------
  {
    id: 1,
    title: "Construction of Posta House Office Building",
    category: "Construction",
    location: "Dar es Salaam, Tanzania",
    client: "Tanzania Posta Corporation",
    status: "Ongoing",
    year: "2025",
    image: posta10,
    link: "/posta",
  },
  {
    id: 2,
    title: "Improvement of Water Supply System in Tunduru",
    category: "Construction",
    location: "Tunduru, Tanzania",
    client: "TUUWASA",
    status: "Ongoing",
    year: "2025",
    image: tunduruWater,
    link: "/tunduru",
  },
 
  {
    id: 5,
    title: "Construction of Yongoma Dam",
    category: "Construction",
    location: "Tanzania",
    client: "National Irrigation Commission",
    status: "New Project",
    year: "2025",
    image: yongomaDam,
  },
  {
    id: 6,
    title: "Rehabilitation of Sasenga Irrigation Scheme",
    category: "Construction",
    location: "Tanzania",
    client: "National Irrigation Commission",
    status: "Ongoing",
    year: "2025",
    image: sasengaIrrigation,
    link: "/sasenga",
  },
 
  {
    id: 8,
    title: "Construction of Main Alignment (Earthworks) for Standard Gauge Railway Project",
    category: "Construction",
    location: "Tanzania",
    status: "New Project",
    year: "2025",
    image: sgrEarthworks,
    link: "/sgr",
  },
  
  {
    id: 11,
    title: "Construction of Marine Terminal Tank",
    category: "Construction",
    location: "Tanzania",
    client: "EACOP",
    status: "New Project",
    year: "2025",
    image: marineTerminal,
    link: "/marine",
  },
  {
    id: 12,
    title: "Construction of Tobacco Factory",
    category: "Construction",
    location: "Tanzania",
    client: "Mastermind Tabacco Tanzania",
    status: "New Project",
    year: "2025",
    image: tobaccoFactory,
    link: "/tobacco",
  },

  // -----------------------
  // Mining Projects
  // -----------------------
  {
    id: 13,
    title: "Nickel Ore Mining Services for Progressive Metallic Minerals Co. Ltd",
    category: "Mining",
    location: "Dodoma, Tanzania",
    status: "Completed",
    year: "2022",
    image: nickelOrePmm,
    link: "/dodoma",
  },
  {
    id: 14,
    title: "Nickel Ore Mining Services for Mining Access System Tanzania",
    category: "Mining",
    location: "Lindi, Tanzania",
    status: "Completed",
    year: "2022",
    image: nickelOreMast,
  },
  {
    id: 15,
    title: "Nickel Ore Mining Services for Sassya Investment Ltd.",
    category: "Mining",
    location: "Dodoma, Tanzania",
    status: "Mobilization Process",
    year: "2023",
    image: nickelOreSassya,
    link: "/sassya",
  },
  {
    id: 16,
    title: "Iron Ore Mining for In and Out Company Ltd",
    category: "Mining",
    location: "Tanga, Tanzania",
    status: "Ongoing",
    year: "2023",
    image: ironOre,
  },
  {
    id: 17,
    title: "Bahi Stone Quarry & Crusher Plant (Aggregate Production)",
    category: "Mining",
    location: "Bahi, Dodoma",
    materials: "Aggregates 0-5mm, 5-15mm, 15-25mm",
    clients: "CRJE, SUMA JKT, CSWS, Yapi Merkezi (SGR Lots 2 & 3)",
    status: "Ongoing",
    year: "2023",
    image: bahiQuarry,
    link: "/bahi",
  },
  {
    id: 18,
    title: "Nickel Mining",
    category: "Mining",
    location: "Nditi",
    materials: "Nickel",
    status: "Ongoing",
    year: "2023",
    image: nickelMining,
    link: "/nditi",
  },
  {
    id: 19,
    title: "Coal Mining, Extraction & Crushing",
    category: "Mining",
    location: "Kitai, Songea",
    materials: "Coal",
    clients: "KEDA (Kenya), Simba Cement, Lake Cement",
    status: "Ongoing",
    year: "2023",
    image: coalMining,
    link: "/coal",
  },

  // -----------------------
  // Transport & Oil/Gas projects
  // -----------------------
  {
    id: 20,
    title: "Transporting Machinery & Equipment for NAGG Mining & Construction",
    category: "Transport",
    status: "Ongoing",
    year: "2023",
    image: naggTransport,
    link: "/nagg",
  },
  {
    id: 21,
    title: "Fuel Transportation from Dar to DRC",
    category: "Transport",
    client: "Engen",
    freight: "20 Tankers",
    status: "Ongoing",
    year: "2023",
    image: fuelTransport,
    link: "/fueltransport",
  },
  {
    id: 22,
    title: "Transporting Machinery & Containers for Yapi Merkezi (SGR Lots 2 & 3)",
    category: "Transport",
    contract: "5 years",
    status: "Ongoing",
    year: "2023",
    image: yapiTransport,
    link: "/yapi",
  },
  {
    id: 23,
    title: "Cargo Transportation for ASK Engineering LTD",
    category: "Transport",
    status: "Ongoing",
    year: "2023",
    image: cargoTransport,
    link: "/cargo",
  },
  {
    id: 24,
    title: "Iron Ore Transportation for Simba Cement",
    category: "Transport",
    route: "Kwedizinga to Pongwe Tanga",
    client: "In and Out Co. Ltd",
    status: "Ongoing",
    year: "2023",
    image: ironOreTransport,
    link: "/ironore",
  },
  {
    id: 25,
    title: "Aggregate Transportation for Yapi Merkezi (LOT 2 SGR)",
    category: "Transport",
    freight: "20 Trucks",
    status: "Ongoing",
    year: "2023",
    image: aggregateTransport,
    link: "/aggregate",
  },
  {
    id: 26,
    title: "Machinery Mobilization for Osman CAMCI Company Ltd",
    category: "Transport",
    route: "Zuzu, Dodoma to Tabora (Lot 3 Camp)",
    status: "Ongoing",
    year: "2023",
    image: machineryMobilization,
    link: "/machinery",
  },
  {
    id: 27,
    title: "Machinery & Factory Equipment Transportation for Itracom Fertilizers Ltd",
    category: "Transport",
    status: "Ongoing",
    year: "2023",
    image: factoryEquipment,
    link: "/factory",
  },
  {
    id: 28,
    title: "Coal Transportation for Haathee Hauliers & Traders (T) Ltd",
    category: "Transport",
    status: "Ongoing",
    year: "2023",
    image: coalTransport,
    link:"/coaltransport",
  },
  {
    id: 29,
    title: "Installation of Pipeline and Civil Works (EACOP)",
    category: "Oil & Gas",
    distance: "110km",
    year: "January 2025",
    status: "Planned",
    image: pipelineInstallation,
    link: "/pipeline",
  },
  {
    id: 30,
    title: "Construction of Pump Station (PS-3)",
    category: "Oil & Gas",
    client: "EACOP",
    year: "2024",
    status: "Ongoing",
    image: pumpStation,
    link: "/ps3",
  },
];

export default projectdata;
