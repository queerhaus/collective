import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="footer-hide" id="footer">
				<p className="copyright">
					<small>
						All rights reserved &copy; {new Date().getFullYear()}&nbsp;
						<span className="text-nowrap">Queer Haus</span>
					</small>
				</p>
			</footer>
		);
	}
}

export default Footer;
