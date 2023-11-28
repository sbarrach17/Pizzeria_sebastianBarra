import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Css/Navbar.css";
import { FaCartPlus } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand text-white">
                    <img
                        src="/icon/iconPizza1.png"
                        alt="Logo"
                        className="logo"
                    />
                    PIZZERIA MAMA MIA !
                </NavLink>
                <button
                    className="  navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ backgroundColor: "white" }}
                >
                    <span className=" navbar-toggler-icon "></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end align-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="active">
                                <MdRestaurantMenu className="icon text-dark" />{" "}
                                Menú
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/carro" activeClassName="active">
                                <FaCartPlus className="icon  text-dark" />{" "}
                                Carro
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacto" activeClassName="active">
                                <MdContactSupport className="icon text-dark" />{" "}
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
