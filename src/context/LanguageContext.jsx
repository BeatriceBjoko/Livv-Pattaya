import { createContext, useContext, useState } from "react";
import { th } from "../content/copy.th";
import { en } from "../content/copy.en";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState("th");

	const copy = language === "th" ? th : en;

	const switchLanguage = (lang) => {
		// Start fade out
		document.body.classList.add("lang-transition");

		setTimeout(() => {
			setLanguage(lang);

			// Fade back in
			document.body.classList.remove("lang-transition");
		}, 200);
	};

	return <LanguageContext.Provider value={{ language, switchLanguage, copy }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	return useContext(LanguageContext);
}
