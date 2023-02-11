// IMPORT HOOKS
import { useState } from 'react';

// // HEADER COMPONENT // //

// IMPORT IMAGES
import headerLogo from '../images/logo.gif'

// HEADER NAV-LINKS LIST
const headerNavList = [{
	headerNavText: "About",
	headerNavHref: '#about-section',
	iClass: 'fa-solid fa-ellipsis-vertical', // for the minimized menu
	id: crypto.randomUUID(),
}, {
	headerNavText: "Highlights",
	headerNavHref: '#highlights-section',
	iClass: 'fa-solid fa-ellipsis-vertical', // for the minimized menu
	id: crypto.randomUUID(),
}, {
	headerNavText: "Projects",
	headerNavHref: '#projects-section',
	iClass: 'fa-solid fa-ellipsis-vertical', // for the minimized menu
	id: crypto.randomUUID(),
}, {
	headerNavText: "Contacts",
	headerNavHref: '#footer-section',
	iClass: 'fa-solid fa-ellipsis-vertical', // for the minimized menu
	id: crypto.randomUUID(),
},];

// HEADER/FOOTER ICONS LIST
export const headerIconsList = [{
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
}, {
	headerIconHref: 'https://www.youtube.com/watch?v=0FvEj4ed4ww&t=3s',
	headerIconRel: 'noopener noreferrer',
	headerIconTarget: '_blank',
	iClass: 'fa-brands fa-square-youtube',
	id: crypto.randomUUID(),
},];

// HEADER STRUCTURE FUNCTION
export const HeaderStructure = () => {
	const [animation, setAnimation] = useState();
	const handleRollLeft = () => {												// handle the menu's roll LEFT animation
		setAnimation({ right: '0.0625rem', transition: '0.3s ease-out', });
	};
	const handleRollRight = () => {												// handle the menu's roll RIGHT animation
		setAnimation({ transition: '0.3s ease-in', });
	};

	return (<section id='header-section'>
		<article>
			<img src={headerLogo} alt="total station logo" />					{/* header logo */}
			<h2><span>GEOMATICS</span><br />CONSULTING</h2>

			<nav>																{/* iterate over header nav links */}
				{headerNavList.map((i) => {
					return (<HeaderNavRender {...i} key={i.id} />)
				})}
			</nav>

			<ul>																{/* iterate over header icons */}
				{headerIconsList.map((i) => {
					return (<HeaderIconsRender {...i} key={i.id} />)
				})}
			</ul>

			<i onClick={handleRollLeft} className="fa-solid fa-list-ul"></i>	{/* minimized menu icon */} {/* invoke the menu's roll LEFT function */}
		</article>


		{/*// // MINIMIZED MENU STRUCTURE // //*/}
		<div style={animation} id='minimized-menu-container'>					{/* the animation style applies here */}
			<i onClick={handleRollRight} className="fa-solid fa-xmark"></i>			{/* invoke the menu's roll RIGHT function */}
			<nav>																{/* iterate over header nav links inside the minimized menu*/}
				{headerNavList.map((i) => {
					return (<HeaderNavMinimizedRender {...i} key={i.id} propValue={handleRollRight} />)	// pass "handleRollRight" as propValue
				})}
			</nav>
		</div>
	</section>);
};

// NAV RENDER FUNCTION
const HeaderNavRender = ({ headerNavText, headerNavHref }) => {
	return (<li>
		<a href={headerNavHref}>{headerNavText}</a>
	</li>);
};

// ICONS RENDER FUNCTION
const HeaderIconsRender = ({ headerIconHref, headerIconRel, headerIconTarget, iClass }) => {
	return (<li>
		<a href={headerIconHref} rel={headerIconRel} target={headerIconTarget}><i className={iClass}></i></a>
	</li>);
};

// MINIMIZED MENU RENDER FUNCTION
const HeaderNavMinimizedRender = ({ headerNavText, headerNavHref, iClass, propValue }) => {
	return (<li>
		<a onClick={propValue} href={headerNavHref}>{headerNavText}</a>	{/* invoke the menu's roll RIGHT function (as passed propValue) */}
		<i className={iClass}></i>
	</li>);
};