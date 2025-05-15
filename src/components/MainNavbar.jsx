import { NavLink } from "react-router-dom"

const MainNavbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><NavLink className="custom-link" to="/">HomePage</NavLink></li>
                        <li><NavLink className="custom-link" to="/chisiamo">Chi Siamo</NavLink></li>
                        <li><NavLink className="custom-link" to="/prodotti">Prodotti</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default MainNavbar
