import React, { useEffect, useState } from 'react'

import ImageSlider from './ImageSlider'

export default function Project({ title, description, images, pictures, logos }) {
	return (
		<div className="p-2 my-8 border-2 border-red-600 w-[450px] flex flex-col">
			<h2 className="font-title text-2xl">{title}</h2>
			<ImageSlider images={images} pictures={pictures} />
			<span>{description}</span>
			<button className="button mx-16 my-6">View Live Project</button>
			<div>
				<span>Tech Stack</span>
				<div className="flex">
					<div>
						<img width={100} src={logos[0].url} />
						<span>{logos[0].name}</span>
					</div>
					<div>
						<img width={100} src={logos[1].url} />
						<span>{logos[1].name}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
