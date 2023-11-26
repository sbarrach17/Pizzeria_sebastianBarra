import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Css/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
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
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="active">
                                <img src="/icon/iconMenu1.png" alt="" />
                                Menú
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/carro" activeClassName="active">
                                <img src="/icon/iconCart1.png" alt="" />
                                Carro
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
