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
					I started my career in geomatics when I was a student, in my 2nd year of education at Moscow State University of Geodesy and Cartography. Later, trying to combine education and work, I moved from a cadastral survey company to a small family-owned civil construction company. After graduation, I was working in a high-rise industry as an on-site geomatic engineer.<br /><br />
					After moving to Canada in 2013 and working in the land surveying industry, I decided to pursue professional accreditation by <a className='about-links' href='https://drive.google.com/file/d/1eXcsDvLOU8kbuAzGn88OwOfkyE1ysV41/view?usp=sharing' target='_blank' rel='noreferrer noopener'>CBEPS</a> and give it a try to self-employment.<br /><br />
					Being self-employed since 2018, I've completed <a className='about-links' href='https://drive.google.com/file/d/1Fh9cvHtyk_Cof8Qf9zvUoJQgI_FrI80w/view?usp=share_link' target='_blank' rel='noreferrer noopener'>various projects</a> of different types and scales, all over Metro Vancouver and Fraser Valley.
				</p>
			</div>
		</article>
		<a className='btn-chapter-jump' href='#highlights-section'>HIGHLIGHTS</a>
	</section>);
};