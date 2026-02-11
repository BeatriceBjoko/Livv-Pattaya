import "./Who.css";
import { th } from "../../../content/copy.th";
import InfoCard from "../../InfoCard/InfoCard";

import { FiHome, FiFeather, FiHeart, FiUsers } from "react-icons/fi";

const ICONS = {
	home: <FiHome size={20} />,
	feather: <FiFeather size={20} />,
	heart: <FiHeart size={20} />,
	users: <FiUsers size={20} />,
};

export default function Who() {
	return (
		<section className="who">
			<div className="container">
				<div className="who-header">
					<h2 className="who-title">{th.who.title}</h2>

					<p className="who-subtitle">
						{th.who.subtitle.map((line, i) => (
							<span key={i}>
								{line}
								<br />
							</span>
						))}
					</p>
				</div>

				<div className="who-cards">
					{th.who.cards.map((card, index) => (
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
