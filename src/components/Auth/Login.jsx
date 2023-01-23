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

import { Link as RouterLink, useNavigate } from "react-router-dom"
import { authContext } from "../Contexts/AuthContext"

const theme = createTheme()

export default function Login() {
	const { login } = React.useContext(authContext)

	const [email, setEmail] = React.useState("")

	const [password, setPassword] = React.useState("")

	const navigate = useNavigate()

	function handleSubmit() {
		if (!email.trim() || !password.trim()) {
			alert("Заполните поля!")
			return
		}

		let formData = new FormData()
		formData.append("email", email)
		formData.append("password", password)
		login(formData, email)
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
				backgroundImage:
					"url('https://1fit.app/static/visual-2df67c4b2230228adad561b651b8068e.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "0 50%",
				backgroundAttachment: "fixed",
				backgroundSize: "55%",
			}}
		>
			{/* <Box
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
			></Box> */}

			<ThemeProvider
				theme={theme}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Container
					component="main"
					maxWidth="xs"
					sx={{
						width: "80%",
						mr: 10,
						my: 4,
						backgroundColor: "white",
						height: "450px",
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
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
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
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Button
								//   type="submit"
								fullWidth
								variant="contained"
								sx={{
									mt: 3,
									mb: 2,
									backgroundColor: "#3446f6",
								}}
								onClick={handleSubmit}
							>
								Log In
							</Button>
							<Grid container>
								<Grid item xs>
									<Link
										onClick={() => navigate("/forgotPassword")}
										// href="#"
										variant="body2"
										sx={{
											color: "#3446f6",
										}}
									>
										Забыли пароль?
									</Link>
								</Grid>
								<Grid item>
									<RouterLink to="/register">
										<Typography
											sx={{
												color: "#3446f6",
											}}
										>
											{"У вас еще нет учетной записи?"}
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
