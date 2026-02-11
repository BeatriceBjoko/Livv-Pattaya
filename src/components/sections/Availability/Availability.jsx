import "./Availability.css";
import { useLanguage } from "../../../context/LanguageContext";
import HomeCard from "../../HomeCard/HomeCard";

export default function Availability() {
	const { copy } = useLanguage();
	return (
		<section id="availability" className="availability">
			<div className="container">
				<div className="availability-header">
					<h2 className="availability-title">{copy.availability.title}</h2>

					<p className="availability-text">
						{copy.availability.lines.map((line, i) => (
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
							{copy.availability.sidebar.map((line, i) => (
								<p key={i}>{line}</p>
							))}
						</div>

						<div className="availability-homes-scroll">
							{copy.availability.homes.map((home, i) => (
								<HomeCard key={i} image={home.image} title={home.title} price={home.price} tags={home.tags} photos={home.photos} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
