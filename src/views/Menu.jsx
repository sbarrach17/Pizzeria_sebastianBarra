// para home
import React, { useContext } from "react";
import MyContext from "../MyContext";
import MenuCard from "../components/MenuCard";
import "../assets/Css/Menu.css";

const Menu = () => {
    const { pizzas } = useContext(MyContext);

    if (pizzas.length === 0) {
        return <p>No hay pizzas disponibles.</p>;
    }

    return (
        <div className="gallery grid-columns">
            {pizzas.map((pizza, i) => (
                <MenuCard key={i} pizza={pizza} />
            ))}
        </div>
    );
};

export default Menu;
