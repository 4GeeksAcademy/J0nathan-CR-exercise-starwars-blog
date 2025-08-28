import { useEffect } from "react";
import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const baseUrl = 'https://www.swapi.tech/api/';

export const Home = () => {
	const { store, dispatch } = useGlobalReducer()

	const getInfoStarWars = async (feature) => {
		try {
			const response = await fetch(baseUrl + feature);
			if (!response.ok) {
				throw Error('Problema al obtener información de la api');
			}
			const data = await response.json();
			dispatch({ type: 'set_starwars', payload: { feature: feature, results: data.results } });
		} catch (e) {
			console.error('Error en la solicitud HTTP: ', e)
		}
	}

	useEffect(() => {
		getInfoStarWars('people');
		getInfoStarWars('vehicles');
		getInfoStarWars('planets');
	}, [])

	function handleAddFavorite(feature, name, uid) {
		dispatch({ type: 'add_favorite', payload: { featureFav: feature, name: name, uid: uid } })
	}

	return (
		<div className="container">
			{Object.entries(store.starWars).map(([feature, results]) => {
				return (feature != 'favorites' &&
					<div key={feature} className="row mt-4">
						<h2 className="text-warning fw-semibold mb-3 border-bottom pb-2 text-capitalize">
							{feature}
						</h2>
						<div className="row flex-nowrap overflow-x-auto pb-2">
							{results.map((result) => {
								return (
									<Card
										key={result.uid}
										feature={feature}
										result={result}
										onFavorite={() => { handleAddFavorite(feature, result.name, result.uid) }}
									/>
								);
							})}
						</div>
					</div>)
			})}
		</div>
	);
};
