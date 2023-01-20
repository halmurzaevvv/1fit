import { Box, Button, Container, Typography } from "@mui/material"
import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { CardActionArea } from "@mui/material"
import { maxHeight } from "@mui/system"
import TelegramIcon from "@mui/icons-material/Telegram"

const Tickets = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#3446F6",
				height: "100vh",
				width: "100%",
				display: "flex",
				alignItems: "center",
				// justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<span id="prices"></span>
			<Box
				sx={{
					width: "100%",
					textAlign: "center",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Typography
					sx={{
						textAlign: "center",
						mt: 10,
						fontWeight: "700",
						color: "#fff",
					}}
					variant="h4"
					component="div"
				>
					{" "}
					Выбери свой абонемент
				</Typography>
			</Box>
			<Box
				sx={
					{
						// mt: 30,
						// width: "100%",
						// display: "flex",
						// alignItems: "center",
						// justifyContent: "center",
					}
				}
			>
				<Card sx={{ borderRadius: "25px", mt: 5, width: 300, height: 380 }}>
					<CardActionArea
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
							height="190"
							image="https://1fit.app/static/365-3c504b41db214080bac2b520b08cda20.svg"
							// alt="green iguana"
						/>
						<CardContent>
							<Typography
								sx={{
									fontWeight: "700",
								}}
								gutterBottom
								variant="h4"
								component="div"
							>
								365 дней
							</Typography>
							<Typography variant="body2" color="text.secondary">
								60 дней заморозки
							</Typography>
							<Typography
								sx={{
									fontWeight: "700",
									color: "#3446F6",
								}}
								gutterBottom
								variant="h5"
								component="div"
							>
								2000 c.
							</Typography>
							<Button
								sx={{
									height: "45px",
									width: "200px",
									borderRadius: "25px",
									margin: "10px",
									mb: 2,
									color: "#fff",
									backgroundColor: "#3446f6",
								}}
								variant="contained"
							>
								Подробнее в <TelegramIcon sx={{ display: "flex", ml: 1 }} />
							</Button>
						</CardContent>
					</CardActionArea>
				</Card>
			</Box>
		</Box>
	)
}

export default Tickets
