
import Menu from "./Pages/Menu/Menu";
import {BrowserRouter, Route ,Routes} from "React-router-dom";
function Rotas (){
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Menu/>}/>

        
    </Routes>
    
    </BrowserRouter>
  )
} export default Rotas