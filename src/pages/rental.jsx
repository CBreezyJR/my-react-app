import React from "react";
import "./rental.css";

// Import images
import rentalMain from "../assets/6.rental.jpg";
import rental2 from "../assets/rental02.jpg";
import rental3 from "../assets/rental03.jpg";
import rental4 from "../assets/rental04.png";
import rental5 from "../assets/rental05.png";

function Rental() {
  const images = [rentalMain, rental2, rental3,rental4,rental5];

  const equipmentData = [
    { model: "ZOOMLION ZTC250V5-2R", description: "Mobile Crane", capacity: "25 Tons", quantity: "2 Pieces" },
    { model: "LIEBHERR 934", description: "Excavator", capacity: "34 Tons", quantity: "2 Pieces" },
    { model: "GROVE", description: "Mobile Crane", capacity: "70 Tons", quantity: "1 Piece" },
    { model: "LIEBHERR R920", description: "Excavator", capacity: "20 Tons", quantity: "1 Piece" },
    { model: "XCMG 215", description: "Excavator", capacity: "20 Tons", quantity: "1 Piece" },
    { model: "SANY 215 YC", description: "Excavator", capacity: "23 Tons", quantity: "4 Pieces" },
    { model: "JCB 205", description: "Excavator", capacity: "20 Tons", quantity: "2 Pieces" },
    { model: "HITACHI 450 LC", description: "Excavator", capacity: "45 Tons", quantity: "1 Piece" },
    { model: "SDLG 6375 F", description: "Excavator", capacity: "37 Tons", quantity: "1 Piece" },
    { model: "HYUNDAI 340 F", description: "Excavator", capacity: "34 Tons", quantity: "1 Piece" },
    { model: "CATTERPILLAR 320 GX", description: "Excavator", capacity: "20 Tons", quantity: "1 Piece" },
    { model: "CATTERPILLAR 330 DL", description: "Excavator", capacity: "30 Tons", quantity: "1 Piece" },
    { model: "CATTERPILLAR 336", description: "Excavator", capacity: "36 Tons", quantity: "1 Piece" },
    { model: "ZOOMLION 215", description: "Excavator", capacity: "20 Tons", quantity: "1 Piece" },
    { model: "ZOOMLION ZE335 E", description: "Excavator", capacity: "33 Tons", quantity: "2 Pieces" },
    { model: "LOVOL FR 265 E", description: "Excavator", capacity: "26 Tons", quantity: "1 Piece" },
    { model: "CATTERPILLAR 140H", description: "Grader", capacity: "22 Tons", quantity: "1 Piece" },
    { model: "SEM 921", description: "Grader", capacity: "19 Tons", quantity: "1 Piece" },
    { model: "SANY SMG200-C", description: "Grader", capacity: "22 Tons", quantity: "1 Piece" },
    { model: "CAT ROLLER 533E", description: "Roller Compactor", capacity: "15 Tons", quantity: "1 Piece" },
    { model: "XCMG XS142 J", description: "Roller Compactor", capacity: "22 Tons", quantity: "2 Pieces" },
    { model: "SANY SSR200AC-8H", description: "Roller Compactor", capacity: "20 Tons", quantity: "1 Piece" },
    { model: "LIEBHERR PR744", description: "Bulldozer", capacity: "27 Tons", quantity: "1 Piece" },
    { model: "CAT D6 R", description: "Bulldozer", capacity: "22 Tons", quantity: "1 Piece" },
    { model: "CAT D9 R", description: "Bulldozer", capacity: "40 Tons", quantity: "2 Pieces" },
    { model: "SEM 655 D", description: "Wheelloader", capacity: "5 Tons", quantity: "1 Piece" },
    { model: "SANY Wheelloader", description: "Wheelloader", capacity: "5 Tons", quantity: "2 Pieces" },
    { model: "XCM ZL50", description: "Wheelloader", capacity: "5 Tons", quantity: "1 Piece" },
    { model: "SDLG 956", description: "Wheelloader", capacity: "5 Tons", quantity: "3 Pieces" },
    { model: "CATTERPILLER 950 H", description: "Wheelloader", capacity: "4.5 Tons", quantity: "1 Piece" },
    { model: "KOMATSU WA470 H", description: "Wheelloader", capacity: "5 Tons", quantity: "1 Piece" },
    { model: "Aggregate Crushing Plants", description: "Crushing Plants", capacity: "500 Tons", quantity: "3 Pieces" },
    { model: "Concrete Batching Plants", description: "Batching Plants", capacity: "60 CBM", quantity: "3 Pieces" },
    { model: "HOWO 371 Mixer Trucks", description: "Concrete Mixer", capacity: "8 CBM", quantity: "6 Pieces" },
    { model: "IVECO EURO TRACKER", description: "Concrete Pump", capacity: "40 Meters", quantity: "1 Piece" },
    { model: "Mobile Concrete Pump", description: "Concrete Pump", capacity: "100 Meters", quantity: "2 Pieces" },
    { model: "TATA Fuel Bowser", description: "Fuel Bowser", capacity: "5000 Liters", quantity: "1 Piece" },
    { model: "VOLVO FH ADT", description: "Articulated Dumper Truck", capacity: "25 Ton Trey", quantity: "1 Piece" },
    { model: "BEL B30 E ADT", description: "Articulated Dumper Truck", capacity: "25 Ton Trey", quantity: "1 Piece" },
    { model: "ATLAS COPCO ROCD7", description: "Rockdrill", capacity: "-", quantity: "2 Pieces" },
    { model: "IVECO EURO TRACKER Rockdrill", description: "Rockdrill", capacity: "-", quantity: "1 Piece" },
    { model: "SANY 452 Dumptruck", description: "Dump Truck 2024 Model", capacity: "22 CBM", quantity: "4 Pieces" },
    { model: "HOWO 371 Dumptruck", description: "Dumptrucks", capacity: "20 CBM", quantity: "4 Pieces" },
    { model: "FAW HP 380 Dumptruck", description: "Dumptrucks", capacity: "20 CBM", quantity: "3 Pieces" },
    { model: "TATA PRIMA Dumptruck", description: "Dumptrucks", capacity: "24 CBM", quantity: "4 Pieces" },
    { model: "FAW HP 380 Trucks", description: "Semi Trailer", capacity: "30 Tons", quantity: "8 Pieces" },
    { model: "Superdoll Tipping Trailers", description: "Semi Trailer", capacity: "30 Tons", quantity: "7 Pieces" },
    { model: "IVECO EUROTRACKER 450", description: "Semi Trailer / Lowbed", capacity: "150 Tons", quantity: "10 Pieces" },
    { model: "MAN 440 TGS", description: "Semi Trailer", capacity: "30 Tons", quantity: "5 Pieces" },
    { model: "ATA NOVUS DAEWOO", description: "Semi Trailer", capacity: "30 Tons", quantity: "4 Pieces" }
  ];

  return (
    <div className="rental-page">
      {/* Header */}
      <div className="rental-header">
        <h1>Equipment Rental</h1>
        <p>
          NAGG Group provides a wide range of high-quality machinery and equipment for hire —
          supporting construction, mining, and logistics projects efficiently and reliably.
        </p>
      </div>

      {/* Main Images */}
      <div className="rental-images">
        {images.map((img, index) => (
          <div className="rental-image-card" key={index}>
            <img src={img} alt={`Rental ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Paragraph */}
      <div className="rental-paragraph">
        <p>
          Our rental services are backed by a commitment to maintaining the highest standards
          of quality and safety. Each piece of equipment undergoes rigorous checks to ensure
          optimal performance, so you can focus on what you do best.
        </p>
      </div>

      {/* Equipment Table */}
      <div className="flex justify-center mt-6 px-4">
        <div className="overflow-x-auto w-full max-w-7xl">
          <table className="min-w-full border border-black-300 rounded-lg overflow-hidden text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black-300 px-4 py-2">MODEL</th>
                <th className="border border-black-300 px-4 py-2">DESCRIPTION</th>
                <th className="border border-black-300 px-4 py-2">CAPACITY</th>
                <th className="border border-black-300 px-4 py-2">QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {equipmentData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-100">
                  <td className="border border-black-300 px-4 py-2">{item.model}</td>
                  <td className="border border-black-300 px-4 py-2">{item.description}</td>
                  <td className="border border-black-300 px-4 py-2">{item.capacity}</td>
                  <td className="border border-black-300 px-4 py-2">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Rental;
