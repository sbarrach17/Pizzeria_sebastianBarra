import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
    <h4 className="notFoundHeader">Lo sentimos, no encontramos la URL que solicitaste</h4>
    <h5 className="notFoundSubheader">Te invitamos a visitar nuestro menú</h5>
    <Link to="/" className="nav-link text-white fw-medium fs-5">
        <button type="button" class="btn btn-danger">
            Menú
        </button>
    </Link>
</div>
  )
}

export default NotFound