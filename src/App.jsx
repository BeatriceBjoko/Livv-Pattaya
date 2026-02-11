import Navbar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero/Hero";
import OurPhilosophy from "./components/sections/Philosophy/OurPhilosophy";
import Location from "./components/sections/Location/Location";
import Generations from "./components/sections/Generations/Generations";
import Futur from "./components/sections/Futur/Futur";
import Availability from "./components/sections/Availability/Availability";
import Who from "./components/sections/Who/Who";
import Recap from "./components/sections/Recap/Recap";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/layout/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<OurPhilosophy />
			<Location />
			<Generations />
			<Futur />
			<Availability />
			<Who />
			<Recap />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
