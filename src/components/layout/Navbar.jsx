import "./Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../../context/LanguageContext";
import { FiGlobe, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
	const { copy, language, switchLanguage } = useLanguage();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleNavClick = (id) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
		});
		setMobileMenuOpen(false);
	};

	return (
		<header className="navbar">
			<div className="container">
				<div className="navbar-inner">
					<div className="navbar-logo">
						<span>THE</span>
						<span>LIVV</span>
						<span>-PATTAYA-</span>
					</div>

					<nav className={`navbar-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
						<a href="#philosophy" onClick={() => handleNavClick("philosophy")}>
							{copy.nav.philosophy}
						</a>
						<a href="#location" onClick={() => handleNavClick("location")}>
							{copy.nav.location}
						</a>
						<a href="#living" onClick={() => handleNavClick("living")}>
							{copy.nav.living}
						</a>
						<a href="#availability" onClick={() => handleNavClick("availability")}>
							{copy.nav.availability}
						</a>

						<div className="navbar-mobile-actions">
							<button className="btn-primary" onClick={() => handleNavClick("contact")}>
								{copy.nav.cta}
							</button>
							<LanguageSwitcher />
						</div>
					</nav>

					<div className="navbar-actions">
						<button className="btn-primary" onClick={() => handleNavClick("contact")}>
							{copy.nav.cta}
						</button>

						<LanguageSwitcher />
					</div>

					<button className="navbar-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
						{mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
					</button>
				</div>
			</div>
		</header>
	);
}
