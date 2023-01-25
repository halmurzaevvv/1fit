import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Cards from "react-credit-cards"
import "react-credit-cards/es/styles-compiled.css"
import "./OrderForm.css"
import "aos/dist/aos.css"
import AOS from "aos"
import { useNavigate } from "react-router-dom"
import { Box, Button, Typography } from "@mui/material"
import { useEffect } from "react"

const CreditCard = () => {
	const [number, SetNumber] = useState("")
	const [name, SetName] = useState("")
	const [month, SetMonth] = useState("")
	let [expiry, SetExpiry] = useState("")
	const [cvc, SetCvc] = useState("")
	const [focus, SetFocus] = useState("")

	const handleDate = (e) => {
		SetMonth(e.target.value)
		SetExpiry(e.target.value)
	}

	const handleExpiry = (e) => {
		SetExpiry(month.concat(e.target.value))
	}
	const navigate = useNavigate()
	useEffect(() => {
		AOS.init()
	}, [])

	const cartCleaner = () => {
		localStorage.removeItem("cart")
		alert("Order successfully paid")
	}

	return (
		<Box
			data-aos="fade-up"
			data-aos-duration="800"
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "right",
				alignItems: "center",
				backgroundColor: "#3446f6",
				color: "#fff",
			}}
		>
			<span
				style={{
					position: "relative",
					top: "-100px",
				}}
				id="companies"
			></span>
			<Box
				data-aos="fade-up"
				data-aos-duration="600"
				sx={{
					mx: 6,
					width: "70%",
					display: "flex",
					justifyContent: "center",
					// alignItems: "center",
					flexDirection: "column",
				}}
			>
				<div clasName="rccs__card rccs__card--unknown">
					<Cards
						number={number}
						name={name}
						expiry={expiry}
						cvc={cvc}
						focused={focus}
					/>
				</div>

				<br />
				<form>
					<div className="row">
						<div className="col-sm-11">
							<label for="name">Card Number</label>
							<input
								type="tel"
								className="form-control"
								value={number}
								name="number"
								maxlength="16"
								pattern="[0-9]+"
								onChange={(e) => {
									SetNumber(e.target.value)
								}}
								onFocus={(e) => SetFocus(e.target.name)}
							></input>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col-sm-11">
							<label for="name">Card Name</label>
							<input
								type="text"
								className="form-control"
								value={name}
								name="name"
								onChange={(e) => {
									SetName(e.target.value)
								}}
								onFocus={(e) => SetFocus(e.target.name)}
							></input>
						</div>
					</div>
					<br />
					<div className="row">
						<div
							className="col=sm-8"
							style={{
								...{ "padding-right": "12em" },
								...{ "padding-left": "1em" },
							}}
						>
							<label for="month">Expiration Date</label>
						</div>
						<div
							className="col=sm-4"
							style={{
								...{ "padding-right": "12em" },
								...{ "padding-left": "20em" },
							}}
						>
							<label for="cvv">CVV</label>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-4">
							<select
								className="form-control"
								name="expiry"
								onChange={handleDate}
							>
								<option value=" ">Month</option>
								<option value="01">Jan</option>
								<option value="02">Feb</option>
								<option value="03">Mar</option>
								<option value="04">April</option>
								<option value="05">May</option>
								<option value="06">June</option>
								<option value="07">July</option>
								<option value="08">Aug</option>
								<option value="09">Sep</option>
								<option value="10">Oct</option>
								<option value="11">Nov</option>
								<option value="12">Dec</option>
							</select>
						</div>
						&nbsp;
						<div className="col-sm-4">
							<select
								className="form-control"
								name="expiry"
								onChange={handleExpiry}
							>
								<option value=" ">Year</option>
								<option value="21">2021</option>
								<option value="22">2022</option>
								<option value="23">2023</option>
								<option value="24">2024</option>
								<option value="25">2025</option>
								<option value="26">2026</option>
								<option value="27">2027</option>
								<option value="28">2028</option>
								<option value="29">2029</option>
								<option value="30">2030</option>
							</select>
						</div>
						<div className="col-sm-3">
							<input
								type="tel"
								name="cvc"
								maxlength="3"
								className=" form-control card"
								value={cvc}
								pattern="\d*"
								onChange={(e) => {
									SetCvc(e.target.value)
								}}
								onFocus={(e) => SetFocus(e.target.name)}
							></input>
						</div>
					</div>
					<br />
					<input
						onClick={() => cartCleaner()}
						type="submit"
						className="btn btn-light form-control"
						value="Submit"
					/>
				</form>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "right",
					height: "60%",
					width: "80%",
					backgroundImage:
						"url('https://1fit.app/static/mobile-fd67724e0a9740af990c2daec4ada93d.png')",
					backgroundPosition: "0 0",
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
				}}
			/>
		</Box>
		// <div className="conteiner">
		//   {/* <div className="rccs__card backcolor"> */}

		// <div clasName="rccs__card rccs__card--unknown">
		//   <Cards
		//     number={number}
		//     name={name}
		//     expiry={expiry}
		//     cvc={cvc}
		//     focused={focus}
		//   />
		// </div>

		// <br />
		// <form>
		//   <div className="row">
		//     <div className="col-sm-11">
		//       <label for="name">Card Number</label>
		//       <input
		//         type="tel"
		//         className="form-control"
		//         value={number}
		//         name="number"
		//         maxlength="16"
		//         pattern="[0-9]+"
		//         onChange={(e) => {
		//           SetNumber(e.target.value);
		//         }}
		//         onFocus={(e) => SetFocus(e.target.name)}
		//       ></input>
		//     </div>
		//   </div>
		//   <br />
		//   <div className="row">
		//     <div className="col-sm-11">
		//       <label for="name">Card Name</label>
		//       <input
		//         type="text"
		//         className="form-control"
		//         value={name}
		//         name="name"
		//         onChange={(e) => {
		//           SetName(e.target.value);
		//         }}
		//         onFocus={(e) => SetFocus(e.target.name)}
		//       ></input>
		//     </div>
		//   </div>
		//   <br />
		//   <div className="row">
		//     <div
		//       className="col=sm-8"
		//       style={{
		//         ...{ "padding-right": "12em" },
		//         ...{ "padding-left": "1em" },
		//       }}
		//     >
		//       <label for="month">Expiration Date</label>
		//     </div>
		//     <div
		//       className="col=sm-4"
		//       style={{
		//         ...{ "padding-right": "12em" },
		//         ...{ "padding-left": "20em" },
		//       }}
		//     >
		//       <label for="cvv">CVV</label>
		//     </div>
		//   </div>

		//   <div className="row">
		//     <div className="col-sm-4">
		//       <select
		//         className="form-control"
		//         name="expiry"
		//         onChange={handleDate}
		//       >
		//         <option value=" ">Month</option>
		//         <option value="01">Jan</option>
		//         <option value="02">Feb</option>
		//         <option value="03">Mar</option>
		//         <option value="04">April</option>
		//         <option value="05">May</option>
		//         <option value="06">June</option>
		//         <option value="07">July</option>
		//         <option value="08">Aug</option>
		//         <option value="09">Sep</option>
		//         <option value="10">Oct</option>
		//         <option value="11">Nov</option>
		//         <option value="12">Dec</option>
		//       </select>
		//     </div>
		//     &nbsp;
		//     <div className="col-sm-4">
		//       <select
		//         className="form-control"
		//         name="expiry"
		//         onChange={handleExpiry}
		//       >
		//         <option value=" ">Year</option>
		//         <option value="21">2021</option>
		//         <option value="22">2022</option>
		//         <option value="23">2023</option>
		//         <option value="24">2024</option>
		//         <option value="25">2025</option>
		//         <option value="26">2026</option>
		//         <option value="27">2027</option>
		//         <option value="28">2028</option>
		//         <option value="29">2029</option>
		//         <option value="30">2030</option>
		//       </select>
		//     </div>
		//     <div className="col-sm-3">
		//       <input
		//         type="tel"
		//         name="cvc"
		//         maxlength="3"
		//         className=" form-control card"
		//         value={cvc}
		//         pattern="\d*"
		//         onChange={(e) => {
		//           SetCvc(e.target.value);
		//         }}
		//         onFocus={(e) => SetFocus(e.target.name)}
		//       ></input>
		//     </div>
		//   </div>
		//   <br />
		//   <input
		//     type="submit"
		//     className="btn btn-secondary form-control"
		//     value="Submit"
		//   />
		// </form>
		// </div>
	)
}
export default CreditCard
