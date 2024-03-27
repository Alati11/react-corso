import React from "react";
import { Link } from "react-router-dom"; 

function Navbar() {
    return (

        <ul className="flex text-3xl font-bold mb-10 gap-x-8 ">
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/contatti`}>Contatti</Link>
            </li>
            <li>
                <Link to={`/about`}>About</Link>
            </li>
            <li>
                <Link to={`/cards`}>Cards versione-1</Link>
            </li>
            <li>
                <Link to={`/cards-children`}>Cards versione-2</Link>
            </li>
        </ul>
    );
}

export default Navbar;