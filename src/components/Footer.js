// IMPORT HOOKS
import { useState } from 'react';

// IMPORT HEADER/FOOTER ICONS LIST
import { headerIconsList } from './Header.js';

// // FOOTER COMPONENT // //

// FOOTER STRUCTURE FUNCTION
export const FooterStructure = () => {
	const [animation, setAnimation] = useState();
	const [visibility, setVisibility] = useState();
	const handleRollUp = () => {														// handle the form's roll UP animation and HIDE the button
		setAnimation({ transform: 'translateY(-120%)', transition: '0.5s ease-in', });	// "-120%" keeps the form more or less at the bottom at all times
		setVisibility({ opacity: '0', });												// eliminates the shift in the footer's height when the button is hidden (this is an alternative to "display: none")
	};
	const handleRollDown = () => {														// handle the form's roll DOWN animation and SHOW the button
		setAnimation({ transition: '0.5s ease-out', });
		setVisibility({ opacity: '1', });
	};

	return (<section className='chapter' id='footer-section'>
		<article>
			<button onClick={handleRollUp} style={visibility} className='btn-regular'>				{/* invoke the form's roll UP function */} {/* the visibility style applies here */}
				<i className="fa-solid fa-arrow-up-right-from-square"></i>
				CONTACT FORM
			</button><br /><br />
			<p>*cadastre-related work (involving property lines) is conducted in partnership with a licensed land surveying company under their terms and conditions</p><br />
			<p>Serving Metro Vancouver & the Lower Mainland</p><br />

			<ul>																					{/* iterate over footer icons (copied from the header) */}
				{headerIconsList.map((i) => {
					return (<HeaderIconsRender {...i} key={i.id} />)
				})}
			</ul>
		</article>


		{/*// // CONTACT FORM STRUCTURE // //*/}
		<div style={animation} id='contact-form-container'>											{/* the animation style applies here */}
			<i onClick={handleRollDown} className="fa-solid fa-xmark"></i>							{/* invoke the form's roll DOWN function */}
			<form action='https://formsubmit.co/1f02d58477fe20e850b934af3418c8bb' method='POST'>
				<h4>CONTACTS</h4>
				<input type='text' name='name' placeholder="Full name" required />					{/*client's name*/}
				<input type='email' name='email' placeholder="Email address" required />			{/*client's email*/}
				<input type='text' name='company' placeholder="Company name (if applicable)" />							{/*client's company*/}
				<input type='tel' name='phone' placeholder="Phone number" required />						{/*client's phone*/}
				<h4>PROJECT</h4>
				<input type='text' name='address' placeholder="Project address" required />		{/*client's project address*/}
				<input type='text' name='request' placeholder="Work request" required />			{/*client's work order*/}
				<input type='text' name='comments' placeholder="Additional comments (if any)" />	{/*client's comments*/}
				<p>*cadastre-related work (involving property lines) is conducted in partnership with a licensed land surveying company under their terms and conditions</p>
				<button type='submit' className='btn-regular'>SEND</button>

				{/* HIDDEN VALUES */}

				{/*cc automated response to other emails */}
				{/*<input type='hidden' name='_cc' value='' />*/}
				{/*automated response to a client*/}
				<input type='hidden' name='_autoresponse' value="(This is automated message - do not respond) Thank you for submitting your request. Your message has been received, and I will start working on your project on a scheduled basis." />
			</form>
		</div>
	</section>);
};

// ICONS RENDER FUNCTION (COPIED FROM THE HEADER)
const HeaderIconsRender = ({ headerIconHref, headerIconRel, headerIconTarget, iClass }) => {
	return (<li>
		<a href={headerIconHref} rel={headerIconRel} target={headerIconTarget}><i className={iClass}></i></a>
	</li>);
};