import { NavLink } from "react-router-dom"

const MainNavbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <NavLink to="/">HomePage</NavLink>
                        <NavLink to="/chisiamo">Chi Siamo</NavLink>
                        <NavLink to="/prodotti">Prodotti</NavLink>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default MainNavbar
