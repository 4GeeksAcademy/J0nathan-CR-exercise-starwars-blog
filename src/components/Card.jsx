import React from 'react'
import { Link } from 'react-router-dom';

const FALLBACK = "https://via.placeholder.com/200x300?text=No+Image";

const Card = (props) => {
    const result = props.result;

    return (
        <div
            className="card m-2 shadow-lg border-0 rounded-4 overflow-hidden"
            style={{ width: "18rem", transition: "transform .2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
            <div className="ratio ratio-16x9 bg-dark">
                <img
                    src="https://picsum.photos/200/300"
                    className="w-100 h-100 object-fit-cover"
                    alt={result.name}
                    onError={(e) => (e.currentTarget.src = FALLBACK)}
                />
            </div>
            <div className="card-body">
                <h5 className="card-title mb-2">{result.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/xinfo/${props.feature}/${result.uid}`}>
                        <button type="button" className="btn btn-outline-primary btn-sm">
                            Learn more
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={props.onFavorite}
                        title="Read later / Favorito"
                    >
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card
