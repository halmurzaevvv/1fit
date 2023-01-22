import { Button, Tooltip, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect } from "react"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import ListSubheader from "@mui/material/ListSubheader"
import IconButton from "@mui/material/IconButton"
import InfoIcon from "@mui/icons-material/Info"
import { useNavigate } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

const HomeCategories = () => {
	useEffect(() => {
		AOS.init()
	}, [])

	const navigate = useNavigate()

	return (
		<div
			data-aos="fade-up"
			data-aos-duration="800"
			sx={{
				height: "100vh",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-around",
			}}
		>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "100px",
					marginBottom: "30px",
					// flexDirection: "column",
				}}
			>
				<Typography
					sx={{
						width: "85%",
						fontWeight: "700",
					}}
					variant="h4"
					component="div"
				>
					Виды занятий
				</Typography>
				<Typography
					onClick={() => navigate("/studios")}
					sx={{
						width: "15%",
						fontWeight: "700",
						color: "#3446F6",
					}}
					variant="h6"
					component="div"
				>
					<Button
						sx={{
							fontWeight: "700",
						}}
					>
						Смотреть залы{" "}
						<ArrowForwardIosIcon
							sx={{
								display: { xs: "flex" },
								display: "inline-block",
								scale: "0.7",
								my: "-5px",
							}}
						/>
					</Button>
				</Typography>
			</Box>
			<Box
				sx={{
					width: "100%",
					mt: 0,
					pt: 0,
				}}
			>
				<ImageList
					sx={{
						height: "550px",
					}}
					cols={4}
					gap={12}
				>
					{itemData.map((item) => (
						<ImageListItem
							sx={{
								borderRadius: "20px",
							}}
							key={item.img}
						>
							<img
								style={{ borderRadius: "20px" }}
								src={`${item.img}?w=248&fit=crop&auto=format`}
								srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
								alt={item.title}
								loading="lazy"
							/>
							<ImageListItemBar
								sx={{
									borderRadius: "20px",
									fontWeight: "700",
								}}
								title={item.title}
								// actionIcon={
								// 	<IconButton
								// 		sx={{ color: "rgba(255, 255, 255, 0.54)" }}
								// 		aria-label={`info about ${item.title}`}
								// 	>
								// 		<InfoIcon />
								// 	</IconButton>
								// }
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Box>
		</div>
	)
}

const itemData = [
	{
		img: "https://onefit-static.s3.amazonaws.com/media/categories/2/b8shco8hfosaule7tgm5mxkao.jpg",
		title: "Тренажерный зал",
		rows: 1,
		cols: 1,
		featured: true,
	},
	{
		img: "https://onefit-static.s3.amazonaws.com/media/categories/1/8ws7f355xrfex0n00qif6dgng.jpg",
		title: "Занятия в бассейне",
		rows: 1,
		cols: 2,
	},
	{
		img: "https://onefit-static.s3.amazonaws.com/media/categories/14/053mo6l06a4lt0jbx6edjhpbq.jpg",
		title: "Йога",
	},
	{
		img: "https://onefit-static.s3.amazonaws.com/media/categories/25/wm46vpbyxu2gud8zflnyju3ot.jpg",
		title: "Восстановительные процедуры",
		cols: 2,
	},
	{
		img: "https://onefit-static.s3.amazonaws.com/media/categories/3/65gkkn8k3ndesil87j9kmf6pn.jpg",
		title: "Танцы",
		cols: 2,
	},
	{
		img: "https://onefit-static.s3.amazonaws.com/media/categories/27/yyxukr69iqkcp5tkt8uq9z49j.jpg",
		title: "Скретчинг и Пилатес",
		rows: 2,
		cols: 2,
		featured: true,
	},
	{
		img: "https://onefit-static.s3.amazonaws.com/media/categories/32/zs6fhdy7kh2xu9chhc9uz60kk.jpg",
		title: "Интенсивные тренировки",
	},
	{
		img: "https://onefit-static.s3.amazonaws.com/media/categories/18/ojg1gcmn7ehx1m8jyn9xspfd6.jpg",
		title: "Боевые искусства",
	},
]

export default HomeCategories
