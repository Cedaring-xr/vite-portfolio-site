import React, { useState } from 'react'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { FaChevronCircleRight } from 'react-icons/fa'

export default function ImageSlider({ images }) {
	const [imageIndex, setImageIndex] = useState(0)

	const prevImage = () => {
		console.log('prev')
		setImageIndex((index) => {
			if (index === 0) {
				return images.length - 1
			}
			return index - 1
		})
	}

	const nextImage = () => {
		console.log('next')
		setImageIndex((index) => {
			if (index === images.length - 1) {
				return 0
			}
			return index + 1
		})
	}
	return (
		<div id="image-container" className="w-[350px] relative">
			<div className="flex">
				{images.map((image) => (
					<div key={image}>
						<img src={image} className={`h-[350px] absolute translate:${-100 * imageIndex}%`}></img>
					</div>
				))}
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
		</div>
	)
}
