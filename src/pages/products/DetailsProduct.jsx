import { useParams, useNavigate } from "react-router-dom"
// Useparams restituisce un oggetto con i parametri che ho dichiaro nell'indirizzo (id, in questo caso)
import axios from "axios";
import { useEffect, useState } from "react";

const DetailsProduct = () => {
    // const params = useParams();
    // recupero il parametro dinamico dalla rotta
    const { id } = useParams();

    // definisco il metodo navigate
    const navigate = useNavigate();
    console.log(navigate);


    // definisco la variabile di stato che conterrà il prodotto
    const [product, setProduct] = useState({});

    // definizio funzione che recupera il prodotto
    const getSingleProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data);
        })
    }
    useEffect(() => {
        getSingleProduct();
    }, [])

    return (
        <div>
            <h1>Dettaglio prodotto</h1>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h1>{product.title}</h1>
                        <span><em>{product.category}</em></span>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                navigate(-1);
            }}>Torna indietro</button>
        </div>
    )
}

export default DetailsProduct
