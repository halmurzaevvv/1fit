import { Box, Card, CardContent, Container, Typography } from "@mui/material"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Description = () => {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<div
			sx={{
				height: "100vh",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexWrap: "wrap",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "100px",
					marginBottom: "100px",
					// flexDirection: "column",
				}}
			>
				<Typography
					sx={{
						width: "50%",
						fontWeight: "700",
					}}
					variant="h4"
					component="div"
				>
					1Fit — это новый способ добавить спорт в свою жизнь{" "}
				</Typography>
				<Typography
					sx={{
						width: "50%",
					}}
					variant="h6"
					component="div"
				>
					Приложение, в котором мы собрали несколько десятков активностей. Всё,
					от йоги до кроссфита
				</Typography>
			</Box>

			<Box
				data-aos="fade-up"
				data-aos-duration="800"
				sx={{
					display: "flex",
					alignItems: "top",
					flexWrap: "wrap",
					justifyContent: "space-between",
				}}
			>
				<CardContent
					sx={{
						maxWidth: "275px",
						display: "inline-block",
						height: "250px",
					}}
				>
					<Typography
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: "25px",
							width: "40px",
							height: "40px",
							backgroundColor: "#3447F6",
							color: "#fff",
						}}
						color="text.secondary"
						gutterBottom
						variant="h6"
					>
						1
					</Typography>
					<Typography
						sx={{
							fontSize: "30px",
							height: "50px",
							fontWeight: "700",
						}}
						variant="h4"
						component="div"
					>
						Это выгодно
					</Typography>

					<Typography variant="h6">
						Вы не платите за спортзал и бассейн по отдельности
					</Typography>
				</CardContent>
				<CardContent
					sx={{
						maxWidth: "275px",
						height: "250px",

						display: "inline-block",
					}}
				>
					<Typography
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: "25px",
							width: "40px",
							height: "40px",
							backgroundColor: "#3447F6",
							color: "#fff",
						}}
						color="text.secondary"
						gutterBottom
						variant="h6"
					>
						2
					</Typography>
					<Typography
						sx={{
							fontSize: "30px",
							height: "50px",
							fontWeight: "700",
						}}
						variant="h4"
						component="div"
					>
						По-разному
					</Typography>

					<Typography variant="h6">
						Любые активности — от фехтования до скалолазания
					</Typography>
				</CardContent>
				<CardContent
					sx={{
						maxWidth: "275px",

						display: "inline-block",
					}}
				>
					<Typography
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: "25px",
							width: "40px",
							height: "40px",
							backgroundColor: "#3447F6",
							color: "#fff",
						}}
						color="text.secondary"
						gutterBottom
						variant="h6"
					>
						3
					</Typography>
					<Typography
						sx={{
							fontSize: "30px",
							height: "50px",
							fontWeight: "700",
						}}
						variant="h4"
						component="div"
					>
						И в рассрочку
					</Typography>

					<Typography variant="h6">
						Через Kaspi, Jusan, Eurasian или Freedom Bank
					</Typography>
				</CardContent>
				<CardContent
					sx={{
						maxWidth: "275px",
						width: "100%",
						display: "inline-block",
					}}
				>
					<Typography
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: "25px",
							width: "40px",
							height: "40px",
							backgroundColor: "#3447F6",
							color: "#fff",
						}}
						color="text.secondary"
						gutterBottom
						variant="h6"
					>
						4
					</Typography>
					<Typography
						sx={{
							fontSize: "30px",
							height: "50px",
							fontWeight: "700",
							mb: 4,
						}}
						variant="h4"
						component="div"
					>
						И в любом городе
					</Typography>

					<Typography variant="h6">
						Алматы, Астана, Шымкент, Караганда
					</Typography>
				</CardContent>
			</Box>
		</div>
	)
}

export default Description
