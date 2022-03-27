import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import NavBar from "./NavBar"

function RoutesApp() {
  return (
    <div className="App">
        
        <NavBar/>
        <ItemListContainer saludo='Contador'/>
        <ItemDetailContainer />
    </div>
  )
}

export default RoutesApp