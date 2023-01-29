import React, { useContext, useEffect } from "react"
import Banner from "../components/Banner/Banner"
import { authContext } from "../components/Contexts/AuthContext"
import Description from "../components/Description/Description"
import Footer from "../components/Footer/Footer"
import HomeCategories from "../components/HomeCategories/HomeCategories"
import Tickets from "../components/Tickets/Tickets"
import TopPlaces from "../components/TopPlaces/TopPlaces"

const Home = () => {
	return (
		<>
			<Banner />
			<Description />
			<HomeCategories />
			<TopPlaces />
			<Tickets />
			{/* <Footer /> */}
		</>
	)
}

export default Home
