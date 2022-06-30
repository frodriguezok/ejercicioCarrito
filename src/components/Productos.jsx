import React, { Fragment } from "react";
import '../body.css';

const Productos = ({articulo,articulos, carritoCompras,agregarProducto}) => {

    const {id,nombre,precio} = articulo;

    const seleccionarProducto = (id) => {
        const articulo = articulos.filter(articulo => articulo.id === id)[0];
        agregarProducto([...carritoCompras,articulo]);
    };

    return(
        <Fragment>
            <div className="listado">
               <p>ID: {id} || NOMBRE: {nombre} || PRECIO: {precio}</p>
               <button type="button" className="btn btn-light btn-sm" onClick={() => seleccionarProducto(id)}>Comprar</button>
            </div>
        </Fragment>
    );
}

export default Productos;