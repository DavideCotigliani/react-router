import MainNavbar from "../components/MainNavbar"
import axios from "axios"
import { useState, useEffect } from "react"

const Prodotti = () => {
    const [prodotti, setProdotti] = useState(null);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setProdotti(response.data);
        });
    }, []);

    return (
        <>
            <div>
                <MainNavbar />
                <h2>Lista dei prodotti</h2>
            </div>
            {prodotti === null ? (<div>Caricamento...</div>) : (
                <div className="row">
                    {prodotti.map((prodotto) => {
                        return (
                            <div className="div" key={prodotto.id}>
                                <img src={prodotto.image} alt="" />
                                <h3>{prodotto.title}</h3>
                                <p>{prodotto.price}</p>
                                <p>{prodotto.description}</p>
                            </div>
                        );
                    })}
                </div>
            )}

        </>


    )
}

export default Prodotti
