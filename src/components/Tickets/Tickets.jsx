import { Box, Button, Container, Typography } from "@mui/material"
import React, { useEffect } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { CardActionArea } from "@mui/material"
import { maxHeight } from "@mui/system"
import TelegramIcon from "@mui/icons-material/Telegram"
import AOS from "aos"
import "aos/dist/aos.css"

const Tickets = () => {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<Box
			sx={{
				backgroundColor: "#3446F6",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<span id="prices"></span>
			<Box
				data-aos="fade-up"
				data-aos-duration="800"
				sx={{
					width: "100%",
					textAlign: "center",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Typography
					data-aos="fade-up"
					data-aos-duration="400"
					sx={{
						textAlign: "center",
						mt: 10,
						mb: 5,
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
				data-aos="fade-up"
				data-aos-duration="600"
				sx={{
					mb: 8,
				}}
			>
				<Card
					sx={{
						borderRadius: "20px",
						m: 2,
						width: 280,
						height: 380,
						display: "inline-block",
					}}
				>
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
							image="https://1fit.app/static/365-3c504b41db214080bac2b520b08cda20.svg"
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
								11990 c.
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
				<Card
					sx={{
						borderRadius: "20px",
						m: 2,
						width: 280,
						height: 380,
						display: "inline-block",
					}}
				>
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
							height="200"
							image="https://1fit.app/static/90-ba2aa1bdc1719df1e52efef65ff8713d.svg"
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
								90 дней
							</Typography>
							<Typography variant="body2" color="text.secondary">
								30 дней заморозки
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
								5990 c.
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
				<Card
					sx={{
						borderRadius: "20px",
						m: 2,
						width: 280,
						height: 380,
						display: "inline-block",
					}}
				>
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
							height="200"
							image="https://1fit.app/static/180-67576f0723985ccf651e6ac9f0735d67.svg"
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
								180 дней
							</Typography>
							<Typography variant="body2" color="text.secondary">
								45 дней заморозки
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
								10990 c.
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
				<Card
					sx={{
						borderRadius: "20px",
						m: 2,
						width: 280,
						height: 380,
						display: "inline-block",
					}}
				>
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
							height="200"
							image="https://1fit.app/static/730-d4829ac78fe32da27084ad6309d642a3.svg"
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
								720 дней
							</Typography>
							<Typography variant="body2" color="text.secondary">
								90 дней заморозки
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
								22990 c.
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
