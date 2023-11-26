import Navbar from "./components/Navbar";
import Home from "./views/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MyContext from "./MyContext";
import PizzaDetails from "./components/PizzaDetails";
import Carro from "./views/Carro";
import ImageModal from "./components/ImageModal";
import NotFound from "./views/NotFound";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const endpoint = "../pizzas.json";
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        axios.get(endpoint).then((res) => {
            setPizzas(res.data);
        });
    }, []);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const globalState = { pizzas, setPizzas, cart, setCart, addToCart };
    return (
        <>
            <Navbar />
            <MyContext.Provider value={globalState}>
                {isModalOpen && (
                    <ImageModal isOpen={isModalOpen} onClose={closeModal} />
                )}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pizza/:name" element={<PizzaDetails />} />
                    <Route path="/carro" element={<Carro />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </MyContext.Provider>
        </>
    );
}

export default App;
