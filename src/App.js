// IMPORT FILES
import './App.css';
import './components/Header.css';
import './components/Hero.css';

// IMPORT ALL COMPONENTS
import { HeaderStructure } from './components/Header.js';
import { HeroStructure } from './components/Hero.js';

// RETURN ALL COMPONENTS
function App() {
	return (<>
		<HeaderStructure />
		<HeroStructure />
	</>);
}

export default App;
