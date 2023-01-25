import React, { useContext } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { productContext } from "../Contexts/OutContext"
import { CardActionArea } from "@mui/material"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import { authContext } from "../Contexts/AuthContext"
import { Box, Grid, Paper, Item, styled, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { cartContext } from "../Contexts/CartContext"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"

const StudioCard = ({ item }) => {
	const { deleteProduct, saveEditStudio, toggleLike } =
		useContext(productContext)
	const { addStudioToFav, checkProductInFavorite } = useContext(cartContext)

	const { user } = React.useContext(authContext)

	const navigate = useNavigate()

	// console.log(item)
	return (
		<div>
			<Box
				sx={{
					// alignItems: "center",
					width: "100%",
					display: "flex",
					justifyContent: "space-evenly",
					flexWrap: "wrap",
				}}
			>
				<Card
					sx={{
						borderRadius: "15px",
						m: 2,
						width: 320,
						height: 400,
						display: "inline-block",
					}}
				>
					<Card
						sx={{
							height: 400,
							width: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							textAlign: "center",
						}}
					>
						<CardMedia
							sx={{
								width: "100%",
								scale: "0.6",
							}}
							component="img"
							image={
								"https://onefit-static.s3.amazonaws.com/media/fitness/None/amium3zuiqtrqf1cehazqvp69.jpg"
							}
						/>
						<CardContent>
							<Typography
								sx={{
									fontWeight: "700",
								}}
								gutterBottom
								variant="h5"
								component="div"
							>
								{item.title}
							</Typography>

							<Typography variant="body2" color="text.secondary">
								{item.address}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								sx={{
									height: "50px",
									fontSize: "10px",
									overflow: "hidden",
									padding: "5px",
									textOverflow: "ellipsis",
								}}
							>
								{item.description}
							</Typography>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									justifyContent: "space-evenly",
									alignItems: "center	",
								}}
							>
								<Typography variant="h6">⭐{item.rating} 4.9</Typography>
								<Box
									sx={{
										width: "30%",
										display: "flex",
										justifyContent: "space-evenly",
										alignItems: "center	",
									}}
								>
									<Button size="small" onClick={() => toggleLike(item.id)}>
										<ThumbUpIcon
											sx={{
												color: "#3446f6",
											}}
											size="small"
										>
											Like
										</ThumbUpIcon>
									</Button>

									<Typography variant="h6">{item.likes}</Typography>
									<CardActions className="cart-action2">
										<IconButton
											variant="outlined"
											size="small"
											onClick={() => addStudioToFav(item)}
										>
											<BookmarkBorderIcon
												className="card-btn"
												color={checkProductInFavorite(item.id) ? "primary" : ""}
											/>
										</IconButton>
									</CardActions>
								</Box>
							</Box>

							{/* {item.trainer === user.email ? ( */}
							<Box>
								<Button size="small" onClick={() => deleteProduct(item.id)}>
									Delete
								</Button>
								<Button
									size="small"
									onClick={() => navigate(`/edit/${item.id}`)}
								>
									Edit
								</Button>
							</Box>
							{/* ) : null} */}
						</CardContent>
					</Card>
				</Card>
			</Box>
		</div>
	)
}

export default StudioCard

// gutterBottom
// variant="h5"
// component="div"
// >
// {item.title}
// </Typography>
// </CardContent>
// <CardActions sx={{}}>
// <Typography variant="h6">⭐4.9</Typography>
// <Typography
// sx={{
// 	height: "20px",
// 	fontSize: "10px",
// 	// fontSize: "18px",
// 	// whiteSpace: "nowrap" /* Запрещаем перенос строк */,
// 	// overflow:
// 	// 	"hidden" /* Обрезаем все, что не помещается в область */,
// 	// padding: "5px" /* Поля вокруг текста */,
// 	// textOverflow: "ellipsis" /* Добавляем многоточие */,
// }}
// variant="h6"
// color="text.secondary"
// >
// {item.address}
// </Typography>
// <Typography
// sx={{
// 	height: "100px",
// 	fontSize: "10px",
// 	// whiteSpace: "nowrap" /* Запрещаем перенос строк */,
// 	overflow:
// 		"hidden" /* Обрезаем все, что не помещается в область */,
// 	padding: "5px" /* Поля вокруг текста */,
// 	textOverflow: "ellipsis" /* Добавляем многоточие */,
// }}
// variant="h6"
// >
// {item.description}
// </Typography>
// <Box>
// <Button size="small" onClick={() => deleteProduct(item.id)}>
// 	Delete
// </Button>
// <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
// 	Edit
// </Button>
// <CardActions className="cart-action2">
// 	<IconButton
// 	variant="outlined"
// 	size="small"
// 	onClick={() => addStudioToFav(item)}
// 	>
// 		<BookmarkBorderIcon
// 		className="card-btn"
// 		color={checkProductInFavorite(item.id) ? "primary" : ""} />
// 	</IconButton>
// </CardActions>
// </Box>
// </CardActions>
// </Box>
// >>>>>>> 70223aa67a16540d66a96095ae40c66a075fd28d
