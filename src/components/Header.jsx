import React from 'react'

const Header = () => {
	return (
		<>
			<div id="header-container">
				<a href="/">
					<h1>Matt Ray Dev Portfolio</h1>
				</a>
				<nav>
					<ul>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/projects">Projects</a>
						</li>
						<li>
							<a href="/future">Future Plans</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Header
