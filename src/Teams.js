import React, { useState, useEffect } from "react";
import Team from "./Team";
function Teams() {
  const [team, setTeam] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const getTeams = (evt) => {
    fetch(`http://18.216.247.139:3000/teams`)
      .then((res) => res.json())
      .then((result) => {
        console.log(
          result.filter((team) =>
            team.name.toLowerCase().includes(query.toLowerCase())
          )
        );
        setTeam(
          result.filter(
            (team) =>
              team.name.toLowerCase().includes(query.toLowerCase()) ||
              team.tier.toLowerCase().includes(query.toLowerCase())
          )
        );
      });
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log(search);
    console.log(query);
    setSearch("");
  };

  function compare(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  useEffect(() => {
    getTeams();
  }, [query]);

  return (
    <div className="content">
      <h1>Teams</h1>
      <div className="textBody">
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            placeholder="Search for name or tier"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="TeamList">
          {team.map((team) => (
            <div id={team._id}>
              <Team
                name={team.name}
                link={team.link}
                tier={team.tier}
                sheet={team.sheet}
                id={team._id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
