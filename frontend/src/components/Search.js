import React, { useEffect, useState, useContext } from "react";
import "../css/Search.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Search() {
  
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const fetchUsers = (query) => {
    setSearch(query);
    fetch("/search-users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        setSearchResult(results.user);
      });
  };

  return (
    <div className="searchcolumn">
      <div className="searchbox">
        <p className="p">Search</p>
        <input
          className="searchinput"
          type="text"
          placeholder="Search users"
          value={search}
          onChange={(e) => fetchUsers(e.target.value)}
        />

        <ul>
          {searchResult.map((item) => {
            return (
              <Link to={`/profile/${item._id}`} className="link">
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
