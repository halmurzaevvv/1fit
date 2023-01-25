import React, { useContext } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { productContext } from "../Contexts/OutContext"
import { Box, Grid, Paper, Item, styled, CardActionArea } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import { authContext } from "../Contexts/AuthContext"

const StudioCard = ({ item }) => {
	const { deleteProduct, saveEditStudio, toggleLike } =
		useContext(productContext)

	const { user } = React.useContext(authContext)

	const navigate = useNavigate()

	// console.log(item)
	return (
		<div>
			<Box
				sx={{
					// alignItems: "center",
					width: "100%",
					display: "flex",
					justifyContent: "space-evenly",
					flexWrap: "wrap",
				}}
			>
				<Card
					sx={{
						borderRadius: "15px",
						m: 2,
						width: 320,
						height: 400,
						display: "inline-block",
					}}
				>
					<Card
						sx={{
							height: 400,
							width: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							textAlign: "center",
						}}
					>
						<CardMedia
							sx={{
								width: "100%",
								scale: "0.6",
							}}
							component="img"
							image={
								"https://www.howtogeek.com/wp-content/uploads/2018/07/error-403-forbidden-message-on-a-website.jpeg?height=200p&trim=2,2,2,2"
							}
						/>
						<CardContent>
							<Typography
								sx={{
									fontWeight: "700",
								}}
								gutterBottom
								variant="h5"
								component="div"
							>
								{item.title}
							</Typography>

							<Typography variant="body2" color="text.secondary">
								{item.address}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								sx={{
									height: "50px",
									fontSize: "10px",
									overflow: "hidden",
									padding: "5px",
									textOverflow: "ellipsis",
								}}
							>
								{item.description}
							</Typography>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									justifyContent: "space-evenly",
									alignItems: "center	",
								}}
							>
								<Typography variant="h6">⭐{item.rating} 4.9</Typography>
								<Box
									sx={{
										width: "30%",
										display: "flex",
										justifyContent: "space-evenly",
										alignItems: "center	",
									}}
								>
									<Button size="small" onClick={() => toggleLike(item.id)}>
										<ThumbUpIcon
											sx={{
												color: "#3446f6",
											}}
											size="small"
										>
											Like
										</ThumbUpIcon>
									</Button>

									<Typography variant="h6">{item.likes}</Typography>
								</Box>
							</Box>

							{item.trainer === user ? (
								<Box>
									<Button size="small" onClick={() => deleteProduct(item.id)}>
										Delete
									</Button>
									<Button
										size="small"
										onClick={() => navigate(`/edit/${item.id}`)}
									>
										Edit
									</Button>
								</Box>
							) : null}
						</CardContent>
					</Card>
				</Card>
			</Box>
		</div>
	)
}

export default StudioCard
