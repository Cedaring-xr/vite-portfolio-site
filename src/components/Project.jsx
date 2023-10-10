import React, { useEffect, useState } from 'react'

import ImageSlider from './ImageSlider'

export default function Project({ title, description, images }) {
	return (
		<div className="p-2 my-8 border-2 border-red-600 h-[450px]">
			<h2>{title}</h2>
			<div>
				<p>{description}</p>
			</div>
			<ImageSlider images={images} />

			{/* <div id="image-container" className="w-[350px] relative">
				<div>
					<img src={pics[imageIndex]} className="absolute h-[350px]"></img>
					<button
						className="hover:bg-slate-700 opacity-70 w-[40px] h-[350px] cursor-pointer absolute flex justify-start items-center transition-all ease-in-out duration-200"
						onClick={() => prevImage()}
					>
						<FaChevronCircleLeft className="text-4xl text-black" />
					</button>
					<button
						className="hover:bg-slate-700 opacity-70 h-[350px] w-[40px] absolute right-0 flex justify-end items-center transition-all ease-in-out duration-200"
						onClick={() => nextImage()}
					>
						<FaChevronCircleRight className="text-3xl text-black" />
					</button>
					<span>Image Description</span>
				</div>
			</div> */}
		</div>
	)
}
