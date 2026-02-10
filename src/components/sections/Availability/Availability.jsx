import "./Availability.css";
import { th } from "../../../content/copy.th";
import HomeCard from "../../HomeCard/HomeCard";

export default function Availability() {
	return (
		<section className="availability">
			<div className="container">
				<div className="availability-header">
					<h2 className="availability-title">{th.availability.title}</h2>

					<p className="availability-text">
						{th.availability.lines.map((line, i) => (
							<span key={i}>
								{line}
								<br />
							</span>
						))}
					</p>
				</div>

				<div className="availability-layout">
					<div className="availability-map">
						<iframe title="Project Location" src="https://www.google.com/maps?q=Pattaya&z=14&output=embed" loading="lazy" />
					</div>

					<div className="availability-content">
						<div className="availability-sidebar-header">
							{th.availability.sidebar.map((line, i) => (
								<p key={i}>{line}</p>
							))}
						</div>

						<div className="availability-homes-scroll">
							{th.availability.homes.map((home, i) => (
								<HomeCard key={i} image={home.image} title={home.title} price={home.price} tags={home.tags} photos={home.photos} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
