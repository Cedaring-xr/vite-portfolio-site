import React from 'react'
import Project from '../components/Project'

const Projects = () => {
	return (
		<>
			<div className="bg-slate-600 text-white p-4 h-screen">
				<h2>Personal Coding Projects</h2>
				<Project title="Quiz Generator" description="explanation overview" image="vite.svg" />
				<Project title="Cedaring VR art" description="explanation overview" image="vite.svg" />
				<Project title="Elevation Weather App" description="explanation overview" image="vite.svg" />
				<Project title="Cloud Resume Template" description="explanation overview" image="vite.svg" />
				<Project title="React Components practice" description="explanation overview" image="vite.svg" />
			</div>
		</>
	)
}

export default Projects
