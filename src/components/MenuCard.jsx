import React from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../MyContext";
import { useContext } from "react";

const MenuCard = ({ pizza }) => {
    const navigate = useNavigate();
    const { addToCart } = useContext(MyContext);

    const handleVerMasClick = () => {
        navigate(`/pizza/${pizza.name}`);
    };

    const handleAgregarClick = () => {
        addToCart(pizza);
        alert("Pizza agregada al carro");
    };

    return (
        <div key={pizza.name} className="card" style={{ width: "16em" }}>
            <img src={pizza.img} className="card-img-top" alt={pizza.name} />
            <div className="card-body">
                <h4 className="card-title">{pizza.name}</h4>
                <p className="card-text"> Ingredientes</p>
            </div>
            <ul className="list-group list-group-flush">
                {pizza.ingredients.map((ingredient, i) => (
                    <li className="list-group-item" key={i}>
                        <p>🍕 {ingredient} </p>
                    </li>
                ))}
            </ul>

            <h4 className="price text-center">
                {new Intl.NumberFormat("es-CL", {
                    style: "currency",
                    currency: "CLP",
                }).format(pizza.price)}
            </h4>
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-dark "
                    onClick={handleVerMasClick}
                >
                    Ver Más
                </button>
                <button
                    type="button"
                    className="btn btn-b btn-success"
                    onClick={handleAgregarClick}
                >
                    Agregar
                </button>
            </div>
        </div>
    );
};

export default MenuCard;
