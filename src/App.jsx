
import Menu from "./Pages/Menu/Menu";
import {BrowserRouter, Route ,Routes} from "react-router-dom";
function Rotas (){
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Menu/>}/>

        
    </Routes>
    
    </BrowserRouter>
  )
} export default Rotas