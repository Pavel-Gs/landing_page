//IMPORT IMAGES
import ruralImg from '../images/rural_surveys.jpg';
import topoImg from '../images/topographic_surveys.jpg';
import highriseImg from '../images/highrise_industry.jpg';
import gridlinesImg from '../images/grid-lines.jpg';
/*import commercialImg from '../images/commercial_surveys.jpg';
import civilImg from '../images/civil_industry.jpg';
import residentialImg from '../images/residential_surveys.jpg';
import cadastreImg from '../images/cadastre_surveys.jpg';*/
import asbuiltImg from '../images/asbuilt_surveys.jpg';
import layoutsImg from '../images/layouts.jpg';

// // PROJECTS COMPONENT // //

// PROJECTS LIST
const projectsList = [{
	projectImg: ruralImg,
	h4Text: "rural surveys",
	pText: "Traversing steep hills, creeks, and forests is part of the job",
	id: crypto.randomUUID(),
}, {
	projectImg: topoImg,
	h4Text: "topography",
	pText: "Creating topographic plans in CAD, PDF, or paper formats",
	id: crypto.randomUUID(),
}, {
	projectImg: highriseImg,
	h4Text: "high-rise support",
	pText: "Providing full geomatics support from zero-cycle to completion",
	id: crypto.randomUUID(),
}, {
	projectImg: gridlinesImg,
	h4Text: "grid-line layouts",
	pText: "Laying out grid lines and benchmarks for all construction types",
	id: crypto.randomUUID(),
},/*{
	projectImg: commercialImg,
	h4Text: "commercial surveys",
	pText: "Working on a topo-plan of the gas station for their upcoming reconstruction",
	id: crypto.randomUUID(),
}, {
	projectImg: civilImg,
	h4Text: "civil engineering",
	pText: "Reconstruction included an additional fueling area for trucks and a complete renovation of the property",
	id: crypto.randomUUID(),
}, {
	projectImg: residentialImg,
	h4Text: "residential surveys",
	pText: "A survey in a city usually requires traversing around the block and measuring all existing property markers",
	id: crypto.randomUUID(),
}, {
	projectImg: cadastreImg,
	h4Text: "cadastre surveys*",
	pText: "Surveying property lines*. The fence is in the right place, isn't it?",
	id: crypto.randomUUID(),
},*/{
	projectImg: asbuiltImg,
	h4Text: "as-built surveys",
	pText: "Measuring all form corners and verifying perimeter dimensions",
	id: crypto.randomUUID(),
},{
	projectImg: layoutsImg,
	h4Text: "residential layouts",
	pText: "Re-establishing property lines and calculating construction envelopes",
	id: crypto.randomUUID(),
},];

// PROJECTS STRUCTURE FUNCTION
export const ProjectsStructure = () => {
	return (<section className='chapter' id='projects-section'>
		<h2>PROJECTS</h2>
		<h4 id='projects-h4'>Examples of work & field photos</h4><br />
		<article>
			{projectsList.map((i) => {
				return (<ProjectsRender {...i} key={i.id} />)
			})}
		</article>
	</section>);
};

// PROJECTS RENDER FUNCTION
const ProjectsRender = ({ projectImg, h4Text, pText }) => {
	return (<div>
		<img src={projectImg} alt={h4Text} />
		<h4 className='project-h4'>{h4Text}</h4>
		<p>{pText}</p>
	</div>);
};