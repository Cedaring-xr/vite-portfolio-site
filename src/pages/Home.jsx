import React from 'react'

const Home = () => {
	return (
		<div className="bg-slate-500 h-screen p-4">
			<h1 className="m-10 text-slate-100">home page stuff</h1>
			<div id="profile-container" className="relative w-[400px] h-[250px] bg-white p-2">
				<div className="polygon absolute bg-neutral-500 top-[28px] left-[28px]"></div>
				<div className="polygon absolute  flex flex-col justify-center align-middle">
					<h2 className="text-white py-2 px-8 z-10 text-3xl">MATT RAY</h2>
					<h3 className="text-white py-2 px-8 z-10 text-xl">Web Developer</h3>
				</div>

				<div
					id="profile-circle-two"
					className="w-[140px] h-[140px] bg-slate-50 rounded-full absolute left-[250px] top-[100px]"
				></div>
				<div
					id="profile-circle-one"
					className="w-[125px] h-[125px] bg-transparent rounded-full absolute left-[257px] top-[107px] border-[5px] border-gray-700 overflow-hidden"
				>
					<img src="self.png" alt="profile-photo"></img>
				</div>
			</div>
		</div>
	)
}

export default Home
