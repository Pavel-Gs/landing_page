// // HIGHLIGHTS COMPONENT // //

// HIGHLIGHTS LIST
const highlightsList = [{
	iClass: 'fa-solid fa-file-signature',
	h4Heading: "Certificate",
	pText: "CBEPS certified. Please keep in mind - this is not the same as BCLS licensed",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-regular fa-star',
	h4Heading: "Experience",
	pText: "Over 15 years of experience, working with different technologies on various projects",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-square-check',
	h4Heading: "Quality",
	pText: "I'm using least-squares processing software for all projects, for checking and quality assessment",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-truck-fast',
	h4Heading: "Asap",
	pText: "Most likely, I'll be able to start working on your project within 24 hours",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-briefcase',
	h4Heading: "Equipment",
	pText: "Robotic Leica TCRP 1205 total station, Leica CS20 controller",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-desktop',
	h4Heading: "Software",
	pText: "MicroSurvey CAD 2016 Premium, StarNet 11 Pro, QGIS",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-map-location-dot',
	h4Heading: "Area",
	pText: "Working anywhere in Metro Vancouver and Fraser Valley areas",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-helmet-safety',
	h4Heading: "Jobs",
	pText: "Topography, layouts, benchmarks, grid-lines, cadastre*, as-builts and more...",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-user-group',
	h4Heading: "Crew",
	pText: "Most of the time, I'm a one-man crew. My wife assists me with some projects",
	id: crypto.randomUUID(),
}];

// HIGHLIGHTS STRUCTURE FUNCTION
export const HighlightsStructure = () => {
	return (<section className='chapter' id='highlights-section'>
		<h2>HIGHLIGHTS</h2>
		<article>
			{highlightsList.map((i) => {
				return (<HighlightsRender {...i} key={i.id} />);
			})}
		</article>
		<a className='chapter-btn' href='#projects-section'>PROJECTS</a>
	</section>);
};

// HIGHLIGHTS RENDER FUNCTION
const HighlightsRender = ({ iClass, h4Heading, pText }) => {
	return (<div className='highlight-container'>
		<i className={iClass}></i>
		<div>
			<h4>{h4Heading}</h4>
			<p>{pText}</p>
		</div>
	</div>);
};