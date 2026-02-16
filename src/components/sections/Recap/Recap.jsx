import "./Recap.css";
import { useLanguage } from "../../../context/LanguageContext";
import useRevealAnimation from "../../../hooks/useRevealAnimation";
export default function Recap() {
	const { copy, language } = useLanguage();
	const containerRef = useRevealAnimation(language);
	return (
		<section className="recap" ref={containerRef}>
			<div className="container">
				<div className="recap-card reveal">
					<div className="recap-image reveal">
						<img src="/recap-home.png" alt="Luxury interior" />
					</div>

					<div className="recap-content">
						<h2 className="recap-title reveal">{copy.recap.title}</h2>

						<p className="recap-text reveal">
							{copy.recap.lines.map((line, i) => (
								<span key={i}>
									{line}
									<br />
								</span>
							))}
						</p>

						<div className="recap-actions reveal">
							<button
								className="recap-btn-primary"
								onClick={() => {
									document.getElementById("contact")?.scrollIntoView({
										behavior: "smooth",
									});
								}}
							>
								{copy.nav.cta}
							</button>
							<button className="recap-btn-secondary">Speak to LIVV Advisor</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
