import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Pokemoness from "../components/Pokemoness.jsx";

function Principal() {
  const [Pokemones, setPokemones] = useState([]);
  useEffect(() => {
    async function inicial() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
      );
      const json = await response.json();
      return json;
    }
    inicial()
      .then((M) => {
        setPokemones(M.results);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <>
      <Header />
      <div className="grid grid-cols-4 m-4 gap-4">
        {Pokemones.map((pokemon) => {
          return (
            <div className="grid-span-1">
              <Pokemoness pokemon={pokemon}/>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Principal;
