import React, { useState, useContext, useEffect } from "react";
import MyContext from "../MyContext";

const CartItem = ({ pizza }) => {
    const { cart, setCart } = useContext(MyContext);
    const [quantity, setQuantity] = useState(pizza.quantity || 1);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);

        const updatedCart = cart.map((item) =>
            item.id === pizza.id ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
    };

    const totalPrice = pizza.price * quantity;

    return (
        <div className="list">
            <div className="item text-capitalize" key={pizza.id}>
                <img className="photo" src={pizza.img} alt={pizza.name} />
                <h3 className="ms-5 ">{pizza.name}</h3>
            </div>
            <div className="price">
                <h4 className="me-2 text-primary">
                    {new Intl.NumberFormat("es-CL", {
                        style: "currency",
                        currency: "CLP",
                    }).format(totalPrice)}
                </h4>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() =>
                        handleQuantityChange(Math.max(quantity - 1, 1))
                    }
                >
                    -
                </button>
                <span>{quantity}</span>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleQuantityChange(quantity + 1)}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default CartItem;
