import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CardItem from "../components/CardItem";


function CardsChildren(){
    const cities = useSelector((state) => state.cities.value)
    
    return (
      <>
        <Navbar></Navbar>
        <h1 className="text-3xl font-bold mb-10">Pagina CardChildren </h1>
        <div className="grid grid-cols-4 gap-5">
            {cities.map((city) => (
                <Link to={`/cards-children/${city.id}`} key={city.id}>
                    <CardItem
                        title= {city.name}
                        isVisited= {city.isVisited}
                        imgURL={city.imgUrl} >
                        {city.description}
                    </CardItem>
                </Link>
            ))}
        </div>
        <Outlet/>
      </>
    )
}
export default CardsChildren;        