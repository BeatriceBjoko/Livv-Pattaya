import { useLanguage } from "../../../context/LanguageContext.jsx";
import "./Hero.css";
import HeroStats from "./HeroStats.jsx";

const Hero = () => {
	const { copy } = useLanguage();
	return (
		<section className="hero">
			<div className="hero-image-wrapper">
				<div className="hero-image-cutout">
					<img src="/hero.png" alt="THE LIVV - Pattaya Luxury Living" className="hero-image" />
				</div>
			</div>

			<div className="hero-content">
				<div className="hero-text">
					<h1 className="hero-title">{copy.hero.title}</h1>
					<p className="hero-subtitle-en">{copy.hero.subtitleEn}</p>
					<p className="hero-subtitle-th">{copy.hero.subtitleTh}</p>
					<div className="hero-actions">
						<button
							className="btn-primary"
							onClick={() => {
								document.getElementById("contact")?.scrollIntoView({
									behavior: "smooth",
								});
							}}
						>
							{copy.nav.cta}
						</button>{" "}
						<button
							className="hero-btn hero-btn-secondary"
							onClick={() => {
								document.getElementById("philosophy")?.scrollIntoView({
									behavior: "smooth",
								});
							}}
						>
							{copy.hero.ctaSecondary}
						</button>
					</div>
				</div>
			</div>
			<HeroStats />
		</section>
	);
};

export default Hero;
