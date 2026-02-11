import "./Recap.css";
import { useLanguage } from "../../../context/LanguageContext";
export default function Recap() {
	const { copy } = useLanguage();
	return (
		<section className="recap">
			<div className="container">
				<div className="recap-card">
					<div className="recap-image">
						<img src="/recap-home.png" alt="Luxury interior" />
					</div>

					<div className="recap-content">
						<h2 className="recap-title">{copy.recap.title}</h2>

						<p className="recap-text">
							{copy.recap.lines.map((line, i) => (
								<span key={i}>
									{line}
									<br />
								</span>
							))}
						</p>

						<div className="recap-actions">
							<button className="btn btn-primary">Request Private Viewing</button>

							<button className="btn btn-outline">Speak to LIVV Advisor</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
