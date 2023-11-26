import React, { useContext, useState, useEffect } from "react";
import MyContext from "../MyContext";
import CartItem from "./CartItem";
import "../assets/Css/Carro.css";

const Carro = () => {
    const { cart } = useContext(MyContext);
    const [totalAmount, setTotalAmount] = useState("");

    useEffect(() => {
        const newTotalAmount = cart.reduce((total, item) => {
            const itemPrice = item.price || 1;
            const itemQuantity = item.quantity || 1;
            return total + itemPrice * itemQuantity;
        }, 0);

        setTotalAmount(newTotalAmount);
    }, [cart]);

    const handleIrAPagar = () => {
        alert(
            `¡Gracias por tu compra! Estamos trabajando en el envío de tus productos, pronto podrás disfrutarlos`
        );
    };

    return (
        <div className="cartContainer">
            <div className="cartDetails">
                {cart.length === 0 ? (
                    <h2 className="text-center ">
                        No hay productos agregados al carro.
                    </h2>
                ) : (
                    <>
                        {cart.map((pizza) => (
                            <CartItem key={pizza.id} pizza={pizza} />
                        ))}
                        <div className="p-2 text-start">
                            <h4>
                                Total:{" "}
                                {new Intl.NumberFormat("es-CL", {
                                    style: "currency",
                                    currency: "CLP",
                                }).format(totalAmount)}
                            </h4>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={handleIrAPagar}
                            >
                                Ir a Pagar
                            </button>
                        </div>
                    </>
                )}
                <div className="modalBox"></div>
            </div>
        </div>
    );
};

export default Carro;
