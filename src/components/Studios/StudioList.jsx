import React, { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import {
	Box,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material"
import { alpha, styled, useTheme } from "@mui/material/styles"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Toolbar from "@mui/material/Toolbar"
import SearchIcon from "@mui/icons-material/Search"
import Map from "../Map/Map"
import { Pagination } from "@mui/material"
import { productContext } from "../Contexts/OutContext"
import StudioCard from "./StudioCard"

//!-------------------category
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}

const names = [
	"Dance",
	"Gym",
	"IntenseWorkout",
	"MatrialArts",
	"RecoveryProcedures",
	"StrachingAndPilates",
	"SwimmingPool",
	"Yoga",
]

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	}
}

const StudioList = () => {
	const theme = useTheme()
	const [personName, setPersonName] = React.useState([])

	const [searchParams, setSearchParams] = useSearchParams()
	const [search, setSearch] = useState(searchParams.get("q") || "")

	const { getProducts, products } = useContext(productContext)

	const [currentPage, setCurrentPage] = useState(1)

	const pages = Math.ceil(products.length / 5)

	function currentData() {
		let begin = (currentPage - 1) * 5
		let end = begin + 5
		return products.slice(begin, end)
	}

	useEffect(() => {
		getProducts()
	}, [])

	useEffect(() => {
		setSearchParams({
			q: search,
		})
		console.log(searchParams.toString())
	}, [search])

	useEffect(() => {
		getProducts()
	}, [searchParams])

	// console.log(products)

	const handleChange = (event) => {
		const {
			target: { value },
		} = event
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		)
	}

	return (
		<Box
			sx={{
				// height: "100vh",
				width: "100%",
				display: "flex",
				// alignItems: "center",
				justifyContent: "right",
			}}
		>
			<Box
				sx={{
					pl: 5,
					pr: 5,
					width: "100%",
					height: "180px",
					background: "#fff",
					zIndex: 6,
					position: "fixed",
					flexWrap: "wrap",
				}}
			>
				<Box>
					<Box
						sx={{
							mt: 5,
						}}
					>
						<Typography
							sx={{
								mt: 50,
								color: "#3447F6",
								// width: "50%",
								fontWeight: "700",
							}}
							// variant="h6"
							component="span"
						>
							Главная{" "}
						</Typography>
						<Typography
							sx={{
								fontSize: "13px",
							}}
							component="span"
							color="grey"
						>
							/ Залы и студии
						</Typography>
					</Box>
					<Box>
						<Typography
							sx={{
								mt: 0,
								// width: "50%",
								fontWeight: "700",
								fontSize: "40px	",
							}}
							component="div"
						>
							Залы и студии{" "}
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						width: "100%",
						mb: 500,
					}}
				>
					<Toolbar component="div" sx={{ flexWrap: "wrap" }}>
						<Box
							sx={{
								width: "20%",
							}}
						>
							<TextField
								id="input-with-icon-textfield"
								label="Search..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<SearchIcon />
										</InputAdornment>
									),
								}}
								variant="standard"
							/>
						</Box>
						<FormControl sx={{ m: 1, width: 250 }}>
							<InputLabel sx={{ mt: -1 }} id="demo-multiple-name-label">
								Категории
							</InputLabel>
							<Select
								sx={{
									borderRadius: "25px",
									height: "40px",
								}}
								labelId="demo-multiple-name-label"
								id="demo-multiple-name"
								multiple
								value={personName}
								onChange={handleChange}
								input={<OutlinedInput label="Name" />}
								MenuProps={MenuProps}
							>
								{names.map((name) => (
									<MenuItem
										key={name}
										value={name}
										style={getStyles(name, personName, theme)}
									>
										{name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Toolbar>
				</Box>
			</Box>

			<Box
				sx={{
					mt: 10,
					width: "100%",
					display: "flex",
					justifyContent: "left",
					alignItems: "center",
					zIndex: 2,
				}}
			>
				{/* --------------------StudioCart------------------------- */}
				<Box
					sx={{
						width: "60%",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						{currentData().map((item) => (
							<StudioCard key={item.id} item={item} />
						))}
					</Box>
					<Box>
						<Pagination
							count={pages}
							variant="outlined"
							color="primary"
							page={currentPage}
							onChange={(e, p) => setCurrentPage(p)}
						/>
					</Box>
				</Box>

				{/* --------------------StudioCart end------------------------- */}
				{/* //!================================Map start=================================== */}
				<Box
					sx={{
						width: "50%",
						// height: "100vh",
						position: "sticky",
						bottom: "0px",
						right: "0px",
					}}
				>
					<Map />
				</Box>
				{/* //!================================Map end=================================== */}
			</Box>
		</Box>
	)
}

export default StudioList
