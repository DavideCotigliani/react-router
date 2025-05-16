
import axios from "axios"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";


const Prodotti = () => {
    const [prodotti, setProdotti] = useState(null);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setProdotti(response.data);
        });
    }, []);

    return (
        <>

            <h2>Lista dei prodotti</h2>
            {prodotti === null ? (<div>Caricamento...</div>) : (
                <div className="container">
                    {prodotti.map((prodotto) => {
                        return (
                            <div className="none" key={prodotto.id}>
                                <NavLink to={`/prodotti/${prodotto.id}`}>
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={prodotto.image} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <div className="card-title">
                                                <h3>{prodotto.title}</h3>
                                            </div>
                                            <div className="card-price">
                                                <p>{prodotto.price}</p>
                                            </div>
                                            <div className="card-description">
                                                <p>{prodotto.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    })}
                </div >
            )}

        </>


    )
}

export default Prodotti
