import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import NavBar from "./NavBar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Cart from "./Cart"
import CartContextProvider from "./CartContext"

function RoutesApp() {
  return (
    // Nos da el ambito donde podemos aplicar cualquier funcion de routeo en los componentes hijos
    <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
          {/*Me permite agregar una ruta a los componentes que necesito  */}
          <Routes>
            {/* Asocia una ruta a mi componente */}
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}></Route>
            <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          </CartContextProvider>
    </BrowserRouter>
  )
}

export default RoutesApp