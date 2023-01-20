import { Box, Button, Typography } from "@mui/material"
import React from "react"

const BannerCompanies = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				// alignItems: "center",
				backgroundColor: "RGB(10, 18, 50)",
			}}
		>
			<Box
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
					sx={{
						color: "#fff",
						fontWeight: "700",
					}}
					variant="h4"
					component="div"
				>
					Корпоративный абонемент
				</Typography>
				<Typography
					sx={{
						my: 2,
						width: "90%",
						color: "#fff",
					}}
					variant="h6"
					component="div"
				>
					1000+ залов в Алматы, Астане, Шымкенте и Караганде для ваших коллег
				</Typography>
				<Button
					sx={{
						fontSize: "13px",
						fontWeight: "700",
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
					Оставить заявку
				</Button>
			</Box>
			<Box
				sx={{
					width: "50%",
					backgroundImage:
						"url('https://1fit.app/static/hero-cda868a08293c7b7c09e73ddc0b536aa.png')",
					backgroundPosition: "0 0",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			/>
		</Box>
	)
}

export default BannerCompanies
