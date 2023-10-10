import React from 'react'
import Project from '../components/Project'

import camp from '/public/camping1.png'
import ship from '/public/icyShip.png'
import mtn from '/public/spaceMountains.png'

const IMAGES = [camp, ship, mtn]

const Projects = () => {
	return (
		<>
			<div className="bg-slate-600 text-white p-4 h-screen">
				<h2 className="font-title text-3xl">Personal Coding Projects</h2>
				<Project title="Quiz Generator" description="explanation overview" images={IMAGES} />
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
