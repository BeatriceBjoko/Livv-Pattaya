import { th } from "../../../content/copy.th.js";
import "./Hero.css";
import HeroStats from "./HeroStats.jsx";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-image-wrapper">
				<div className="hero-image-cutout">
					<img src="/hero.png" alt="THE LIVV - Pattaya Luxury Living" className="hero-image" />
				</div>
			</div>

			<div className="hero-content">
				<div className="hero-text">
					<h1 className="hero-title">{th.hero.title}</h1>
					<p className="hero-subtitle-en">{th.hero.subtitleEn}</p>
					<p className="hero-subtitle-th">{th.hero.subtitleTh}</p>
					<div className="hero-actions">
						<button className="hero-btn hero-btn-primary">{th.hero.ctaPrimary}</button>
						<button className="hero-btn hero-btn-secondary">{th.hero.ctaSecondary}</button>
					</div>
				</div>
			</div>
			<HeroStats />
		</section>
	);
};

export default Hero;
