import React from "react";
// import { Children } from "react";


function CardItem ({title, imgURL, isVisited, children, count}){
    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo alias, voluptate odio tempora velit?'
    
    return (
        <div className="rounded-md bg-zinc-950 hover:scale-105 transition-all ease-linear cursor-pointer">
            <img src= {imgURL} className="rounded-t-md " alt="la mia card" />
            <div className="flex flex-col p-4">
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray-500">{children}</p>
                { isVisited && <span>✅ visitata</span>}
                { !isVisited &&<span>❌ non visitata</span> }
            </div>
        </div>
    )
}

export default CardItem;        