import "./Generations.css";
import { th } from "../../../content/copy.th";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Generations() {
	const slide = th.Generations.slides[0];

	return (
		<section className="generations">
			<div className="container">
				<div className="generations-header">
					<h2 className="generations-section-title">{th.Generations.sectionTitle}</h2>
					<p className="generations-section-subtitle">{th.Generations.sectionSubtitle}</p>
				</div>

				<div className="generations-card">
					<div className="generations-image">
						<img src={slide.image} alt={slide.title} />
					</div>

					<div className="generations-content">
						<h3 className="generations-title">{slide.title}</h3>
						<p className="generations-subtitle">{slide.subtitle}</p>

						<ul className="generations-list">
							{slide.points.map((point, index) => (
								<li key={index}>{point}</li>
							))}
						</ul>
					</div>

					<button className="generations-arrow left" aria-label="Previous">
						<FiChevronLeft size={20} />
					</button>

					<button className="generations-arrow right" aria-label="Next">
						<FiChevronRight size={20} />
					</button>
				</div>

				<div className="generations-dots">
					<span className="dot active" />
					<span className="dot" />
					<span className="dot" />
				</div>
			</div>
		</section>
	);
}
