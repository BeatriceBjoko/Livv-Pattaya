import "./OurPhilosophy.css";
import { useLanguage } from "../../../context/LanguageContext";
import InfoCard from "../../InfoCard/InfoCard";

import { FiHome, FiClock, FiLock } from "react-icons/fi";

const ICONS = {
	home: <FiHome size={20} />,
	time: <FiClock size={20} />,
	lock: <FiLock size={20} />,
};

export default function OurPhilosophy() {
	const { copy } = useLanguage();
	return (
		<section id="philosophy" className="philosophy">
			<div className="container">
				<div className="philosophy-grid">
					<div className="philosophy-image">
						<img src="/philosophy.png" alt="Luxury home philosophy" />
					</div>

					<div className="philosophy-content">
						<h2 className="philosophy-title">{copy.philosophy.title}</h2>

						<p className="philosophy-text">
							{copy.philosophy.description.map((line, i) => (
								<span key={i}>
									{line}
									<br />
								</span>
							))}
						</p>

						<div className="philosophy-cards">
							{copy.philosophy.cards.map((card, index) => (
								<InfoCard key={index} icon={ICONS[card.icon]} title={card.title} lines={card.lines} variant="philosophy" />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
