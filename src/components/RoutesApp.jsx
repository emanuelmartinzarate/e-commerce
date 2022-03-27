import ItemListContainer from "./ItemListContainer"
import NavBar from "./NavBar"

function RoutesApp() {
  return (
    <div className="App">
        
        <NavBar/>
        <ItemListContainer saludo='Contador'/>
    </div>
  )
}

export default RoutesApp