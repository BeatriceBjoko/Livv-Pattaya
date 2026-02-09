import "./HeroStats.css";
import { th } from "../../../content/copy.th";

const HeroStats = () => {
	return (
		<div className="hero-stats">
			{th.hero.stats.map((item, index) => (
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
