// // HEADER COMPONENT // //

// IMPORT IMAGES
import headerLogo from '../images/logo.gif'

// HEADER NAV-LINKS LIST
const headerNavList = [{
	headerNavText: "About",
	headerNavHref: '#about',
	id: crypto.randomUUID(),
}, {
	headerNavText: "Highlights",
	headerNavHref: '#highlights',
	id: crypto.randomUUID(),
}, {
	headerNavText: "Projects",
	headerNavHref: '#projects',
	id: crypto.randomUUID(),
}, {
	headerNavText: "Contacts",
	headerNavHref: '#contacts',
	id: crypto.randomUUID(),
},];

// HEADER ICONS LIST
const headerIconsList = [{
	headerIconHref: 'https://www.facebook.com/PavelSG',
	headerIconRel: 'noopener noreferrer',
	headerIconTarget: '_blank',
	iClass: 'fa-brands fa-square-facebook',
	id: crypto.randomUUID(),
}, {
	headerIconHref: 'https://www.instagram.com/pavel_generalov/',
	headerIconRel: 'noopener noreferrer',
	headerIconTarget: '_blank',
	iClass: 'fa-brands fa-instagram',
	id: crypto.randomUUID(),
}, {
	headerIconHref: 'https://www.linkedin.com/in/pavel-generalov',
	headerIconRel: 'noopener noreferrer',
	headerIconTarget: '_blank',
	iClass: 'fa-brands fa-linkedin',
	id: crypto.randomUUID(),
},];

// NAV RENDER FUNCTION
const HeaderNavRender = ({ headerNavText, headerNavHref }) => {
	return (<li className='header-nav-li'>
		<a href={headerNavHref}>{headerNavText}</a>
	</li>);
};

// ICONS RENDER FUNCTION
const HeaderIconsRender = ({ headerIconHref, headerIconRel, headerIconTarget, iClass }) => {
	return (<li className='header-icons-li'>
		<a href={headerIconHref} rel={headerIconRel} target={headerIconTarget}><i className={iClass}></i></a>
	</li>);
};

// STRUCTURE FUNCTION
export const HeaderStructure = () => {
	return (<section id='header-section'>
		<div id='header-container'>

			<div id='header-logo-container'>
				<img id='header-logo' src={headerLogo} alt="total station logo" />		{/* header logo */}
				<p id='header-logo-text'><span>GEOMATICS</span><br />CONSULTING</p>
			</div>

			<ul id='header-nav-ul'>		{/* iterate header nav links */}
				{headerNavList.map((i) => {
					return (<HeaderNavRender {...i} key={i.id} />)
				})}
			</ul>

			<ul id='header-icons-ul'>		{/* iterate header icons */}
				{headerIconsList.map((i) => {
					return (<HeaderIconsRender {...i} key={i.id} />)
				})}
			</ul>

			<div id='header-menu-minimized-container'>		{/* minimized menu icon */}
				<i id='header-menu-icon' className="fa-solid fa-bars"></i>
			</div>
		</div>
	</section>);
};