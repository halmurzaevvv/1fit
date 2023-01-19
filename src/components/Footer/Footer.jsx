import { Box, Typography } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"

const Footer = () => {
	return (
		<Box
			sx={{
				// backgroundColor: "#3446F6",
				height: "100vh",
				width: "100%",
				display: "flex",
				alignItems: "center",
				// justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<Container>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Typography
						sx={{
							textAlign: "center",
							mt: 15,
							fontWeight: "700",
						}}
						variant="h4"
						component="div"
					>
						Contact us
					</Typography>
					<Typography
						sx={{
							textAlign: "center",
							mt: 5,
							fontWeight: "700",
							width: "600px",
						}}
						variant="h6"
						component="div"
					>
						We love our guests and are always happy to chat, subscribe to our
						social networks and always stay up to date.
					</Typography>
					<Box
						sx={{
							mt: 5,
							scale: "0.8",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<a
							style={{
								width: "100px",
								textAlign: "center",
							}}
							href="https://www.instagram.com/halmurzaevvv/"
						>
							<img
								style={{
									width: "100px",
								}}
								className="footer-icon footers"
								src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
								alt="#"
							/>
						</a>
					</Box>
					<Typography
						sx={{
							textAlign: "center",
							mt: 3,
							fontWeight: "700",
						}}
						variant="h6"
						component="div"
					>
						+996 995 444 111
					</Typography>
					<Typography
						sx={{
							textAlign: "center",
							mt: 3,
							fontWeight: "700",
						}}
						variant="h6"
						component="div"
					>
						onetwothree@gmail.com
					</Typography>
					<Typography
						sx={{
							textAlign: "center",
							mt: 3,
							fontWeight: "700",
						}}
						variant="h6"
						component="div"
					>
						Offers of cooperation will be considered exclusively by mail
					</Typography>
				</Box>
			</Container>
		</Box>
	)
}

export default Footer

{
	/* <section className="footer">
			<Container className="center-footer">
				<Row className="block-footer">
					<h1 className="footer-title footers" id="contacts">
						Contact us
					</h1>
					<h3 className="footer-descr footers">
						We love our guests and are always happy to chat, subscribe to our
						social networks and always stay up to date.
					</h3>
					<a href="https://www.instagram.com/halmurzaevvv/">
						<img
							className="footer-icon footers"
							src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
							alt="#"
						/>
					</a>

					<p className="footers footer-contact">+996 995 444 111</p>
					<p className="footers footer-mail ">onetwothree@gmail.com</p>
					<p className="footers footer-bottom ">
						Offers of cooperation will be considered exclusively by mail
					</p>
				</Row>
			</Container>
		</section> */
}
