import React, { useContext, useEffect, useState } from "react"
import {
	Alert,
	Box,
	Button,
	FormControl,
	Input,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material"
import { authContext } from "../Contexts/AuthContext"
import { productContext } from "../Contexts/OutContext"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { useNavigate } from "react-router-dom"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ReviewsCard from "./ReviewsCard"

const Reviews = ({ item }) => {
	const { addReview, getCategories } = useContext(productContext)
	const { getReviews, reviews, pages } = useContext(productContext)

	useEffect(() => {
		getReviews()
		console.log(reviews)
	}, [])

	const [review, setReview] = useState({
		owner: "",
		text: "",
		section: "",
	})

	const handleInp = (e) => {
		if (e.target.name === "image") {
			setReview({
				...review,
				[e.target.name]: e.target.files[0],
			})
		} else {
			setReview({
				...review,
				[e.target.name]: e.target.value,
			})
		}
	}

	function handleSave() {
		let newReview = new FormData()
		newReview.append("owner", review.owner)
		newReview.append("text", review.text)
		newReview.append("section", review.section)

		addReview(newReview)
	}

	return (
		<Box
			sx={{
				width: "100%",
				// margin: "0 auto",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box>
				<Typography variant="h6" sx={{ m: 2 }}>
					Add new review
				</Typography>
				<TextField
					sx={{ m: 1 }}
					id="standard-basic"
					label="Owner"
					variant="outlined"
					fullWidth
					name="owner"
					value={review.owner}
					onChange={handleInp}
				/>
				<TextField
					sx={{ m: 1 }}
					id="standard-basic"
					label="Text"
					variant="outlined"
					fullWidth
					name="text"
					value={review.text}
					onChange={handleInp}
				/>
				<TextField
					sx={{ m: 1 }}
					id="standard-basic"
					label="Section"
					variant="outlined"
					fullWidth
					name="section"
					value={review.section}
					onChange={handleInp}
				/>

				<Button
					sx={{
						m: 1,
					}}
					variant="outlined"
					fullWidth
					size="large"
					onClick={handleSave}
				>
					ADD REVIEW
				</Button>
			</Box>
			{/* <ReviewsCard /> */}
			<Box
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
					{reviews?.map((item) => (
						<ReviewsCard key={item.id} item={item} />
					))}
				</Box>
			</Box>
		</Box>
	)
}

export default Reviews
