import { Link } from "react-router-dom";
import Favorites from "./Favorites";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
			<div className="container">
				<Link to="/" className="navbar-brand d-flex align-items-center gap-2">
					<img
						src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png"
						style={{ width: '120px', height: '65px', objectFit: 'contain', backgroundColor: "white" }}
						alt="Logo StarWars"
					/>
					<span className="fw-semibold">Star Wars Blog</span>
				</Link>
				<div className="ms-auto">
					<Favorites />
				</div>
			</div>
		</nav>
	);
};
