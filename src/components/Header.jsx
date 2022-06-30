import React, { Fragment } from "react";
import '../body.css';


const Header = ({titulo}) => {
    return (
        <Fragment>
            <div className="posicion">
                <h2 >{titulo}</h2>
                <input type="text" placeholder="Nombre de articulo" /><button>Buscar</button>
            </div>
        </Fragment>
    );
}

export default Header;