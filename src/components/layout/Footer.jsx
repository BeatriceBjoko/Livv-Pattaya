import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
	const { copy } = useLanguage();
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-branding">
					<h3 className="footer-logo">{copy.footer.logo}</h3>

					<p className="footer-subtitle">{copy.footer.subtitle}</p>

					<div className="footer-tagline">
						{copy.footer.tagline.map((line, i) => (
							<p key={i}>{line}</p>
						))}
					</div>

					<a href="#contact" className="footer-cta">
						{copy.footer.cta}
					</a>
				</div>

				<div className="footer-divider"></div>

				<div className="footer-links">
					{copy.footer.links.map((link, i) => (
						<a key={i} href={link.href}>
							{link.label}
						</a>
					))}
				</div>

				<p className="footer-copy">
					© {new Date().getFullYear()} {copy.footer.logo} – {copy.footer.copyright}
				</p>
			</div>
		</footer>
	);
}
