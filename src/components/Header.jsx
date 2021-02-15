import React from 'react'
import pokemon from '../static/pokemon.png'

export default function Header() {
    return (
       <header className="flex bg-red-600 items-center justify-between px-5">
           <figure className="w-16 md:w-32 lg:w-42">
               <img src={pokemon} alt="XDDD"/>
           </figure>
           
               <ul className="flex space-x-8 py-4" >
                   <li>
                       <p>Chupame</p>
                   </li>
                   <li>
                       <p>la</p>
                   </li>
                   <li>
                       <p>Poronga</p>
                   </li>
                   </ul>
       </header>
    )

}
