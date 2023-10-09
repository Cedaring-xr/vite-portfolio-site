import React from 'react'
import Project from '../components/Project'

const Projects = () => {
	return (
		<>
			<div className="bg-slate-600 text-white p-4 h-screen">
				<h2 className="font-title text-3xl">Personal Coding Projects</h2>
				<Project
					title="Quiz Generator"
					description="explanation overview"
					pics={['camping1.png', 'icyShip.png', 'spaceMountains.png']}
				/>
				<Project
					title="Cedaring VR Art"
					description="using ThreeJS to display 3D artwork created in VR"
					pics={['camping1.png', 'icyShip.png', 'spaceMountains.png']}
				/>
				<Project
					title="Elavation Weather App"
					description="using a weather api to display data"
					pics={['camping1.png', 'icyShip.png', 'spaceMountains.png']}
				/>
			</div>
		</>
	)
}

export default Projects
