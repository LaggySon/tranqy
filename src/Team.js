import React from "react";

const Team = ({ name, link, sheet, tier, id }) => {
  return (
    <div className="team">
      <div id="teamimg">
        <a href={sheet}>
          <img src={link} />
        </a>
      </div>
      <p>Name: {name}</p>
      <p>ID: {id}</p>
      <p>Tier: {tier}</p>
    </div>
  );
};

export default Team;
