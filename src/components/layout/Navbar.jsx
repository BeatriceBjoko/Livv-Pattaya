import "./Navbar.css";
import { th } from "../../content/copy.th";
import { FiGlobe } from "react-icons/fi";

export default function Navbar() {
	return (
		<header className="navbar">
			<div className="container">
				<div className="navbar-inner">
					<div className="navbar-logo">
						<span>THE</span>
						<span>LIVV</span>
						<span>-PATTAYA-</span>
					</div>

					<nav className="navbar-nav">
						<a href="#philosophy">{th.nav.philosophy}</a>
						<a href="#location">{th.nav.location}</a>
						<a href="#living">{th.nav.living}</a>
						<a href="#availability">{th.nav.availability}</a>
					</nav>

					<div className="navbar-actions">
						<button className="btn-primary">{th.nav.cta}</button>

						<button className="lang-switch">
							<FiGlobe size={16} />
							<span>TH</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
