import "./Futur.css";
import { useLanguage } from "../../../context/LanguageContext";
import InfoCard from "../../InfoCard/InfoCard";
import useRevealAnimation from "../../../hooks/useRevealAnimation";

export default function Futur() {
	const { copy, language } = useLanguage();
	const containerRef = useRevealAnimation(language);
	return (
		<section className="futur" ref={containerRef}>
			<div className="container futur-grid">
				<div className="futur-content">
					<h2 className="futur-title reveal">{copy.Futur.title}</h2>

					<p className="futur-text reveal">
						{copy.Futur.description.map((line, i) => (
							<span key={i}>
								{line}
								<br />
							</span>
						))}
					</p>

					<div className="futur-cards">
						{copy.Futur.cards.map((card, index) => (
							<div key={index} className="reveal">
								<InfoCard number={card.number} title={card.title} lines={card.lines} />
							</div>
						))}
					</div>
				</div>

				<div className="futur-image">
					<img src={copy.Futur.image} alt={copy.Futur.title} />
				</div>
			</div>
		</section>
	);
}
