import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useRevealAnimation = (language) => {
	const containerRef = useRef(null);
	const animationsRef = useRef([]);

	useEffect(() => {
		if (!containerRef.current) return;

		const elements = containerRef.current.querySelectorAll(".reveal");
		if (!elements.length) return;

		animationsRef.current.forEach((animation) => {
			animation.scrollTrigger?.kill();
			animation.kill();
		});
		animationsRef.current = [];

		elements.forEach((element) => {
			const tween = gsap.fromTo(
				element,
				{ y: 30, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					ease: "power2.out",
					scrollTrigger: {
						trigger: element,
						start: "top 85%",
						toggleActions: "play none none none",
						once: true,
						invalidateOnRefresh: true,
					},
				},
			);

			animationsRef.current.push(tween);
		});

		// Refresh after layout stabilizes
		const refreshTimeout = setTimeout(() => {
			ScrollTrigger.refresh();
		}, 300);

		const handleLoad = () => {
			ScrollTrigger.refresh();
		};

		window.addEventListener("load", handleLoad);

		return () => {
			clearTimeout(refreshTimeout);
			window.removeEventListener("load", handleLoad);

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
