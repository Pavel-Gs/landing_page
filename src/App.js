// IMPORT FILES
import './App.css';
import './components/Header.css';
import './components/Hero.css';
import './components/About.css';
import './components/Highlights.css';
import './components/Projects.css';
import './components/Footer.css';
import './components/Disclaimer.css';

// IMPORT ALL COMPONENTS
import { HeaderStructure } from './components/Header.js';
import { HeroStructure } from './components/Hero.js';
import { AboutStructure } from './components/About.js';
import { HighlightsStructure } from './components/Highlights.js';
import { ProjectsStructure } from './components/Projects.js';
import { FooterStructure } from './components/Footer.js';
import { DisclaimerStructure } from './components/Disclaimer.js';

// RETURN ALL COMPONENTS
function App() {
	return (<>
		<HeaderStructure />
		<HeroStructure />
		<AboutStructure />
		<HighlightsStructure />
		<ProjectsStructure />
		<FooterStructure />
		{/* <DisclaimerStructure /> */} {/* not using this popup window */}
	</>);
}

export default App;
