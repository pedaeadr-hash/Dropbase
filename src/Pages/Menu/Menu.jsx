import "./Menu.css"
import "./MenuSection.css"
import Logo from "../../assets/icon.svg"
import Grid from "../../assets/grid-white.png"
function Menu () {
    return (
        <div className="Mbody">
            <header><img className="Mlogoheader" src={Logo} alt="" /><p>DROPBASE</p><img className="Mlogoheader2" src={Grid} alt="" /></header>
            <section className="MbodySection"></section>
        </div>
    )
} export default Menu