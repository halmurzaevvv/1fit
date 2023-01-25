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

const ReviewsCard = ({ item }) => {
	const { addReview } = useContext(productContext)

	return (
		// <Box
		// 	sx={{
		// 		width: "100%",
		// 		// margin: "0 auto",
		// 		display: "flex",
		// 		flexDirection: "column",
		// 		justifyContent: "center",
		// 		alignItems: "center",
		// 	}}
		// >
		// 	<Box
		// 		sx={{
		// 			width: "100%",
		// 			height: "200px",
		// 			display: "flex",
		// 			justifyContent: "space-evenly",
		// 			flexWrap: "wrap",
		// 		}}
		// 	>
		// 		<Card
		// 			sx={{
		// 				borderRadius: "15px",
		// 				width: "100%",
		// 				height: "100px",
		// 				display: "inline-block",
		// 			}}
		// 		>
		// 			<Card
		// 				sx={{
		// 					height: 200,
		// 				}}
		// 			>
		// 				<CardContent
		// 					sx={{
		// 						height: "200px",
		// 						textAlign: "left",
		// 					}}
		// 				>
		// 					<Typography
		// 						sx={{
		// 							fontWeight: "700",
		// 						}}
		// 						gutterBottom
		// 						variant="h5"
		// 						component="div"
		// 					>
		// 						{item.owner}
		// 						mokiimake@gmail
		// 					</Typography>

		// 					<Typography
		// 						variant="body2"
		// 						color="text.secondary"
		// 						sx={{
		// 							textAlign: "left",
		// 							overflow: "hidden",
		// 							padding: "5px",
		// 							textOverflow: "ellipsis",
		// 						}}
		// 					>
		// 						{item.text}
		// 						Lorem ipsum dolor sit amet consectetur adipisicing elit.
		// 						Asperiores aut voluptatem ducimus quo maiores fugit architecto,
		// 						id aspernatur placeat? Suscipit rerum similique voluptate, sed
		// 						iure officia sapiente doloribus ea nisi.
		// 					</Typography>
		// 					<Typography
		// 						variant="body2"
		// 						color="text.secondary"
		// 						sx={{
		// 							height: "50px",
		// 							fontSize: "10px",
		// 							overflow: "hidden",
		// 							padding: "5px",
		// 							textOverflow: "ellipsis",
		// 						}}
		// 					>
		// 						{item.section}
		// 					</Typography>
		// 				</CardContent>
		// 			</Card>
		// 		</Card>
		// 	</Box>
		// </Box>
		<Card sx={{ maxWidth: 345, margin: 5 }}>
			<CardMedia
				component="img"
				height="140"
				image={item.image}
				alt={item.title}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{item.owner}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{item.text}
				</Typography>
				<Typography variant="caption" color="error">
					{item.section}
				</Typography>
				<div>
					<Typography variant="body" color="error">
						{/* {item.likes} */}
					</Typography>
				</div>
			</CardContent>
			<CardActions>
				{/* <Button size="small" onClick={() => toggleLike(item.id)}>
					Like
				</Button>
				{item.is_author ? (
					<Button size="small" onClick={() => deleteProduct(item.id)}>
						Delete
					</Button>
				) : null} */}
			</CardActions>
		</Card>
	)
}

export default ReviewsCard
