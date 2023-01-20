import { Box, Card, CardContent, Container, Typography } from "@mui/material"
import React from "react"

const DescriptionCompanies = () => {
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				flexWrap: "wrap",
			}}
		>
			<Box
				sx={{
					mx: 6,
					my: 6,
					width: "100%",
				}}
			>
				<Box
					sx={{
						width: "100%",
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
						Включите абонемент от 1Fit
					</Typography>
				</Box>
				<Box
					sx={{
						marginTop: "50px",
						display: "flex",
						alignItems: "top",
						flexWrap: "wrap",
						justifyContent: "space-evenly",
					}}
				>
					<CardContent
						sx={{
							maxWidth: "320px",
							flexWrap: "wrap",
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
								height: "50px",
								fontWeight: "700",
							}}
							variant="h6"
							component="div"
						>
							Локация
						</Typography>

						<Typography
							sx={{
								fontSize: "15px",
								color: "#383838",
							}}
						>
							В нашем абонементе более 1000 залов и студий. Занимайтесь где и
							когда угодно
						</Typography>
					</CardContent>
					<CardContent
						sx={{
							maxWidth: "320px",
							flexWrap: "wrap",
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
							2
						</Typography>
						<Typography
							sx={{
								height: "50px",
								fontWeight: "700",
							}}
							variant="h6"
							component="div"
						>
							Разнообразие
						</Typography>

						<Typography
							sx={{
								fontSize: "15px",
								color: "#383838",
							}}
						>
							Йога, скалолазание, бассейны, залы. Каждый сотрудник найдет
							занятие по душе
						</Typography>
					</CardContent>
					<CardContent
						sx={{
							maxWidth: "320px",
							flexWrap: "wrap",
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
							3
						</Typography>
						<Typography
							sx={{
								height: "50px",
								fontWeight: "700",
							}}
							variant="h6"
							component="div"
						>
							Сопровождение
						</Typography>

						<Typography
							sx={{
								fontSize: "15px",
								color: "#383838",
							}}
						>
							Ваш менеджер 1Fit всегда готов вам помочь, а также вопросы
							пользователей мгновенно решаются через службу поддержки
						</Typography>
					</CardContent>
					<CardContent
						sx={{
							maxWidth: "320px",
							flexWrap: "wrap",
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
							4
						</Typography>
						<Typography
							sx={{
								height: "50px",
								fontWeight: "700",
							}}
							variant="h6"
							component="div"
						>
							Заморозка / Переоформление
						</Typography>

						<Typography
							sx={{
								fontSize: "15px",
								color: "#383838",
							}}
						>
							Наш абонемент возможно заморозить и так же при необходимости
							переоформить на другого сотрудника
						</Typography>
					</CardContent>

					<CardContent
						sx={{
							maxWidth: "320px",
							flexWrap: "wrap",
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
							5
						</Typography>
						<Typography
							sx={{
								height: "50px",
								fontWeight: "700",
							}}
							variant="h6"
							component="div"
						>
							Комплексный подход
						</Typography>

						<Typography
							sx={{
								fontSize: "15px",
								color: "#383838",
							}}
						>
							Мы заботимся не только о физическом состоянии, мы предлагаем
							разные тренинги от наших специалистов
						</Typography>
					</CardContent>
					<CardContent
						sx={{
							maxWidth: "320px",
							flexWrap: "wrap",
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
							6
						</Typography>
						<Typography
							sx={{
								height: "50px",
								fontWeight: "700",
							}}
							variant="h6"
							component="div"
						>
							Упрощение оплаты
						</Typography>

						<Typography
							sx={{
								fontSize: "15px",
								color: "#383838",
							}}
						>
							Мы предоставляем всю необходимую закрывающую документацию
						</Typography>
					</CardContent>
				</Box>
				{/* <Box
					sx={{
						mx: 6,
					}}
				>
					<Box
						sx={{
							height: "300px",
							width: "40%",
							backgroundImage:
								"url('https://1fit.app/static/corporate-7a63df29733b15c6bdc81fed6b6cb338.jpg')",
							backgroundPosition: "0 0",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					/>
					<Box sx={{}}>
						<Typography
							sx={{
								flexDirection: ",

								fontSize: "15px",
								color: "#383838",
							}}
						>
							Компании, которые с нами сотрудничают
						</Typography>
					</Box>
				</Box> */}
			</Box>
		</Box>
	)
}

export default DescriptionCompanies
