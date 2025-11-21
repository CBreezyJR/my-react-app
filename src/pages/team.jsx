import React from "react";
import "./team.css";

import mohamed from "../assets/mohamed.jpg";
import nabeel from "../assets/nabeel.jpg";

const team = [
  {
    id: 1,
    name: "Mr. Mohamed H. Nassor",
    title: "Founder & Executive Chairman",
    image: mohamed,
  },
  {
    id: 2,
    name: "Mr. Nabeel Nassor",
    title: "Doctor of Operations",
    image: nabeel,
  },
  {
    id: 3,
    name: "Natasha M. Nassor",
    title: "General Manager",
  },
  {
    id: 4,
    name: "Nairath M. Nassor",
    title: "Finance Manager",
  },
  {
    id: 5,
    name: "Nassir M. Nassor",
    title: "Project Manager",
  },
  {
    id: 6,
    name: "Pieter De Lange",
    title: "Project Manager (AGI)",
  },
  {
    id: 7,
    name: "Mr. Tean De Lange",
    title: "Equipments Manager",
  },
  {
    id: 8,
    name: "Eng. Ercenk Akcam",
    title: "Technical Manager",
  },
  {
    id: 9,
    name: "Eng. Engahmet Saydut",
    title: "Civil Manager",
  },
  {
    id: 10,
    name: "Eng. Murat Yuce",
    title: "Plants & Concrete Manager",
  },
  {
    id: 11,
    name: "Eng. Adem Isler",
    title: "Civil Engineer",
  },
  {
    id: 12,
    name: "Renaud De La Porte",
    title: "Project Manager, Spread 2 Pipeline Project (EACOP)",
  },
  {
    id: 13,
    name: "Leila Valentina Msangi",
    title: "General Coordinator",
  },
  {
    id: 14,
    name: "Cuthbert C. Nkhwelemba",
    title: "Construction & Quality Manager",
  },
  {
    id: 15,
    name: "Eng. Yasir Yassin Mickidadi",
    title: "Civil Engineer",
  },
  {
    id: 16,
    name: "Ms. Beatrice Elias",
    title: "Procurement & Logistics Manager",
  },
  {
    id: 17,
    name: "Salma Athuman",
    title: "HR/IR Manager - Muleba PS3 Site",
  },
  {
    id: 18,
    name: "Mr. Alfred Mtutuma",
    title: "Procurement Manager",
  },
  {
    id: 19,
    name: "George Cyprian Laurent",
    title: "Senior Chief Surveyor",
  },
  {
    id: 20,
    name: "Salmin Said Ally",
    title: "HR/IR Manager - MTT Tanga",
  },
  {
    id: 21,
    name: "Mariam Eliapenda",
    title: "CLO - Social Department",
  },
  {
    id: 22,
    name: "Isack Mosha",
    title: "H3 SE Manager",
  },
];

const Team = () => {
  const chairman = team[0];
  const doctor = team[1];
  const rest = team.slice(2);

  return (
    <div className="team-container">
      <h1 className="team-title">Meet Our Team</h1>

      <div className="hierarchy-center">
        {/* Chairman */}
        <div className="leader-node">
          <div className="leader-circle">
            <img src={chairman.image} alt={chairman.name} />
          </div>
          <h2>{chairman.name}</h2>
          <h3>{chairman.title}</h3>
        </div>

        <div className="vertical-line"></div>

        {/* Doctor */}
        <div className="leader-node">
          <div className="leader-circle">
            <img src={doctor.image} alt={doctor.name} />
          </div>
          <h2>{doctor.name}</h2>
          <h3>{doctor.title}</h3>
        </div>

        <div className="vertical-line"></div>
        <div className="horizontal-line"></div>
      </div>

      {/* Lower team */}
      <div className="team-grid">
        {rest.map((member) => (
          <div key={member.id} className="team-member">
            <h4>{member.name}</h4>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
