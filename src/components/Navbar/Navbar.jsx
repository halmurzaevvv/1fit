import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import { Navigate, useNavigate } from "react-router-dom"
import { authContext } from "../Contexts/AuthContext"
import { useState } from "react"
import { useEffect } from "react"
import LogoutIcon from "@mui/icons-material/Logout"

const settings = ["Profile", "Account", "Dashboard", "Logout"]

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)
	const { setUser } = React.useContext(authContext)

	useEffect(() => {
		let user = localStorage.getItem("username")

		if (user) {
			setUser(user)
		}
	}, [])

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	const { logout, user } = React.useContext(authContext)

	const navigate = useNavigate()

	return (
		<AppBar
			sx={{
				backgroundColor: "#fff",
				color: "black",
			}}
			position="sticky"
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<div>
						<Box>
							<Typography
								href="#home"
								onClick={() => {
									navigate("/?q=#home")
								}}
								variant="h6"
								noWrap
								component="a"
								sx={{
									mr: 2,
									display: { xs: "none", md: "flex" },
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}
							>
								LOGO
							</Typography>
						</Box>
					</div>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							<MenuItem>
								<Typography textAlign="center">Login</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						LOGO
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
					>
						{user ? (
							<Box
								sx={{
									width: "100%",
									flexGrow: 1,
									display: "flex",
									justifyContent: "space-between",
								}}
							>
								<Box
									sx={{
										flexGrow: 1,
										display: { xs: "none", md: "flex" },
									}}
								>
									<Button
										onClick={() => navigate("/products")}
										sx={{ my: 2, color: "black", display: "block" }}
									>
										Залы и студии
									</Button>
									<Button
										href="#prices"
										onClick={() => navigate("/?q=#prices")}
										sx={{ my: 2, color: "black" }}
									>
										Цены
									</Button>
									<Button
										href="#companies"
										onClick={() => navigate("/companies")}
										sx={{ my: 2, pt: 1, color: "black", display: "block" }}
									>
										Компаниям
									</Button>
									<Button
										href="#contacts"
										onClick={() => {
											navigate("/?q=#contacts")
										}}
										sx={{ my: 2, pt: 1, color: "black", display: "block" }}
									>
										Контакты
									</Button>
								</Box>
								<Box
									sx={{
										flexGrow: 1,
										display: { xs: "none", md: "flex" },
										justifyContent: "right",
									}}
								>
									<Button
										onClick={() => navigate("/admin")}
										sx={{ my: 2, color: "black", display: "block" }}
									>
										Admin Page
									</Button>
									<Typography sx={{ my: 3, color: "black", display: "block" }}>
										{user}
									</Typography>
									<Button
										onClick={() => logout()}
										sx={{ my: 2, color: "black", display: "block" }}
									>
										<LogoutIcon
											sx={{
												color: "black",
												display: "flex",
											}}
										/>
									</Button>
								</Box>
							</Box>
						) : (
							<>
								<Button
									onClick={() => navigate("/login")}
									sx={{ my: 2, color: "black", display: "block" }}
								>
									Login
								</Button>
								<Button
									onClick={() => navigate("/register")}
									sx={{ my: 2, color: "black", display: "block" }}
								>
									Register
								</Button>
							</>
						)}
					</Box>
					{/* function goToContacts() {navigate("/?q=#contacts")} */}
					{/* <Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box> */}
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Navbar
