import React from 'react'
import Project from '../components/Project'

import camp from '/public/camping1.png'
import ship from '/public/icyShip.png'
import mtn from '/public/spaceMountains.png'

import ThreeJs from '/public/icons/Three.png'
import Next from '/public/icons/nextJS.png'

const IMAGES = [camp, ship, mtn]

const IMAGES2 = [
	{ url: camp, description: 'camping', alt: 'camping image' },
	{ url: ship, description: 'ship in ice', alt: 'ship in ice' },
	{ url: mtn, description: 'psychedelic mountains', alt: 'psychedelic colorful mountains' }
]

const logos = [
	{
		name: 'ThreeJS',
		url: ThreeJs
	},
	{
		name: 'Next.js',
		url: Next
	}
]

const Projects = () => {
	return (
		<>
			<div className="bg-slate-600 text-white p-4 h-screen">
				<h2 className="font-title text-3xl">Personal Coding Projects</h2>
				<Project
					title="Quiz Generator"
					description="explanation overview"
					images={IMAGES}
					pictures={IMAGES2}
					logos={logos}
				/>
				{/* <Project
					title="Cedaring VR Art"
					description="using ThreeJS to display 3D artwork created in VR"
					images={IMAGES}
				/>
				<Project
					title="Elavation Weather App"
					description="using a weather api to display data"
					images={IMAGES}
				/> */}
			</div>
		</>
	)
}

export default Projects
