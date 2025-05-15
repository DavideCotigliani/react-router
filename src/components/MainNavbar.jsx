import { NavLink } from "react-router-dom"
const links = [
    {
        path: '/',
        label: 'Homepage',
    },
    {
        path: '/chisiamo',
        label: 'Chi Siamo',
    },
    {
        path: '/prodotti',
        label: 'Prodotti',
    }
]
const MainNavbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        {links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <NavLink className="custom-link" to={link.path}>{link.label}</NavLink>
                                </li>
                            )
                        })}
                        {/* <li><NavLink className="custom-link" to="/">HomePage</NavLink></li>
                        <li><NavLink className="custom-link" to="/chisiamo">Chi Siamo</NavLink></li>
                        <li><NavLink className="custom-link" to="/prodotti">Prodotti</NavLink></li> */}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default MainNavbar
