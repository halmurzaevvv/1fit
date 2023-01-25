import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import PasswordIcon from "@mui/icons-material/Password"

import { Link as RouterLink, useNavigate } from "react-router-dom"
import { authContext } from "../Contexts/AuthContext"

const theme = createTheme()

export default function ForgotPasswordComplete() {
	const { forgot_password_complete } = React.useContext(authContext)

	const [email, setEmail] = React.useState("")

	const [code, setCode] = React.useState("")

	const [password, setPassword] = React.useState("")

	const [confirmPassword, setConfirmPassword] = React.useState("")

	const navigate = useNavigate()

	function handleSubmit() {
		if (
			!email.trim() ||
			!code.trim() ||
			!password.trim() ||
			!confirmPassword.trim()
		) {
			alert("Заполните поля!")
			return
		}

		let formData = new FormData()
		formData.append("email", email)
		formData.append("code", code)
		formData.append("password", password)
		formData.append("password_confirm", confirmPassword)
		forgot_password_complete(formData)
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
						height: "570px",
						borderRadius: "20px",
					}}
				>
					<CssBaseline />
					<Box
						sx={{
							pt: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Avatar sx={{ m: 1, backgroundColor: "#3446f6" }}>
							<PasswordIcon sx={{}} />
						</Avatar>
						<Typography component="h1" variant="h5">
							Введите новый пароль
						</Typography>
						<Box
							component="form"
							// onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 1 }}
						>
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

							<TextField
								margin="normal"
								required
								fullWidth
								id="code"
								label="Secret Code"
								name="code"
								autoComplete="code"
								autoFocus
								value={code}
								onChange={(e) => setCode(e.target.value)}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Confirm password"
								type="password"
								id="password-confirm"
								autoComplete="current-password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>

							<Button
								// type="submit"
								onClick={handleSubmit}
								fullWidth
								variant="contained"
								sx={{ backgroundColor: "#3446f6", mt: 3, mb: 2 }}
							>
								Сохранить
							</Button>
							<Grid container>
								<Grid item>
									<RouterLink to="/login">
										<Typography
											sx={{
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
