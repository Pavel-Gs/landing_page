// IMPORT HOOKS
import { useState, useEffect } from 'react';

// // DISCLAIMER COMPONENT // //

// DISCLAIMER STRUCTURE FUNCTION
export const DisclaimerStructure = () => {
	const [visibility, setVisibility] = useState({ opacity: '0' });		// set the initial opacity to 0
	useEffect(() => {													// fade-IN the disclaimer on component-load after the delay
		setVisibility({ opacity: '1', transition: '0.5s ease-in 2s' });
	}, []);


	const transparentDisclaimer = () => {								// handle the disclaimer's transparency on click (fade-OUT)
		setVisibility({ opacity: '0', transition: '0.5s ease-out' });
	};


	const hideDisclaimer = () => {										// handle the disclaimer's display state on the same click
		setVisibility({ display: 'none' });
	};


	return (<section id='disclaimer-section' style={visibility}>		{/* visibility styles applies here */}
		<p>
			I'm a geomatics technologist, working with my own equipment and software.<br></br><br></br>
			I accept work requests from local land surveying companies, civil construction firms, and private owners.<br></br><br></br>
			To contact me, please click the "CONTACT FORM" button in the footer.
		</p>
		<button className='btn-regular' onClick={() => { transparentDisclaimer(); setTimeout(hideDisclaimer, 600); }}>DISMISS</button> {/* Invoke transparency function first. After the animation - invoke "display: none" function */}
	</section>);
}