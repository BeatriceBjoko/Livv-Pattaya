import "./Who.css";
import { useLanguage } from "../../../context/LanguageContext";
import InfoCard from "../../InfoCard/InfoCard";
import useRevealAnimation from "../../../hooks/useRevealAnimation";

import { FiHome, FiFeather, FiHeart, FiUsers } from "react-icons/fi";

const ICONS = {
	home: <FiHome size={20} />,
	feather: <FiFeather size={20} />,
	heart: <FiHeart size={20} />,
	users: <FiUsers size={20} />,
};

export default function Who() {
	const { copy, language } = useLanguage();
	const containerRef = useRevealAnimation(language);
	return (
		<section className="who" ref={containerRef}>
			<div className="container">
				<div className="who-header">
					<h2 className="who-title reveal">{copy.who.title}</h2>

					<p className="who-subtitle reveal">
						{copy.who.subtitle.map((line, i) => (
							<span key={i}>
								{line}
								<br />
							</span>
						))}
					</p>
				</div>

				<div className="who-cards">
					{copy.who.cards.map((card, index) => (
						<div key={index} className="who-card-wrapper reveal">
							<div className="who-number">{index + 1}</div>

							<InfoCard icon={ICONS[card.icon]} title={card.text} lines={[]} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
