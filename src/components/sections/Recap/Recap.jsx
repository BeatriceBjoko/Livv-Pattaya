import "./Recap.css";
import { th } from "../../../content/copy.th";

export default function Recap() {
	return (
		<section className="recap">
			<div className="container">
				<div className="recap-card">
					<div className="recap-image">
						<img src="/recap-home.png" alt="Luxury interior" />
					</div>

					<div className="recap-content">
						<h2 className="recap-title">{th.recap.title}</h2>

						<p className="recap-text">
							{th.recap.lines.map((line, i) => (
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
