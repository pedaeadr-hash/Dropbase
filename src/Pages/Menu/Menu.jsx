import "./Menu.css"
import "./MenuSection.css"
import { useState } from "react"
import Logo from "../../assets/icon.svg"
import Grid from "../../assets/grid-white.png"
function Menu () {
    const [menu,setmenu] = useState(false);
    return (
        <div className="Mbody">
            <header><img className="Mlogoheader"  src={Logo} alt="" /><p>DROPBASE</p><img className="Mlogoheader2" onClick={()=>{setmenu(!menu)}} src={Grid} alt="" /></header>
            <section className="MbodySection"></section>
            <div className={`MenuM ${menu ? "active" : ""}`}><h1>oii</h1></div>
        </div>
    )
} export default Menu