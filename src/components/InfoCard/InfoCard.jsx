import "./InfoCard.css";

export default function InfoCard({ leading, title, lines, variant = "philosophy" }) {
	return (
		<div className={`info-card info-card--${variant}`}>
			{leading && <div className="info-card-leading">{leading}</div>}

			<h3 className="info-card-title">{title}</h3>

			<div className="info-card-text">
				{lines.map((line, index) => (
					<p key={index}>{line}</p>
				))}
			</div>
		</div>
	);
}
