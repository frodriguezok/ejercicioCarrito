import React, { Fragment } from "react";
import Productos from "./Productos";
import '../body.css';

const CarritoCompras = ({carrito}) => {
    return(
        <Fragment>
            <h3 className="carrito">Carrito de compras</h3>
                <div >
                    {
                        carrito.map(
                            articulo => (
                                <Productos
                                    key={articulo.id}
                                    articulo = {articulo}  
                                />
                            )   
                        )
                    }
                </div>
        </Fragment>
    );
}

export default CarritoCompras;