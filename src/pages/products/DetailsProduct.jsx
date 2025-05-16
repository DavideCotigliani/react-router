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
    }, [id])

    return (
        <div>
            <h1>Dettaglio prodotto</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="single-card d-flex">
                            <div className="card-image">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="card-body bg-light">
                                <div className="single-card-title">
                                    <span><em>{product.category}</em></span>
                                    <h2>{product.title}</h2>
                                </div>
                                <div className=" single-card-description">
                                    <p>{product.description}</p>
                                    <p>{product.price}€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                navigate(`/prodotti/${parseInt(id) - 1}`);
            }}
                disabled={id == 1 ? true : false}>Torna indietro</button>
            <button onClick={() => {
                navigate(`/prodotti/${parseInt(id) + 1}`);
            }}>Vai avanti</button>
        </div >
    )
}

export default DetailsProduct
