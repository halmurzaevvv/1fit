import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import { Link as RouterLink } from "react-router-dom"
import { authContext } from "../Contexts/AuthContext"
import { Alert, AlertTitle } from "@mui/material"

const theme = createTheme()

export default function ForgotPassword() {
	const { forgot_password } = React.useContext(authContext)

	const [email, setEmail] = React.useState("")

	function handleSubmit() {
		console.log(email)
		if (!email.trim()) {
			alert("Заполните поля!")
			return
		}

		let formData = new FormData()
		formData.append("email", email)
		forgot_password(formData, email)
	}

	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
				backgroundColor: "#3446f6",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					width: "60%",
					scale: "0.9",
					height: "100%",
					backgroundImage:
						"url('https://1fit.app/static/visual-2df67c4b2230228adad561b651b8068e.png')",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "0 0",
					backgroundSize: "cover",
					mr: 0,
					pr: 0,
				}}
			></Box>

			<ThemeProvider
				theme={theme}
				sx={{
					ml: 0,
					width: "40%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Container
					component="main"
					maxWidth="xs"
					sx={{
						mr: 10,
						my: 4,
						backgroundColor: "white",
						// height: "380px",
						borderRadius: "20px",
					}}
				>
					<CssBaseline />
					<Box
						sx={{
							pt: 6,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Avatar
							sx={{
								m: 1,
								bgcolor: "secondary.main",
								backgroundColor: "#3446f6",
							}}
						>
							<LockOpenIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Восстановить пароль
						</Typography>
						<Box component="form" noValidate sx={{ mt: 1 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Button
								fullWidth
								variant="contained"
								sx={{
									mt: 3,
									mb: 2,
									backgroundColor: "#3446f6",
								}}
								onClick={handleSubmit}
							>
								Восстановить пароль
							</Button>
							{/* <Alert severity="info">
								Если существует учетная запись, привязанная к этому электронному
								адресу, то в ближайшее время на него будет отправлено сообщение
								с секретным кодом для сброса пароля.
							</Alert> */}
							<Grid container>
								<Grid item>
									<RouterLink to="/login">
										<Typography
											sx={{
												mt: 1,
												mb: 3,
												color: "#3446f6",
											}}
										>
											{"Вернуться ко входу в систему"}
										</Typography>
									</RouterLink>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		</Box>
	)
}
