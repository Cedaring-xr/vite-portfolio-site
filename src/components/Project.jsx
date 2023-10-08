import React from 'react'

export default function Project({ title, description, image }) {
	return (
		<div>
			<h2>{title}</h2>
			<div>
				<p>{description}</p>
			</div>
			<div>
				<img src={image} alt="project-image" />
			</div>
		</div>
	)
}
