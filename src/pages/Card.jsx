import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Card() {
    const {cardID} = useParams();
    console.log(cardID);

    const cities = useSelector((state) => 
    state.cities.value.filter((city) => city.id == cardID.toString())
    );  
    console.log(cities,);

    return (
        <>
            {/* <Navbar></Navbar> */}
            <h1 className="text-3xl font-bold mb-10">{cities[0].name}</h1>
            <div className="flex flex-col p-4">
                {cities[0].isVisited && (
                    <span className="text-green-600"> ✅  Visitata</span>
                )}
                {!cities[0].isVisited && (
                    <span className="text-red-600"> ❌  Non Visitata</span>
                )}
            </div>
            <img 
                src={cities[0].imgUrl}
                className="rounded-t-md"
                alt="la mia card"
                width="400"
            />      
        </>
    );  
}

export default Card;