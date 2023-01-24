import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

const Abonement365 = () => {
	const navigate = useNavigate()
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<Box
			data-aos="fade-up"
			data-aos-duration="800"
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				// alignItems: "center",
				backgroundColor: "#3446f6",
			}}
		>
			<span
				style={{
					position: "relative",
					top: "-100px",
				}}
				id="companies"
			></span>
			<Box
				data-aos="fade-up"
				data-aos-duration="600"
				sx={{
					mx: 6,
					width: "50%",
					display: "flex",
					justifyContent: "center",
					// alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Typography
					data-aos="fade-up"
					data-aos-duration="800"
					sx={{
						color: "#fff",
						fontWeight: "700",
						mb: 5,
					}}
					variant="h4"
					component="div"
				>
					Покупка абонемента
				</Typography>
				<Box
					data-aos="fade-up"
					data-aos-duration="600"
					sx={{
						display: "flex",
						justifyContent: "space-between",
						borderBottom: "1px solid lightgrey",

						// alignItems: "center",
					}}
				>
					<Typography
						sx={{
							my: 2,
							width: "50%",
							color: "lightgrey",

							fontSize: "18px",
						}}
						variant="h6"
						component="div"
					>
						Абонемент
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							// alignItems: "center",
						}}
					>
						<Typography
							sx={{
								mt: 2,
								color: "#fff",
								textAlign: "right",
							}}
							variant="h6"
						>
							3 Месяца
						</Typography>
						<Typography
							sx={{
								color: "lightgrey",
								fontSize: "18px",
								textAlign: "right",
							}}
							variant="h6"
						>
							30 дней заморозки
						</Typography>
					</Box>
				</Box>
				<Box
					data-aos="fade-up"
					data-aos-duration="600"
					sx={{
						display: "flex",
						justifyContent: "space-between",
						borderBottom: "1px solid lightgrey",
					}}
				>
					<Typography
						sx={{
							my: 2,
							width: "50%",
							color: "lightgrey",

							fontSize: "18px",
						}}
						variant="h6"
						component="div"
					>
						Стоимость
					</Typography>

					<Typography
						sx={{
							color: "lightgrey",
							fontSize: "18px",
							my: 2,
						}}
						variant="h6"
						component="div"
					>
						5990 сом
					</Typography>
				</Box>
				<Box
					data-aos="fade-up"
					data-aos-duration="600"
					sx={{
						display: "flex",
						justifyContent: "space-between",
						borderBottom: "1px solid lightgrey",
					}}
				>
					<Typography
						sx={{
							mt: 8,
							width: "50%",
							color: "#fff",
						}}
						variant="h6"
						component="div"
					>
						Итого к оплате:
					</Typography>

					<Typography
						sx={{
							color: "#fff",
							fontSize: "18px",
							fontWeight: "700",
							mt: 8,
						}}
						variant="h6"
						component="div"
					>
						5990 сом
					</Typography>
				</Box>
				<Box
					sx={{
						mt: 3,
						display: "flex",
						justifyContent: "right",
					}}
				>
					<Button
						onClick={() => navigate("/order")}
						sx={{
							height: "50px",
							width: "220px",
							borderRadius: "20px",
							margin: "10px",
							my: 2,
							color: "#3446f6",
							backgroundColor: "#fff",
							fontWeight: "700",
						}}
						variant="contained"
					>
						Приобрести
					</Button>
				</Box>
			</Box>
			<Box
				sx={{
					width: "50%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Card
					sx={{
						borderRadius: "20px",
						m: 2,
						width: 380,
						height: 450,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<CardActionArea
						sx={{
							height: 600,
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
							image="https://1fit.app/static/90-ba2aa1bdc1719df1e52efef65ff8713d.svg"
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
									mt: 2,
								}}
								gutterBottom
								variant="h5"
								component="div"
							>
								5990 c.
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Box>
		</Box>
	)
}

export default Abonement365
