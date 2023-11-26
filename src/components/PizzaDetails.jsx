import { useParams } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../MyContext";
import "../assets/Css/Pizza.css";

const PizzaDetails = () => {
    const { name } = useParams();
    const { pizzas, addToCart } = useContext(MyContext);

    const pizza = pizzas.find((p) => p.name === name);

    if (!pizza) {
        return <p>No hay Pizzas</p>;
    }

    const handleAgregarClick = () => {
        addToCart(pizza);
        alert("Pizza agregada al carro");
    };

    return (
        <div className="container d-flex justify-content-center p-5">
            <div className="card mb-3" style={{ maxWidth: "700px" }}>
                <div className="row g-0">
                    <div className="  col-lg-6">
                        <img
                            src={pizza.img}
                            className="img-fluid"
                            alt={pizza.name}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h3 className="card-title">{pizza.name}</h3>
                            <p className="card-text">{pizza.desc}</p>
                            <ul className="list-group list-group-flush">
                                {pizza.ingredients.map((ingredient, i) => (
                                    <li className="list-group-item" key={i}>
                                        <p>🍕 {ingredient} </p>
                                    </li>
                                ))}
                            </ul>
                            <h4 className="price">
                                {new Intl.NumberFormat("es-CL", {
                                    style: "currency",
                                    currency: "CLP",
                                }).format(pizza.price)}
                            </h4>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-success "
                                    onClick={handleAgregarClick}
                                >
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaDetails;

// 🍕
