import React from 'react'
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

const FALLBACK = "https://via.placeholder.com/200x300?text=No+Image";

const Card = (props) => {
    const result = props.result;
    const feature = props.feature; // "people" | "vehicles" | "planets" etc.

    const { store, dispatch } = useGlobalReducer();

    // ¿Este item ya está en favoritos?
    const isFavorite = store.starWars.favorites.some(
        (fav) => fav.uid === result.uid && fav.featureFav === feature
    );

    const handleFavoriteClick = () => {
        if (isFavorite) {
            // Quitar de favoritos
            const favoritesUpdate = store.starWars.favorites.filter(
                (fav) => !(fav.uid === result.uid && fav.featureFav === feature)
            );

            dispatch({
                type: 'delete_favorite',
                payload: favoritesUpdate
            });
        } else {
            // Agregar a favoritos
            dispatch({
                type: 'add_favorite',
                payload: {
                    featureFav: feature,
                    name: result.name,
                    uid: result.uid
                }
            });
        }
    };

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
                    <Link to={`/xinfo/${feature}/${result.uid}`}>
                        <button type="button" className="btn btn-outline-primary btn-sm">
                            Learn more
                        </button>
                    </Link>
                    <button
                        type="button"
                        className={`btn btn-sm ${isFavorite ? 'btn-danger' : 'btn-warning'}`}
                        onClick={handleFavoriteClick}
                        title="Read later / Favorito"
                    >
                        <i className="fa-solid fa-heart"></i>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Card;
