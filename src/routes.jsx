import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
// import Future from './pages/Future.jsx'

export default function PageRoutes() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				{/* <Route path="/about" element={<About />} /> */}
				{/* <Route path="/future" element={<Future />} /> */}
			</Routes>
			<Footer date="oct 2023" />
		</Router>
	)
}
