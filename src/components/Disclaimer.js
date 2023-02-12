// IMPORT HOOKS
import {useState, useEffect} from 'react';

// // DISCLAIMER COMPONENT // //

// DISCLAIMER STRUCTURE FUNCTION
export const DisclaimerStructure = () => {
	const [visibility, setVisibility] = useState({ opacity: '0' });		// set the initial opacity to 0
	useEffect(() => {													// fade-in the disclaimer on component-load after the delay
		setVisibility({ opacity: '1', transition: '0.5s ease-in 2s' });
	}, []);

	const transparentDisclaimer = () => {								// handle the disclaimer's transparency
		setVisibility({ opacity: '0', transition: '0.5s ease-out' });
	};
	const hideDisclaimer = () => {										// handle the disclaimer's display state
		setVisibility({ display: 'none' });
	};

	return (<section id='disclaimer-section' style={visibility}>		{/* visibility styles applies here */}
		<p>This is my web-development portfolio site.<br />
			More projects are on the way.</p>
		<p>Commercial use in land surveying industry<br />
			is not intended.</p>
		<button className='btn-regular' onClick={() => {transparentDisclaimer(); setTimeout(hideDisclaimer, 600); }}>DISMISS</button> {/* Invoke transparency function first. After the animation - invoke "display: none" function */}
	</section>);
}