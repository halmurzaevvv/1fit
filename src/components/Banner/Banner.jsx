import { Box, Button, Container } from "@mui/material"
import React, { useEffect } from "react"
import "./Banner.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Banner = () => {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className="banner">
			<div className="banner_container">
				<span
					style={{
						position: "relative",
						top: "-5000px",
					}}
					id="home"
				></span>
				<div className="banner__left">
					<div>
						<h4
							className="banner__left_numbers"
							data-aos="fade-up"
							data-aos-duration="600"
						>
							0 · 0 · 12
						</h4>
						<h1
							className="banner__left_title"
							data-aos="fade-up"
							data-aos-duration="800"
						>
							Ваш абонемент на все виды спорта
						</h1>
						<div className="banner__left_bottom">
							<Button
								sx={{
									height: "50px",
									width: "220px",
									borderRadius: "20px",
									margin: "10px",
									mb: 2,
									color: "#3446f6",
									backgroundColor: "#fff",
								}}
								className="banner__price_btn"
								variant="contained"
							>
								Посмотреть цены
							</Button>
							<span className="banner__price">От 2000 с. /месяц</span>
						</div>
					</div>
				</div>
				<div className="banner__right">
					<img
						className="banner_img"
						src="https://1fit.app/static/visual-3c11745356863fba7d2a794fe11a2a5e.png"
						alt="Header Img"
					/>
				</div>
			</div>
		</section>

		//     <section className="banner" id="home">
		//     <Container>
		//         <Row className="align-items-center">
		//             <Col xs={12} md={6} xl={7}>
		//                 <h1>
		//                     {`Pizzeria Neapoletana`}
		//                     <br />
		//                     <span className="wrap">
		//                         {text}
		//                         <br />
		//                     </span>
		//                 </h1>
		//                 <p>Place your first order and get 10% off</p>
		//                 <span className="tagline">PIZZERIA OPEN FROM 11 TO 21 HOURS</span>
		//                 <button onClick={() => goToMenu()}>
		//                     ORDER <ArrowRightCircle size={25} />
		//                 </button>
		//             </Col>
		//             <Col className="headerImg" xs={12} md={6} xl={5}>
		//                 <img
		//                     src="https://www.pizzaupten.com/wp-content/uploads/2022/02/pizza.png"
		//                     alt="Header Img"
		//                 />
		//             </Col>
		//         </Row>
		//     </Container>
		// </section>
		// )
	)
}

export default Banner
