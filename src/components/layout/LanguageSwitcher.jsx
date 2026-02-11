import { useState, useRef, useEffect } from "react";
import { FiGlobe } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
	const { language, switchLanguage } = useLanguage();
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const toggleDropdown = () => {
		setOpen((prev) => !prev);
	};

	const changeLanguage = (lang) => {
		switchLanguage(lang);
		setOpen(false);
	};

	return (
		<div className="language-switcher" ref={dropdownRef}>
			<button className="lang-trigger" onClick={toggleDropdown}>
				<FiGlobe size={16} />
				<span>{language === "th" ? "TH" : "EN"}</span>
			</button>

			{open && (
				<div className="lang-dropdown">
					<button className={`lang-option ${language === "th" ? "active" : ""}`} onClick={() => changeLanguage("th")}>
						TH
					</button>

					<button className={`lang-option ${language === "en" ? "active" : ""}`} onClick={() => changeLanguage("en")}>
						EN
					</button>
				</div>
			)}
		</div>
	);
}
