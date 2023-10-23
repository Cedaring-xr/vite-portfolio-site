import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from '/src/pages/Projects.jsx'
import Header from '/src/components/header.jsx'
import Footer from '/src/components/footer.jsx'

export default function PageRoutes() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
			<Footer date="oct 2023" />
		</Router>
	)
}
