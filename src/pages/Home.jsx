import React from "react"
import Banner from "../components/Banner/Banner"
import Description from "../components/Description/Description"
import HomeCategories from "../components/HomeCategories/HomeCategories"
import TopPlaces from "../components/TopPlaces/TopPlaces"

const Home = () => {
	return (
		<>
			<Banner />
			<Description />
			<HomeCategories />
			<TopPlaces />
		</>
	)
}

export default Home
