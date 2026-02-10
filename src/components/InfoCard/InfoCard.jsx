import "./InfoCard.css";

export default function InfoCard({ icon, number, title, lines }) {
	return (
		<div className="info-card">
			{number && <div className="info-card-number">{number}</div>}
			{icon && <div className="info-card-icon">{icon}</div>}

			<h3 className="info-card-title">{title}</h3>

			<div className="info-card-text">
				{lines.map((line, i) => (
					<p key={i}>{line}</p>
				))}
			</div>
		</div>
	);
}
