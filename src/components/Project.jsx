import React, { useEffect, useState } from 'react'

export default function Project({ title, description, pics }) {
	const [images, setImages] = useState(pics || [])

	return (
		<div className="p-2 my-8 border-2 border-red-600 h-[450px]">
			<h2>{title}</h2>
			<div>
				<p>{description}</p>
			</div>
			<div id="image-container" className="w-[350px]">
				{images.map((image) => (
					<div>
						<img src={image} className="absolute h-[300px]"></img>
						<span>Image Description</span>
					</div>
				))}
			</div>
		</div>
	)
}
