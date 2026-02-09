import "./OurPhilosophy.css";
import { th } from "../../../content/copy.th.js";

import { FiHome, FiClock, FiLock } from "react-icons/fi";

const ICONS = {
	home: <FiHome size={20} />,
	time: <FiClock size={20} />,
	lock: <FiLock size={20} />,
};

export default function OurPhilosophy() {
	return (
		<section className="philosophy">
			<div className="container">
				<div className="philosophy-grid">
					<div className="philosophy-image">
						<img src="/philosophy.png" alt="Luxury home philosophy" />
					</div>

					<div className="philosophy-content">
						<h2 className="philosophy-title">{th.philosophy.title}</h2>

						<p className="philosophy-text">
							{th.philosophy.description.map((line, i) => (
								<span key={i}>
									{line}
									<br />
								</span>
							))}
						</p>

						<div className="philosophy-cards">
							{th.philosophy.cards.map((card, index) => (
								<div key={index} className="philosophy-card">
									<div className="philosophy-card-icon">{ICONS[card.icon]}</div>

									<h3 className="philosophy-card-title">{card.title}</h3>

									<div className="philosophy-card-text">
										{card.lines.map((line, i) => (
											<p key={i}>{line}</p>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
