import React, { useEffect, useState } from "react";

export default function Pokemoness({ pokemon }) {
  const [Pokemon, setPokemon] = useState();

  useEffect(() => {
    async function inicio() {
      const response = await fetch(pokemon.url);
      const json = await response.json();
      return json;
    }

    inicio()
      .then((json) => {
        setPokemon(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-69 border-2 border-indigo-600 ">
      <div className="flex border-2 border-indigo-600">
        <img 
          src={Pokemon.sprites.front_default}
          alt="No hay datos para mostrar"
        />
         <img
          src={Pokemon.sprites.back_default}
          alt="No hay datos para mostrar"
        />
         <img
          src={Pokemon.sprites.front_shiny}
          alt="No hay datos para mostrar"
        />
      </div>
      <p className="flex justify-center border-2 border-indigo-600 m-6">
        Nombre del pokemon: {`${pokemon.name}`}
      </p>
    </div>
  );
}
