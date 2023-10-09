import React from 'react'

const Footer = ({ date }) => {
	return (
		<>
			<div className="bg-slate-800 text-white">
				<span>last updated: {date}</span>
			</div>
		</>
	)
}

export default Footer
