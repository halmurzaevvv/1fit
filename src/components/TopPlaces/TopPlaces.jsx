import { Box, Button, Typography } from "@mui/material"
import React, { useEffect } from "react"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { useNavigate } from "react-router-dom"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import AOS from "aos"
import "aos/dist/aos.css"

const TopPlaces = () => {
	const navigate = useNavigate()
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div data-aos="fade-up" data-aos-duration="800">
			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "100px",
					marginBottom: "30px",
					pt: 2,
				}}
			>
				<Typography
					sx={{
						width: "85%",
						fontWeight: "700",
					}}
					variant="h4"
					component="div"
				>
					Топовые места
				</Typography>
				<Typography
					onClick={() => navigate("/studios")}
					sx={{
						width: "15%",
						fontWeight: "700",
						color: "#3446F6",
					}}
					variant="h6"
					component="div"
				>
					<Button
						sx={{
							fontWeight: "700",
						}}
					>
						Все студии{" "}
						<ArrowForwardIosIcon
							sx={{
								display: { xs: "flex" },
								display: "inline-block",
								scale: "0.7",
							}}
						/>
					</Button>
				</Typography>
			</Box>
			<Box
				data-aos="fade-up"
				data-aos-duration="600"
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<Box
					sx={{
						width: "400px",
						pr: 2,
						pb: 8,
						display: "inline-block",
					}}
				>
					<CardMedia
						sx={{
							height: "250px",
							borderRadius: "25px",
						}}
						component="img"
						alt="green iguana"
						height="140"
						image="https://onefit-static.s3.amazonaws.com/media/fitness/None/fu2d5dcdhxv85jdiundoqfxpg.jpg"
					/>
					<CardContent
						sx={{
							mb: 0,
							pb: 0,
						}}
					>
						<Typography
							sx={{
								fontWeight: "700",
							}}
							gutterBottom
							variant="h5"
							component="div"
						>
							First Fitness
						</Typography>
					</CardContent>
					<CardActions>
						<Typography variant="h6">⭐4.9</Typography>
						<Typography variant="h6" color="text.secondary">
							ул. Муратбаева, 180, 9-й этаж
						</Typography>
					</CardActions>
				</Box>
				<Box sx={{ width: "400px", pr: 2, pb: 8, display: "inline-block" }}>
					<CardMedia
						sx={{
							height: "250px",
							borderRadius: "25px",
						}}
						component="img"
						alt="green iguana"
						height="140"
						image="https://onefit-static.s3.amazonaws.com/media/fitness/None/fu2d5dcdhxv85jdiundoqfxpg.jpg"
					/>
					<CardContent
						sx={{
							mb: 0,
							pb: 0,
						}}
					>
						<Typography
							sx={{
								fontWeight: "700",
							}}
							gutterBottom
							variant="h5"
							component="div"
						>
							First Fitness
						</Typography>
					</CardContent>
					<CardActions>
						<Typography variant="h6">⭐4.9</Typography>
						<Typography variant="h6" color="text.secondary">
							ул. Муратбаева, 180, 9-й этаж
						</Typography>
					</CardActions>
				</Box>
				<Box sx={{ width: "400px", pr: 2, pb: 8, display: "inline-block" }}>
					<CardMedia
						sx={{
							height: "250px",
							borderRadius: "25px",
						}}
						component="img"
						alt="green iguana"
						height="140"
						image="https://onefit-static.s3.amazonaws.com/media/fitness/None/fu2d5dcdhxv85jdiundoqfxpg.jpg"
					/>
					<CardContent
						sx={{
							mb: 0,
							pb: 0,
						}}
					>
						<Typography
							sx={{
								fontWeight: "700",
							}}
							gutterBottom
							variant="h5"
							component="div"
						>
							First Fitness
						</Typography>
					</CardContent>
					<CardActions>
						<Typography variant="h6">⭐4.9</Typography>
						<Typography variant="h6" color="text.secondary">
							ул. Муратбаева, 180, 9-й этаж
						</Typography>
					</CardActions>
				</Box>
			</Box>
		</div>
	)
}

export default TopPlaces
