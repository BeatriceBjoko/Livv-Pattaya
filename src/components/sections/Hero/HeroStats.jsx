import "./HeroStats.css";
import { useLanguage } from "../../../context/LanguageContext.jsx";

const HeroStats = () => {
	const { copy } = useLanguage();
	return (
		<div className="hero-stats">
			{copy.hero.stats.map((item, index) => (
				<div className="hero-stat" key={index}>
					{item.number ? (
						<>
							<span className="hero-stat-number">{item.number}</span>
							<span className="hero-stat-label">{item.label}</span>
						</>
					) : (
						<>
							<span className="hero-stat-title">{item.title}</span>
							<span className="hero-stat-description">{item.description}</span>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export default HeroStats;
