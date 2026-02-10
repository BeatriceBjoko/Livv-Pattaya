import Navbar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero/Hero";
import OurPhilosophy from "./components/sections/Philosophy/OurPhilosophy";
import Location from "./components/sections/Location/Location";
import Generations from "./components/sections/Generations/Generations";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<OurPhilosophy />
			<Location />
			<Generations />
		</>
	);
}

export default App;
