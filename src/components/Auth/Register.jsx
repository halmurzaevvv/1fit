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

import { Link as RouterLink } from "react-router-dom"
import { authContext } from "../Contexts/AuthContext"

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	)
}

const theme = createTheme()

export default function Register() {
	const { register } = React.useContext(authContext)

	const [email, setEmail] = React.useState("")

	const [firstName, setFirstName] = React.useState("")

	const [lastName, setLastName] = React.useState("")

	const [password, setPassword] = React.useState("")

	const [confirmPassword, setConfirmPassword] = React.useState("")

	function handleSubmit() {
		if (
			!email.trim() ||
			!firstName.trim() ||
			!lastName.trim() ||
			!password.trim() ||
			!confirmPassword.trim()
		) {
			alert("Заполните поля!")
			return
		}

		let formData = new FormData()
		formData.append("email", email)
		formData.append("first_name", firstName)
		formData.append("last_name", lastName)
		formData.append("password", password)
		formData.append("password_confirm", confirmPassword)
		register(formData)
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
						height: "680px",
						borderRadius: "20px",
					}}
				>
					<CssBaseline />
					<Box
						sx={{
							pt: 8,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Avatar sx={{ m: 1, backgroundColor: "#3446f6" }}>
							<LockOutlinedIcon sx={{}} />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign up
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
								id="first_name"
								label="First Name"
								name="first_name"
								autoComplete="first_name"
								autoFocus
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								id="last_name"
								label="Last Name"
								name="last_name"
								autoComplete="last_name"
								autoFocus
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
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
								Register
							</Button>
							<Grid container>
								<Grid item xs>
									<Link
										sx={{
											color: "#3446f6",
										}}
										href="#"
										variant="body2"
									>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<RouterLink to="/login">
										<Typography
											sx={{
												color: "#3446f6",
											}}
										>
											{"Have an account? Sign In"}
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
