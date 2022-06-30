import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';
import CarritoCompras from './components/CarritoCompras';
import Container from 'react-bootstrap/Container';
import { Row, Col} from 'react-bootstrap';

function App() {

  const [articulos, guardarArticulos] = useState([
    {id:0,nombre:"Guitarra electrica", precio:"20000"},
    {id:1,nombre:"Bajo",precio:"18900"},
    {id:2,nombre:"Bateria",precio:"50000"},
    {id:3,nombre:"Microfono",precio:"5600"},
  ])

  const [carritoCompras, agregarProducto] = useState([]);

  return (
    <Fragment>
      <Header
      titulo="¡Bienvenido a la tienda musical!"
      />
      <Container>
        <Row>
          <Col>
            <div>  
            <h4 className='listado'>Listado de productos</h4>
                {
                  articulos.map(
                    articulo => (
                      <Productos
                        articulo={articulo}
                        key={articulo.id}
                        articulos={articulos}
                        carritoCompras={carritoCompras}
                        agregarProducto ={agregarProducto}
                      />
                    )
                  )
                }
            </div>
          </Col>
          <Col>
            <div>
              <CarritoCompras
                carrito={carritoCompras}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Fragment>
  );
}

export default App;
