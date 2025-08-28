import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer'
import { Link } from 'react-router-dom'

const Favorites = () => {
    const { store, dispatch } = useGlobalReducer()

    function handleDeleteFavorite(favoriteUid) {
        const favoritesUpdate = store.starWars.favorites.filter(
            favorite => favorite.uid !== favoriteUid
        )
        dispatch({ type: 'delete_favorite', payload: favoritesUpdate });
    }

    return (
        <div className="btn-group">
            <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Favorites {store.starWars.favorites && store.starWars.favorites.length}
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow">
                {store.starWars.favorites.length > 0 ? store.starWars.favorites.map(
                    (favorite) => {
                        return (
                            <li className="d-flex justify-content-between align-items-center" key={favorite.uid}>
                                <Link to={`/xinfo/${favorite.featureFav}/${favorite.uid}`}>
                                    <button className="dropdown-item">
                                        {favorite.name}
                                    </button>
                                </Link>
                                <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => { handleDeleteFavorite(favorite.uid) }}>
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </li>
                        )
                    }
                ) : (
                    <li>
                        <span className="dropdown-item text-secondary">(empty)</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Favorites
