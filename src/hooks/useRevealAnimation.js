import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useRevealAnimation = (language) => {
	const containerRef = useRef(null);
	const animationsRef = useRef([]);

	useEffect(() => {
		const elements = containerRef.current?.querySelectorAll(".reveal") || [];

		if (!elements.length) return;

		const isMobile = window.innerWidth <= 768;

		if (isMobile) {
			elements.forEach((el) => {
				gsap.set(el, { opacity: 1, y: 0 });
			});
			return;
		}

		// Kill old animations
		animationsRef.current.forEach((animation) => {
			animation.scrollTrigger?.kill();
			animation.kill();
		});
		animationsRef.current = [];

		elements.forEach((element) => {
			const tween = gsap.fromTo(
				element,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power2.out",
					scrollTrigger: {
						trigger: element,
						start: "top 85%",
						toggleActions: "play none none none",
					},
				},
			);

			animationsRef.current.push(tween);
		});

		ScrollTrigger.refresh();

		return () => {
			animationsRef.current.forEach((animation) => {
				animation.scrollTrigger?.kill();
				animation.kill();
			});
			animationsRef.current = [];
		};
	}, [language]);

	return containerRef;
};

export default useRevealAnimation;
