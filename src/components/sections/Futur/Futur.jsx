import "./Futur.css";
import { useLanguage } from "../../../context/LanguageContext";
import InfoCard from "../../InfoCard/InfoCard";

export default function Futur() {
	const { copy } = useLanguage();
	return (
		<section className="futur">
			<div className="container futur-grid">
				<div className="futur-content">
					<h2 className="futur-title">{copy.Futur.title}</h2>

					<p className="futur-text">
						{copy.Futur.description.map((line, i) => (
							<span key={i}>
								{line}
								<br />
							</span>
						))}
					</p>

					<div className="futur-cards">
						{copy.Futur.cards.map((card, index) => (
							<InfoCard key={index} number={card.number} title={card.title} lines={card.lines} />
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
