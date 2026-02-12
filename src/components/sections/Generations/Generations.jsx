import "./Generations.css";
import { useLanguage } from "../../../context/LanguageContext";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useRevealAnimation from "../../../hooks/useRevealAnimation";

export default function Generations() {
	const { copy, language } = useLanguage();
	const slides = copy.Generations.slides;
	const [index, setIndex] = useState(0);
	const slide = slides[index];
	const containerRef = useRevealAnimation(language);

	function prevSlide() {
		setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	}

	function nextSlide() {
		setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	}

	return (
		<section id="living" className="generations" ref={containerRef}>
			<div className="container">
				<div className="generations-header">
					<h2 className="generations-section-title reveal">{copy.Generations.sectionTitle}</h2>
					<p className="generations-section-subtitle reveal">{copy.Generations.sectionSubtitle}</p>
				</div>

				<div className="generations-card reveal">
					<div className="generations-image">
						<img src={slide.image} alt={slide.title} />
					</div>

					<div className="generations-content">
						<h3 className="generations-title">{slide.title}</h3>
						<p className="generations-subtitle">{slide.subtitle}</p>

						<ul className="generations-list">
							{slide.points.map((point, i) => (
								<li key={i}>{point}</li>
							))}
						</ul>
					</div>

					<button className="generations-arrow left" onClick={prevSlide} aria-label="Previous">
						<FiChevronLeft size={20} />
					</button>

					<button className="generations-arrow right" onClick={nextSlide} aria-label="Next">
						<FiChevronRight size={20} />
					</button>
				</div>

				<div className="generations-dots">
					{slides.map((_, i) => (
						<span key={i} className={`dot ${i === index ? "active" : ""}`} onClick={() => setIndex(i)} />
					))}
				</div>
			</div>
		</section>
	);
}
