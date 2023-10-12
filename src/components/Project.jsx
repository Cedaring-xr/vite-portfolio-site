import React, { useEffect, useState } from 'react'

import ImageSlider from './ImageSlider'

export default function Project({ title, description, pictures, logos }) {
	return (
		<div className="p-2 my-8 border-2 border-red-600 w-[450px] flex flex-col">
			<h2 className="font-title text-2xl">{title}</h2>
			<ImageSlider pictures={pictures} />
			<span>{description}</span>
			<button className="button mx-16 my-6">View Live Project</button>
			<div>
				<span>Tech Stack</span>
				<div className="w-[350px] flex">
					{logos.map((logo) => (
						<div key={logo.name} className="">
							<div className=" m-1">
								<img src={logo.url} className="h-[100px]"></img>
								<span>{logo.name}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
