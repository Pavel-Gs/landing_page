// // HIGHLIGHTS COMPONENT // //

// HIGHLIGHTS LIST
const highlightsList = [{
	iClass: 'fa-solid fa-file-signature',
	h4Heading: "CBEPS Certified",
	pText: "Note: this is not equivalent to BCLS licensing",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-regular fa-star',
	h4Heading: "15+ Years of Experience",
	pText: "Proficient in various technologies across different project types",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-square-check',
	h4Heading: "Quality Assurance",
	pText: "All projects undergo least-squares processing for accuracy and verification",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-truck-fast',
	h4Heading: "Fast Turnaround",
	pText: "Availability to start most projects within 24 hours",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-briefcase',
	h4Heading: "Advanced Equipment",
	pText: "Leica TCRP 1205 Robotic Total Station, Leica CS20 Controller",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-desktop',
	h4Heading: "Professional Software",
	pText: "MicroSurvey CAD Premium, StarNet Pro, QGIS",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-map-location-dot',
	h4Heading: "Service Area",
	pText: "Metro Vancouver & Fraser Valley",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-helmet-safety',
	h4Heading: "Project Types",
	pText: "Topographic surveys, layout work, benchmarks, grid-lines, cadastral services*, as-builts, and more",
	id: crypto.randomUUID(),
}, {
	iClass: 'fa-solid fa-user-group',
	h4Heading: "Solo & Small Crew",
	pText: "Primarily a one-man operation, with occasional assistance from my wife",
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
		<a className='btn-chapter-jump' href='#projects-section'>PROJECTS</a>
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