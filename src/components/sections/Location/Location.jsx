import "./Location.css";
import { useLanguage } from "../../../context/LanguageContext";
import { FiSun, FiBriefcase, FiMapPin } from "react-icons/fi";

const ICONS = {
	nature: <FiSun size={20} />,
	work: <FiBriefcase size={20} />,
	city: <FiMapPin size={20} />,
};

export default function Location() {
	const { copy } = useLanguage();
	return (
		<section id="location" className="location">
			<div className="container location-grid">
				<div className="location-content">
					<h2 className="location-title">{copy.location.title}</h2>
					<p className="location-subtitle">{copy.location.subtitle}</p>

					<div className="location-moments">
						{copy.location.moments.map((item, i) => (
							<div key={i} className="location-moment">
								<div className="location-icon">{ICONS[item.icon]}</div>

								<div className="location-text">
									<h3>{item.title}</h3>
									{item.text.map((line, idx) => (
										<p key={idx}>{line}</p>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="location-images">
					<img src="/location-1.png" alt="" className="img-large" />
					<div className="img-row">
						<img src="/location-2.png" alt="" />
						<img src="/location-3.png" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}
