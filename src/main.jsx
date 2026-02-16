import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/global.css";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

const setVH = () => {
	document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
};

setVH();
window.addEventListener("resize", setVH);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<LanguageProvider>
			<App />
		</LanguageProvider>
	</StrictMode>,
);
