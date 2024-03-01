import { useState } from 'react';
import { Link ,useParams } from 'react-router-dom';
import { useFetchProductDetail } from '../../hooks/useFetchProductDetail';

export default function MeliProductDetail() {
    const {id} = useParams();
    const {productDetail, description} = useFetchProductDetail(id);
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    const isLongDescription = description && description.split('\n').length > 5;

    let displayedDescription = description;
    if (description && !showMore && isLongDescription) {
        displayedDescription = description.split('\n').slice(0, 5).join('\n');
    }


    return (
        <section className="section-container">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img
                        className="img-fluid rounded"
                        src={productDetail.thumbnail}
                        alt={productDetail.title}
                        style={{
                            maxHeight: '150px',
                            maxWidth: '150px',
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <h2>{productDetail.title}</h2>
                    <p>
                        {productDetail.currency_id ? (
                            <span>
                                {Number(productDetail.price).toLocaleString("es-CO", {
                                    style: 'currency',
                                    currency: productDetail.currency_id
                                })}
                            </span>
                        ) : (
                            <span className="text-muted">Precio no disponible</span>
                        )}
                    </p>
                    <div className="mt-2 d-flex">
                        <button className="btn buy-btn">Comprar</button>
                        <button className="btn go_back-btn mr-2 ms-2" onClick={() => window.history.back()}>Volver</button>
                        <Link to="/" className="btn home-btn ms-2">Home</Link>
                    </div>
                </div>
            </div>
            {description && (
                <div className="mt-4">
                    <h3>Descripción del Producto</h3>
                    <p>{displayedDescription}</p>
                    {isLongDescription && (
                        <button className="btn btn-link" onClick={handleShowMore}>
                            {showMore ? 'Ver menos' : 'Ver más'}
                        </button>
                    )}
                </div>
            )}
        </section>
    )
}
