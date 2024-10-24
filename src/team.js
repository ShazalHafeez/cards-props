import React from "react";
import Crad from "./card";
import p1 from "./pics/testimonial-1.jpg";
import p2 from "./pics/testimonial-2.jpg";
import p3 from "./pics/Yasir-Ali-Shah.png";

const Team = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          marginBottom: "25px",
        }}
      >
        Our Team
      </h1>
      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        <Crad
          profile={p1}
          name="DR. Alex Rahim"
          rank="Head of Department"
          prof="Senior Lecturer in Software Engineering at CUI Attock campus"
        ></Crad>
        <Crad
          profile={p2}
          name="DR. Ali Hassan"
          rank="Program Coordinator"
          prof="Associate Professor of Artificial Intelligence at CUI Attock campus"
        ></Crad>
        <Crad
          profile={p3}
          name="DR. Yaser Ali Shah"
          rank="OBE Convener"
          prof="Assistant Professor Computer Science at CUI Attock campus"
        ></Crad>
      </div>
    </div>
  );
};
export default Team;
