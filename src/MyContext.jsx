import { createContext } from "react";

const MyContext = createContext({
    pizzas: [],
    setPizzas: () => {},
    add: [],
    setAdd: () => {},
    cart: [], // New cart state
    setCart: () => {}, // Function to update cart state
});

export default MyContext;
