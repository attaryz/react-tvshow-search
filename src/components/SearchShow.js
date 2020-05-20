import React, { useState } from "react";
import ShowCard from './ShowCard'
import styles from "./SearchShow.module.css";
export default function SearchShow() {
  const [query, setQuery] = useState("");
  const [tv, setTv] = useState([]);
  const searchShow = async (e) => {
    e.preventDefault();
   // const query = "the originals";

    //const url = `https://api.themoviedb.org/3/search/show?api_key=3fe73a4bbd76c67bfd3a23034a2e25e6&language=en-US&query=${query}&page=1&include_adult=false`;
    //const url = `https://api.themoviedb.org/3/tv/{tv_id}?api_key=3fe73a4bbd76c67bfd3a23034a2e25e6&language=en-US`;
    const url = `https://api.themoviedb.org/3/search/tv?api_key=3fe73a4bbd76c67bfd3a23034a2e25e6&language=en-US&query=${query}&page=1&include_adult=false`;
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setTv(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={searchShow}>
        <input
          type="text"
          name="query"
          placeholder="Search..."
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      <div>
        {tv
          .filter((tv) => tv.poster_path)
          .map((tv) => (
            <ShowCard tv={tv} key={tv.id} />
          ))}
      </div>
    </>
  );
}
