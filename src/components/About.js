// // ABOUT COMPONENT // //

// ABOUT STRUCTURE FUNCTION
export const AboutStructure = () => {
	return (<section className='chapter' id='about-section'>
		<h2>ABOUT</h2>
		<article>
			<div id='about-img-container'>{/* image container */}</div>
			<div id='about-txt-container'>
				<h4>Background</h4><br />
				<p>
					I began my career in geomatics during my second year at Moscow State University of Geodesy and Cartography. While balancing education and work, I transitioned from a cadastral survey company to a small, family-owned civil construction business.<br /><br />
					After graduating, I worked in the high-rise construction industry as an on-site geomatics engineer.<br /><br />
					After moving to Canada in 2014 and working in the land surveying industry, I decided to pursue professional accreditation through <a className='about-links' href='https://cbeps-cceag.ca/' target='_blank' rel='noreferrer noopener'>CBEPS</a> and explore opportunities as a contractor.<br /><br />
					Since 2018, I have completed <a className='about-links' href='https://drive.google.com/file/d/1Fh9cvHtyk_Cof8Qf9zvUoJQgI_FrI80w/view?usp=share_link' target='_blank' rel='noreferrer noopener'>various projects</a> across Metro Vancouver and the Fraser Valley.
				</p>
			</div>
		</article>
		<a className='btn-chapter-jump' href='#highlights-section'>HIGHLIGHTS</a>
	</section>);
};