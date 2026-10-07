import "./Menu.css"
import Logo from "../../assets/icon.svg"
import Grid from "../../assets/grid-white.png"
function Menu () {
    return (
        <div className="Mbody">
            <header><img className="Mlogoheader" src={Logo} alt="" /><p>DROPBASE</p><img className="Mlogoheader2" src={Grid} alt="" /></header>
            <section><p>1</p><p>2</p><p>5</p></section>
        </div>
    )
} export default Menu