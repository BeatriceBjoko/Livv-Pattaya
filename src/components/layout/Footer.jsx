import "./Footer.css";
import { th } from "../../content/copy.th";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-branding">
					<h3 className="footer-logo">{th.footer.logo}</h3>

					<p className="footer-subtitle">{th.footer.subtitle}</p>

					<div className="footer-tagline">
						{th.footer.tagline.map((line, i) => (
							<p key={i}>{line}</p>
						))}
					</div>

					<a href="#contact" className="footer-cta">
						{th.footer.cta}
					</a>
				</div>

				<div className="footer-divider"></div>

				<div className="footer-links">
					{th.footer.links.map((link, i) => (
						<a key={i} href={link.href}>
							{link.label}
						</a>
					))}
				</div>

				<p className="footer-copy">
					© {new Date().getFullYear()} {th.footer.logo} – {th.footer.copyright}
				</p>
			</div>
		</footer>
	);
}
