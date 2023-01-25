import React, { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Box, Pagination } from "@mui/material"
import { alpha, styled, useTheme } from "@mui/material/styles"
import ReviewsCard from "./ReviewsCard"
import { productContext } from "../Contexts/OutContext"

const ReviewsList = () => {
	const [currentPage, setCurrentPage] = useState(1)

	const [searchParams, setSearchParams] = useSearchParams()

	const { getReviews, reviews, pages } = useContext(productContext)

	useEffect(() => {
		getReviews()
	}, [])

	useEffect(() => {
		getReviews()
	}, [searchParams])

	useEffect(() => {
		setSearchParams({
			page: currentPage,
		})
	}, [currentPage])

	return (
		<Box
			sx={{
				// height: "100vh",
				width: "100%",
				display: "flex",
				// alignItems: "center",
				justifyContent: "right",
			}}
		>
			<Box
				sx={{
					mt: 10,
					width: "100%",
					display: "flex",
					justifyContent: "left",
					alignItems: "center",
					zIndex: 2,
				}}
			>
				{/* --------------------StudioCart------------------------- */}
				{/* <div
					sx={{
						width: "60%",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						ReviewsList
						{reviews?.map((item) => (
							<ReviewsCard key={item.id} item={item} />
						))}
					</Box>
					<Box>
						<Pagination
							count={pages}
							variant="outlined"
							color="primary"
							page={currentPage}
							onChange={(e, p) => setCurrentPage(p)}
						/>
					</Box>
				</div> */}

				{/* --------------------StudioCart end------------------------- */}
			</Box>
		</Box>
	)
}

export default ReviewsList
