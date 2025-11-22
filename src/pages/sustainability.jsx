import React from "react";
import "./sustainability.css";

const csrActivities = [
  {
    number: 1,
    title: "Construction of Road – Mpamantwa Village, Dodoma Region",
    description: "We contributed to the accessibility of Mpamantwa village by constructing a vital road that connects the community to the rest of the Dodoma region.",
  },
  {
    number: 2,
    title: "Construction of a Mosque – Moanatwa Village, Dodoma Region",
    description: "Understanding the importance of spiritual spaces, we proudly built a mosque in Moanatwa village, providing the community with a place for worship and cultural gatherings.",
  },
  {
    number: 3,
    title: "Morgue Washing Area Construction – Somanga, Kilwa District",
    description: "In Somanga, Kilwa District, we constructed a dedicated washing area at the local morgue, offering the community an essential facility that aligns with their cultural practices and enhances dignity in the care of the deceased.",
  },
  {
    number: 4,
    title: "Repair of Tarura Road – Kimea to Kiteme Village, Bukoba District",
    description: "As part of our commitment to infrastructure development, we repaired the Tarura road connecting Kimea and Kiteme villages in Bukoba District, ensuring smoother travel and better connectivity for the local population.",
  },
  {
    number: 5,
    title: "Supply of 30,000 Bricks for School Construction – Kiteme Primary School, Bukoba District",
    description: "We proudly supported the education sector by supplying 30,000 bricks for the construction of Kiteme Primary School. This contribution is helping to provide a safe and conducive learning environment for students.",
  },
  {
    number: 6,
    title: "Supply of Reflective Vests – Kiteme Primary School, Bukoba District",
    description: "Safety is a priority for us. We provided 1,200 reflective vests for the students of Kiteme Primary School to enhance their safety during their daily commute to and from school.",
  },
];

const Sustainability = () => {
  return (
    <div className="sustainability-page">
      <h1 className="sus-title">Corporate Social Responsibility (CSR)</h1>

      {csrActivities.map((activity) => (
        <div key={activity.number} className="sus-section">
          <div className="sus-number">{activity.number}.</div>
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Sustainability;
