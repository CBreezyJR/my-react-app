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
    description: `With over 35 years of distinguished experience in mining, Mr. Mohamed Nassor is the driving force behind our strategic vision. His extensive career has been marked by the successful establishment of comprehensive mining portfolios and the management of over 1600 active personnel employees. As a director and shareholder of ONE NAGG GROUP, Mohamed infuses our operations with unparalleled expertise, overseeing production, management, and administration with a keen focus on efficiency and growth.`,
  },
  {
    id: 2,
    name: "Mr. Nabeel Nassor",
    title: "Doctor of Operations",
    image: nabeel,
    description: `Nabeel Nassor brings over 5 years of proven experience in directing large-scale construction projects. His track record includes managing multi-million-dollar budgets, negotiating high-stakes contracts, and driving operational efficiency. Nabeel’s leadership ensures that our projects are executed with precision and excellence, enhancing productivity and delivering exceptional results. At ONE NAGG GROUP, we believe in the transformative power of inspired leadership. Our management team, with its rich blend of experience and passion, exemplifies the greatness that emerges when exceptional talent comes together. We are dedicated to pushing boundaries and achieving new heights, driven by the collective strength of our leaders.`,
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
  const topTeam = team.slice(0, 2);
  const rest = team.slice(2);

  return (
    <div className="team-container">
      <h1 className="team-title">Our Leadership Team</h1>

      <div className="top-leaders">
        {topTeam.map((member) => (
          <div key={member.id} className="leader-card">
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <h3>{member.title}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>

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
