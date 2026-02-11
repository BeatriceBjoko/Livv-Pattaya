import "./Who.css";
import { useLanguage } from "../../../context/LanguageContext";
import InfoCard from "../../InfoCard/InfoCard";

import { FiHome, FiFeather, FiHeart, FiUsers } from "react-icons/fi";

const ICONS = {
	home: <FiHome size={20} />,
	feather: <FiFeather size={20} />,
	heart: <FiHeart size={20} />,
	users: <FiUsers size={20} />,
};

export default function Who() {
	const { copy } = useLanguage();
	return (
		<section className="who">
			<div className="container">
				<div className="who-header">
					<h2 className="who-title">{copy.who.title}</h2>

					<p className="who-subtitle">
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
						<div key={index} className="who-card-wrapper">
							<div className="who-number">{index + 1}</div>

							<InfoCard icon={ICONS[card.icon]} title={card.text} lines={[]} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
