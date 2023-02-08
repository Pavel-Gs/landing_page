// IMPORT FILES
import './App.css';
import './components/Header.css';
import './components/Hero.css';
import './components/About.css';
import './components/Highlights.css';

// IMPORT ALL COMPONENTS
import { HeaderStructure } from './components/Header.js';
import { HeroStructure } from './components/Hero.js';
import { AboutStructure } from './components/About.js';
import { HighlightsStructure } from './components/Highlights.js';

// RETURN ALL COMPONENTS
function App() {
	return (<>
		<HeaderStructure />
		<HeroStructure />
		<AboutStructure />
		<HighlightsStructure />
	</>);
}

export default App;
