import "./Navbar.css";
import { useLanguage } from "../../context/LanguageContext";
import { FiGlobe } from "react-icons/fi";

export default function Navbar() {
	const { copy, language, switchLanguage } = useLanguage();
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
						<a href="#philosophy">{copy.nav.philosophy}</a>
						<a href="#location">{copy.nav.location}</a>
						<a href="#living">{copy.nav.living}</a>
						<a href="#availability">{copy.nav.availability}</a>
					</nav>

					<div className="navbar-actions">
						<button
							className="btn-primary"
							onClick={() => {
								document.getElementById("contact")?.scrollIntoView({
									behavior: "smooth",
								});
							}}
						>
							{copy.nav.cta}
						</button>

						<button className="lang-switch" onClick={() => switchLanguage(language === "th" ? "en" : "th")}>
							<FiGlobe size={16} />
							<span>{language === "th" ? "TH" : "EN"}</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
