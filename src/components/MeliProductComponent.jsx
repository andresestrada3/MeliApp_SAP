import { Link, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { useFetchProducts } from "../hooks/useFetchProducts"
import { useContext, useMemo } from "react";
import { AuthContext } from "../context/AuthContext";

export  function MeliProductComponent() {

    const location = useLocation();
    let {q = '' } = queryString.parse(location.search);

    if (!q) {
        q = 'celulares';
    }

    const {products} = useFetchProducts (q);

    const authContext = useContext(AuthContext);

    const {isMobile} = useMemo(() => authContext, [authContext]);

    return (
        <section className="mt-4">
            <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
                {products.map(pd => (
                    <div key={pd.id} className="col">
                        <Link to={`product/${pd.id}`} className="text-decoration-none">
                            <div className="card h-100 p-2">
                                <div className="row g-0">
                                    <div className="col-md-4" style={{textAlign: isMobile ? 'center' : 'initial'}}>
                                        <img src={pd.thumbnail} 
                                            className="card-img-top" 
                                            alt={pd.title} 
                                            style={{ 
                                                maxHeight: '150px',
                                                maxWidth: isMobile ? '150px' : 'initial'
                                            }} 
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{pd.title}</h5>
                                            <p className="card-text">
                                                {pd.currency_id ? 
                                                    <span>{Number(pd.price).toLocaleString("es-CO", {
                                                        style: 'currency',
                                                        currency: pd.currency_id
                                                    })}</span> 
                                                    : <span className="text-muted">Precio no disponible</span>
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}
