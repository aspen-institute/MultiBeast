import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light">
				<a className="navbar-brand" href="/view/all">
					<h2>MultiBeast</h2>
				</a>
				<div className="form-inline">
					<h3>
						<a href="/view/all/SH%202018" className={'btn purple__aspen ' + this.props.status}>
							Aspen Ideas Health
						</a>
						&nbsp;
						<a href="/view/all/AIF%202018" className={'btn brightblue__aspen ' + this.props.status}>
							Aspen Ideas Festival
						</a>
					</h3>
				</div>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a className="nav-link active" href="/search">
							Search
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/logout">
							Log Out
						</a>
					</li>
					<li className="nav-item">
						<a className={'nav-link ' + this.props.status} href="/admin" tabIndex="-1" aria-disabled="true">
							Admin
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Header;
