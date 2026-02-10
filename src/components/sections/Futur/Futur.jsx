import "./Futur.css";
import { th } from "../../../content/copy.th";
import InfoCard from "../../InfoCard/InfoCard";

export default function Futur() {
	return (
		<section className="futur">
			<div className="container futur-grid">
				<div className="futur-content">
					<h2 className="futur-title">{th.Futur.title}</h2>

					<p className="futur-text">
						{th.Futur.description.map((line, i) => (
							<span key={i}>
								{line}
								<br />
							</span>
						))}
					</p>

					<div className="futur-cards">
						{th.Futur.cards.map((card, index) => (
							<InfoCard key={index} number={card.number} title={card.title} lines={card.lines} />
						))}
					</div>
				</div>

				<div className="futur-image">
					<img src={th.Futur.image} alt={th.Futur.title} />
				</div>
			</div>
		</section>
	);
}
